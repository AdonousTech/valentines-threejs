import { WebGLRenderer } from "three";

export class Renderer extends WebGLRenderer {

    constructor() {
        super({ antialias: true });
        this.antialias = true;
        console.log('window.devicePixelRatio :: ', window.devicePixelRatio);
        this.setPixelRatio( window.devicePixelRatio );
        this.setSize( window.innerWidth, window.innerHeight );
        this.physicallyCorrectLights = true;
    }

    createRenderer() {
        return this;
    }

}