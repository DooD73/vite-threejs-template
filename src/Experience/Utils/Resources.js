import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import EventEmitter from './EventEmitter';

export default class Resources extends EventEmitter {
    constructor(assets) {
        super();

        // Options
        this.assets = assets;

        // Setup
        this.items = {};
        this.toLoad = this.assets.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders() {
        this.loaders = {};

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.gltfLoader.setDRACOLoader(dracoLoader);

        this.loaders.textureLoader = new THREE.TextureLoader();
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
    }

    startLoading() {
        // Load each asset
        for (const asset of this.assets) {
            if (asset.type === 'gltf') {
                this.loaders.gltfLoader.load(asset.path, (file) => {
                    this.assetLoaded(asset, file);
                });
            } else if (asset.type === 'texture') {
                this.loaders.textureLoader.load(asset.path, (file) => {
                    this.assetLoaded(asset, file);
                });
            } else if (asset.type === 'cubeTexture') {
                this.loaders.cubeTextureLoader.load(asset.path, (file) => {
                    this.assetLoaded(asset, file);
                });
            }
        }
    }

    assetLoaded(asset, file) {
        this.items[asset.name] = file;

        this.loaded++;

        if (this.loaded === this.toLoad) {
            this.trigger('ready');
        }
    }
}
