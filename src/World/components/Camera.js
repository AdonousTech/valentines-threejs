import { AudioListener, 
         PerspectiveCamera } from "three";
export class Camera extends PerspectiveCamera {


    constructor() {
        super();

        // Create an AudioListener object
        this.listener = new AudioListener();
        this.add(this.listener);

        this.fov = 40;
        this.aspect = window.innerWidth / window.innerHeight;
        this.near = 0.1;
        this.far = 1000;
        this.position.set(-1.217634352882197,1.7266283514639738,26.90185523078675);
    }

    createCamera() {
        return this;
    }

}