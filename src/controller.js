import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {ArcballControls} from 'three/examples/jsm/controls/ArcballControls';
import cdModel from './assets/models/cd-case-model.glb';

let container;
let camera;
let controls;
let renderer;
let scene;
let model;
let topLight; let bottomLight;

const mixers = [];
const clock = new THREE.Clock();

/**
 * Initialize model element
 */
function init() {
	container = document.createElement('div');
	container.classList.add('model-container');
	document.body.appendChild(container);

	scene = new THREE.Scene();

	createCamera();
	createLights();
	loadModels();
	createRenderer();
	createControls();

	renderer.setAnimationLoop(() => {
		controls.update();
		update();
		render();
	});
}

/**
 * Define camera in scene
 */
function createCamera() {
	camera = new THREE.OrthographicCamera(-0.8, 0.8, 0.8, -0.8, 0.1, 100);
	camera.position.x = -2;
	camera.position.y = 1.8;
}

/**
 * Define lights in scene
 */
function createLights() {
	const ambientLight = new THREE.HemisphereLight(0xfffff0, 5);

	topLight = new THREE.PointLight(0xcd712c, 5, 100, 2);
	topLight.castShadow = true;
	topLight.position.x = 0;
	topLight.position.y = 1;
	topLight.position.z = 0;

	bottomLight = new THREE.PointLight(0xcd712c, 1, 100, 2);
	bottomLight.castShadow = true;

	scene.add(ambientLight, topLight, bottomLight);
}

/**
 * Add models to the scene
 */
function loadModels() {
	const loader = new GLTFLoader();

	// A reusable function to set up the models. Position parameter to move model
	const onLoad = (gltf, position) => {
		model = gltf.scene.children[0];
		model.position.copy(position);
		model.castShadow = true;

		scene.add(model);
	};

	const onProgress = () => {};
	const onError = (errorMessage) => {
		console.log(errorMessage);
	};

	// model is loaded asynchronously,
	const modelPosition = new THREE.Vector3(0, 0, 0);
	loader.load(
		cdModel,
		(gltf) => onLoad(gltf, modelPosition),
		onProgress,
		onError,
	);
}

/**
 * Define renderer for scene
 */
function createRenderer() {
	// create a WebGLRenderer and set its width and height
	renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setClearColor(new THREE.Color(0xff0000));
	renderer.setClearAlpha(0);
	renderer.setSize(container.clientWidth, container.clientHeight);

	renderer.setPixelRatio(window.devicePixelRatio);

	renderer.gammaFactor = 2.2;
	renderer.gammaOutput = true;

	container.appendChild(renderer.domElement);
}

/**
 * Define the controls for scene
 */
function createControls() {
	controls = new ArcballControls(camera, renderer.domElement, scene);
	controls.setGizmosVisible(false);
	controls.enableAnimations = true;
	controls.enableZoom = false;
	controls.enableKeys = false;
	controls.enablePan = false;
}

/**
 *	Update scene animations
 */
function update() {
	const delta = clock.getDelta();
	const time = Date.now() * 0.0005;

	bottomLight.position.x = (Math.sin(time * 0.7) * 20) / 100;
	bottomLight.position.y = -0.5;
	bottomLight.position.z = (Math.cos(time * 0.3) * 30) / 100;

	for (const mixer of mixers) {
		mixer.update(delta);
	}
}

/**
 * Render function for animation loop
 */
function render() {
	renderer.render(scene, camera);
}

/**
 * Reconfigure for changes in window size
 */
function onWindowResize() {
	camera.aspect = container.clientWidth / container.clientHeight;

	// update the camera's frustum
	camera.updateProjectionMatrix();

	renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);

init();
