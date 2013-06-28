function display(){
  var scene = new THREE.Scene(); 
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
  var renderer = new THREE.WebGLRenderer(); 

  renderer.setSize(window.innerWidth, window.innerHeight); 
  document.body.appendChild(renderer.domElement);

  var light = new THREE.DirectionalLight(0xFFFFFF);
  var ambient = new THREE.AmbientLight(0x444444);
  light.position.set(1.0, 0.0, 1.0);
  scene.add(light);
  scene.add(ambient);

  var material = new THREE.MeshPhongMaterial({color: 0x008801, ambient: 0x008800, specular: 0xFFFFFF});
  var geometry = new THREE.CubeGeometry(1,1,1); 
  var cube = new THREE.Mesh(geometry, material);

  scene.add(cube); 
  camera.position.z = 5; 

  var render = function () { 
    requestAnimationFrame(render); 
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01; 
    renderer.render(scene, camera); 
  }; 

  render(); 
}
