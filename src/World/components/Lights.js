import { AmbientLight, DirectionalLight, PointLight } from 'three';

export class Lights {

    lights;

    constructor() {
        this.lights = [];

        const dirLight1 = new DirectionalLight( 0xffffff, 2.5 );
        dirLight1.position.set( 0, 0, 200 );
        dirLight1.target.position.set(0,0,0);
        this.lights.push(dirLight1);

        const dirLight2 = new DirectionalLight( 0xffffff, 3);
        dirLight2.position.set( 0, 20, 0 );
        this.lights.push(dirLight2);

        const ambientLight = new AmbientLight( 0x222222 );
        this.lights.push(ambientLight);
    }

    createLights() {
        return this.lights;
    }

    updateLights(time) {
    }

}