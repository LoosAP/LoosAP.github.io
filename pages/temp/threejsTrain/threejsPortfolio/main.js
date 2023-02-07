import "./style.css";

import * as THREE from "three";
import { PointLightHelper } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xff6347,
});

const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight, pointLight);

const gridHelper = new THREE.GridHelper(200, 50);
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper, gridHelper);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);

const spaceTexture = new THREE.TextureLoader().load(
  "./resources/images/space.jpg"
);
scene.background = spaceTexture;

const kirbyFace = new THREE.TextureLoader().load(
  "./resources/images/Kirby.png"
);

const kirby = new THREE.Mesh(
  new THREE.SphereGeometry(5, 100, 100),
  new THREE.MeshBasicMaterial({ map: kirbyFace })
);
scene.add(kirby);

kirby.position.z = 30;
kirby.position.setX(-10);

Array(200).fill().forEach(addStar);
document.body.onscroll = moveCamera;

const loader = new GLTFLoader();

loader.load(
  "./resources/models/kacsa2.glb",
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.log(error);
  }
);

animate();

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y -= 0.01;
  torus.rotation.z += 0.005;
  controls.update();

  renderer.render(scene, camera);
}

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));
  star.position.set(x, y, z);
  scene.add(star);
}
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  kirby.rotation.x += 0.05;
  kirby.rotation.y += 0.075;
  kirby.rotation.z += 0.05;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}
