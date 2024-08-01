import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js';
import { fade, scoreboardProjectVideo, ui_fading } from './ui.js';

var homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', toHome);
document.body.removeChild(homeButton);

// Mouse
var mouseDown = 0;
document.body.onmousedown = function () {
    ++mouseDown;
}
document.body.onmouseup = function () {
    --mouseDown;
}

// Clock
const clock = new THREE.Clock();
clock.start();

// Scene
const scene = new THREE.Scene();
const background = new THREE.Color(0x9dbef5);
scene.background = (background);

// Camera
const camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, 0.1, 100000);
let cameraPosition = 50 * (window.innerHeight / window.innerWidth);
camera.position.set(-cameraPosition, 50, cameraPosition);
camera.lookAt(new THREE.Vector3(0, 35, 0));

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#world-canvas'),
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 0.5;

// Custom materials
const projectScoreboardTexture = new THREE.VideoTexture(scoreboardProjectVideo);
const scoreboardParameters = { color: 0xffffff, map: projectScoreboardTexture };
const projectScoreboardMaterial = new THREE.MeshLambertMaterial(scoreboardParameters);

// Load assets
const loader = new GLTFLoader();
var stadium;

// Target section
var targetSection = 'home';

var tabObjects = {
    'about': {
        'button': null,
        'helper': null
    },
    'project': {
        'button': null,
        'helper': null
    },
    'github': {
        'button': null,
        'helper': null
    }
}

function loadScene() {
    loader.load(`models/stadium.glb`, function (model) {
        stadium = model.scene;
        stadium.castShadow = true;
        stadium.receiveShadow = true;
        stadium.name = 'stadium';
        scene.add(stadium);
        //loadingMessage.style.display = 'none';
    });

    loader.load(`models/about-button.glb`, function (model) {
        let button = model.scene;
        button.name = 'about-button';
        scene.add(button);
        tabObjects.about.button = button;
    });

    loader.load(`models/about-helper.glb`, function (model) {
        let helper = model.scene;
        helper.name = 'about-helper';
        scene.add(helper);
        tabObjects.about.helper = helper;
    });

    loader.load(`models/project-scoreboard.glb`, function (model) {
        let scoreboard = model.scene;
        scoreboard.traverse((o) => {
            if (o.isMesh) o.material = projectScoreboardMaterial;
        });
        scoreboard.name = 'scoreboard';
        scene.add(scoreboard);
        tabObjects.project.button = scoreboard;
    });

    loader.load(`models/project-scoreboard-helper.glb`, function (model) {
        let helper = model.scene;
        helper.name = 'project-helper';
        scene.add(helper);
        tabObjects.project.helper = helper;
    });

    loader.load(`models/github-button.glb`, function (model) {
        let button = model.scene;
        button.name = 'github-button';
        scene.add(button);
        tabObjects.github.button = button;
    });
}

const spotLight = new THREE.SpotLight(0xffffff, 10);
spotLight.position.set(20, 200, -20);
spotLight.castShadow = true;
spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 50;

scene.add(spotLight);

// Raycasting for clicks
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove(event) {

    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);

    document.body.style.cursor = 'default';

    switch (targetSection) {
        case 'home':
            homeLoop();
            break;
        case 'about':
            aboutLoop();
            break;
        case 'project':
            projectLoop();
            break;
        default:
            homeLoop();
            break;
    }


    renderer.render(scene, camera);
}

function homeLoop() {
    camera.position.lerp(new THREE.Vector3(-cameraPosition, 50 + Math.cos(clock.getElapsedTime() * 1.25) / 2, cameraPosition), 0.05);
    //camera.lookAt(new THREE.Vector3(0, 35, 0));

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (tabObjects.about.helper)
        tabObjects.about.helper.visible = false;

    if (tabObjects.project.helper)
        tabObjects.project.helper.visible = false;

    for (let i = 0; i < intersects.length; i++) {

        if (intersects[i].object.name == 'About_1' || intersects[i].object.name == 'About_2') {
            tabObjects.about.helper.visible = true;
            document.body.style.cursor = 'pointer';
            if (mouseDown && targetSection != 'about') {
                targetSection = 'about';
                document.body.appendChild(homeButton);
                fade();
            }
        }

        if (intersects[i].object.name == 'ProjectScoreboard') {
            tabObjects.project.helper.visible = true;
            document.body.style.cursor = 'pointer';
            if (mouseDown && targetSection != 'project') {
                targetSection = 'project';
                document.body.appendChild(homeButton);
            }
        }

        if (intersects[i].object.name == 'Github001_1') {
            document.body.style.cursor = 'pointer';
            if (mouseDown && targetSection != 'github') {
                targetSection = 'github';
                window.open('https://github.com/NimbleValley');
            }
        }

        mouseDown = 0;
    }
}

function aboutLoop() {
    camera.position.lerp(new THREE.Vector3(-5, 25, -105), 0.05);
}

function projectLoop() {
    camera.position.lerp(new THREE.Vector3(10, 25, -90), 0.05);
}

function toHome() {
    document.body.removeChild(homeButton);
    targetSection = 'home';
}

window.addEventListener('pointermove', onPointerMove);

loadScene();
animate();