import { Box3, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { setupModel } from "./setupModel ";

async function loadScene() {
    const path = "https://d58trmu4r2q50.cloudfront.net/three/models/valentines/valentines_1_1.gltf";
    const loader = new GLTFLoader();

    const [sceneData] = await Promise.all([
        loader.loadAsync(path)
    ]);

    const scene = setupModel(sceneData);
    scene.position.set(-25,0,20)

    return scene;
}

export { loadScene };

