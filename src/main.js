import { World } from './World/World.js';
//import { FireGlowMaterial } from './World/systems/materials/FireGlowMaterial.js';

let camera;
let controls;
//let fireballs;
let lights;
let particleGeometry;
let rainbowUniforms;
let smokeSystem;
let PC;
let renderer;
let scene;

//Time
let lastTime = 0;
const time = performance.now();
const delta = (time - lastTime) * 0.001;

async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // Cache components
  camera = world.getCamera();
  controls = world.getControls();
  //fireballs = world.getFireball();
  lights = world.getLights();
  particleGeometry = world.getParticleGeometry();
  console.log('particleGeometry :: ', world.getParticleGeometry());
  PC = world.getPC();
  rainbowUniforms = world.getLoveText().material.uniforms;
  renderer = world.getrenderer();
  scene = world.getScene();
  //smokeSystem = world.getSmokeSystem();


  // draw the scene
  world.render();

  animate();
}

function animate() {

  requestAnimationFrame( animate );


    // material uniforms
    rainbowUniforms.time.value += 0.01;

    // update last time
    lastTime = time;

    // Run particle systems
    //runParticleSystem();

  // draw the scene
  renderer.clearDepth();
  renderer.render(scene, camera);

}

function runParticleSystem() {
  particleGeometry.update();
}

main();