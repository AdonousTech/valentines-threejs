import { Camera } from "./components/Camera";
import { Lights } from "./components/Lights";
import { Renderer } from "./systems/Renderer";
import { Resizer } from "./systems/Resizer";
import { WorldScene } from "./components/Scene";
import { Controls } from "./components/Controls";
import { RainbowMaterial } from "./systems/materials/RainbowMaterial";
import { DiamondMaterial } from "./systems/materials/DiamondMaterial";
import { Fireballs } from "./components/FireBalls";
//import { SmokeSystem } from "./systems/particles/SmokeParticles";
import { Sound } from "./components/Sound";
import { HeartParticleSystem } from "./systems/particles/HeartParticleSystem";
import { PostProcessingHub } from './components/PostProcessingHub';

// Props
import { loadScene } from "./models/ExternalScene";
 
export class World {

    scene;
    camera;
    gltfScene;
    container;
    controls;
    //fireball;
    rainbowMaterial
    fireCrackleSound; 
    lights;
    loveText;
    particleGeometry;
    postProcessingHub;
    renderer;
    resizer;
    //smokeSystem;
    sound;

    constructor(container) {
        this.camera = new Camera(this).createCamera();
        this.container = container;
        this.scene = new WorldScene().createScene();
        this.renderer = new Renderer().createRenderer();
        this.postProcessingHub = new PostProcessingHub(this.renderer, this.scene, this.camera);
        
        // Sounds preloaded
        this.fireCrackleSound = new Sound('gltfScene').createSound();
        
        this.container.append(this.renderer.domElement);

        // WebAudio requires initial user interaction before playing audio
        this.container.addEventListener('click', () => {
            //this.fireCrackleSound.audioElement.play();
            console.log('container clicked!');
        });

        // Create component
        
        // Add lights
        this.lights = new Lights()
        this.lights.createLights().forEach(light => {
            this.scene.add(light);
        });

        // Add Camera controls
        //this.controls = new Controls(this.camera, this.renderer.domElement).createControls();
        //this.controls.enabled = false;
        //this.camera.position.setZ( 6 );

        // Fireballs
/*         this.fireball = new Fireballs().createFireball();
        this.fireball.getBalls().forEach(fireball => {
            this.scene.add(fireball);
        }); */


        // Particles
        //this.particleGeometry = new HeartParticleSystem(200).createParticles();
        //console.log('this.particleGeometry.group :: ', this.particleGeometry.group);
        //this.addHeartParticles();
        //this.scene.add(this.particleGeometry.group);

        // Smoke Particles
/*         this.smokeSystem = new SmokeSystem().createParticles();
        this.addSmokeSystemParticles();
        this.scene.add(this.smokeSystem.group);
        console.log('scene after smoke :: ', this.scene); */

    }

    async init() {
        this.gltfScene = await loadScene();
        console.log("this.gltfScene", this.gltfScene); 
        this.gltfScene.scale.set( 1, 1, 1 );

        // Get the desired child mesh from the GLTF scene
        this.loveText = this.gltfScene.getObjectByName("love_text");
        console.log('lovetext :: ', this.loveText);
        this.loveText.material = new RainbowMaterial().createMaterial();
        this.scene.add(this.gltfScene);

        // Activate Resizer
        this.resizer = new Resizer(this.container, this.camera, this.renderer);
    }

    addHeartParticles() {
        for (let i = 0; i < 200; i++) {
            this.particleGeometry.addParticle();
        }
    }

    // Decrease number of smoke particles for performance boost
    addSmokeSystemParticles() {
        for (let i = 0; i < 200; i++) {
            this.smokeSystem.addParticle();
        }
    }

    getSmokeSystem() {
        return this.smokeSystem;
    }

    getCamera() {
        return this.camera;
    }

    getContainer() {
        return this.container;
    } 

    getControls() {
        return this.controls;
    }

    getFireball() {
        return this.fireball;
    }

    getLights() {
        return this.lights;
    }

    getScene() {
        return this.scene;
    }

    getGltfScene() {
        return this.gltfScene;
    }

    getLoveText() {
        return this.loveText;
    }

    getrenderer() {
        return this.renderer;
    }

    getPC() {
        return this.PC;
    }

    getMaterialSphere() {
        return this.materialSphere;
    }

    getParticleGeometry() {
        console.log("this.particleGeometry :: ", this.particleGeometry);
        return this.particleGeometry;
    }

    render() {
        // draw a single frame
        this.renderer.render(this.scene, this.camera);
        //this.postProcessingHub.render();
    }
}