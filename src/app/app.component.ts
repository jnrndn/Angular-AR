import { Component, animate } from '@angular/core';
import { Scene , PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scene = new Scene();
  camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new WebGLRenderer();
  geometry =  new BoxGeometry(1, 1, 1);
  material = new MeshBasicMaterial({ color: 0x00ff00  });
  cube = new Mesh( this.geometry, this.material );

  constructor() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement );
    this.scene.add(this.cube);
    this.camera.position.z = 5;
    this.animate();
  }

  animate() {
    requestAnimationFrame( animate );
    this.cube.rotation.x += 0.1;
    this.cube.rotation.y += 0.1;
    this.renderer.render( this.scene, this.camera );
  }


}
