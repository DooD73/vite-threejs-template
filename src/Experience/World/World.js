import * as THREE from 'three';
import Experience from '../Experience';

export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        //Test Mesh
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);

        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
        });
    }

    update() {}
}
