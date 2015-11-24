var renderer, width, height;
function initRenderer() {
    width = document.getElementById('container').clientWidth;
    height = document.getElementById('container').clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);
    document.getElementById('container').appendChild(renderer.domElement);
    renderer.setClearColor(0xffffff, 1.0);
}

var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width/height, 1, 10000);
       scene.add(camera);
          scene.add(camera);
    camera.position.x = 700;
    camera.position.y = 300;
    camera.position.z = 700;
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({
        x : 0,
        y : 0,
        z : 0
    });
}

var scene;
function initScene() {
    scene = new THREE.Scene();
}

var light1, light2, light3;
function initLight() {
    //红色环境光
    light1 = new THREE.AmbientLight(0xff0000);
    light1.position.set(0,0,1);
    //绿色方向光
    light2 = new THREE.DirectionalLight(0x00ff00);
    light2.position.set(1,0,0);
    // 蓝色点光源
    light3 = new THREE.PointLight(0x0000ff);
    light3.position.set(0,0,80);
    scene.add(light1);
    scene.add(light2);
    scene.add(light3);
}

var cube;
function initObject () {
    var geometry = new THREE.CubeGeometry( 200, 100, 50,4,4);
    var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    var mesh = new THREE.Mesh( geometry,material);
    mesh.position = new THREE.Vector3(0,0,0);
    scene.add(mesh);

    var geometry2 = new THREE.CubeGeometry( 200, 100, 50,4,4);
    geometry2.translate(-300, 0, 0);
    var material2 = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    var mesh2 = new THREE.Mesh(geometry2,material2);
    scene.add(mesh2);

    var mesh3 = new THREE.Mesh( geometry,material);
    mesh3.position.copy(new THREE.Vector3(0, -150, 0));
    scene.add(mesh3);

    var mesh4 = new THREE.Mesh( geometry,material);
    mesh4.translateY(150);
    scene.add(mesh4);

    var mesh5 = new THREE.Mesh( geometry,material);
    mesh5.position.x = 300;
    scene.add(mesh5);

    var mesh6 = new THREE.Mesh( geometry,material);
    mesh6.position.set(0, 0, -100);
    scene.add(mesh6);

    var geometry3 = new THREE.CubeGeometry( 200, 100, 50,4,4);
    var material3 = new THREE.MeshLambertMaterial( { color:0x000000} );
    var mesh7 = new THREE.Mesh( geometry3,material3);
    mesh7.position.copy(new THREE.Vector3(300, -150, 0));
    scene.add(mesh7);

    var geometry4 = new THREE.CubeGeometry( 200, 100, 50,4,4);
    var material4 = new THREE.MeshLambertMaterial( { color:0xff0000} );
    var mesh8 = new THREE.Mesh( geometry4,material4);
    mesh8.position.copy(new THREE.Vector3(300, 150, 0));
    scene.add(mesh8);

    var geometry5 = new THREE.CubeGeometry( 200, 100, 50,4,4);
    var material5 = new THREE.MeshLambertMaterial( { color:0x00ff00} );
    var mesh9 = new THREE.Mesh( geometry5,material5);
    mesh9.position.copy(new THREE.Vector3(-300, 150, 0));
    scene.add(mesh9);

    var geometry6 = new THREE.CubeGeometry( 200, 100, 50,4,4);
    var material6 = new THREE.MeshLambertMaterial( { color:0x0000ff} );
    var mesh9 = new THREE.Mesh( geometry6,material6);
    mesh9.position.copy(new THREE.Vector3(-300, -150, 0));
    scene.add(mesh9);
}

function animate() {
    renderer.clear();
    renderer.render(scene, camera);
}
function start() {
    initRenderer();
    initScene();
    initCamera();
    initLight();
    initObject();
    animate();
}

start();