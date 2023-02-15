import { AdditiveBlending, Group, Mesh, MeshBasicMaterial, MeshPhongMaterial, NormalBlending, Shape, ExtrudeGeometry, MeshLambertMaterial, MeshStandardMaterial, MultiplyBlending } from "three";

export class HeartParticleSystem {

    group;
    particles;
    particleCount;
    particleVelocities;
    particleGeometry; 
    particleMaterial;
    heartShape;

    constructor(count) {
        this.group = new Group();
        this.particles = [];
        this.particleCount = count;

        this.particleVelocities = [];
        for (let i = 0; i < this.particleCount; i++) {
          this.particleVelocities.push({
            x: Math.random() * 0.05 + 0.01,
            y: Math.random() * 0.05 + 0.01,
            z: Math.random() * 0.05 + 0.01
          });
        }

        this.heartShape = new Shape();
        this.heartShape.moveTo( 0, 5 );
        this.heartShape.bezierCurveTo( 5, 5, 5, 0, 0, -5 );
        this.heartShape.bezierCurveTo( -5, -5, -5, 0, 0, 5 );

        const extrudeSettings = {
            depth: 1,
            bevelEnabled: true,
            bevelThickness: 0.5,
            bevelSize: 0.5,
            bevelSegments: 8
        };

        this.particleGeometry = new ExtrudeGeometry(this.heartShape, extrudeSettings);
        this.particleMaterial = new MeshStandardMaterial({
            color: 0xffffff,
            transparent: false,
            opacity: 0.1,
          });
    }

    addParticle() {
        let particle = new Mesh(this.particleGeometry, this.particleMaterial);
        particle.position.set(
            Math.random() * 50 - 25,
            Math.random() * 50 - 25,
            Math.random() * 50 - 25
          );
        particle.scale.set(
            Math.random() * 0.005 + 0.09,
            Math.random() * 0.005 + 0.09,
            Math.random() * 0.005 + 0.09
        );
        this.group.add(particle);
        this.group.position.setY(15);
        this.particles.push(particle);
        console.log('this.particles :: ', this.particles)

    }

    createParticles() {
        return this;
    }

    update() {
        for (let i = 0; i < this.particleCount; i++) {
        this.particlePositions[i * 3] += this.particleVelocities[i];
        this.particlePositions[i * 3 + 1] += this.particleVelocities[i];
        this.particlePositions[i * 3 + 2] += this.particleVelocities[i];

        // Wrap the particle position around the screen
        if (this.particlePositions[i * 3] > 50) {
            this.particlePositions[i * 3] -= 100;
        }
        if (this.particlePositions[i * 3 + 1] > 50) {
            this.particlePositions[i * 3 + 1] -= 100;
        }
        if (this.particlePositions[i * 3 + 2] > 50) {
            this.particlePositions[i * 3 + 2] -= 100;
        }
        if (this.particlePositions[i * 3] < -50) {
            this.particlePositions[i * 3] += 100;
        }
        if (this.particlePositions[i * 3 + 1] < -50) {
            this.particlePositions[i * 3 + 1] += 100;
        }
        if (this.particlePositions[i * 3 + 2] < -50) {
            this.particlePositions[i * 3 + 2] += 100;
        }
        }
    }
    
}