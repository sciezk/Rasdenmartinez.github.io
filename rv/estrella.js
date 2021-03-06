var forma = new THREE.Geometry();

forma.vertices.push(new THREE.Vector3(0, 1, 0));
forma.vertices.push(new THREE.Vector3(1, 0, 0));
forma.vertices.push(new THREE.Vector3(-1, 0, 0));

forma.faces.push(new THREE.Face3(2, 1, 0));
forma.faces.push(new THREE.Face3(2, 0, 1));
forma.faces.push(new THREE.Face3(0, 1, 2));
forma.faces.push(new THREE.Face3(1, 2, 0));

forma.computeBoundingSphere();  
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla  = new THREE.Mesh(forma, material);
malla.rotateX(Math.PI/4);

var escena= new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.y=5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*0.95, window.innerHeight*0.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
