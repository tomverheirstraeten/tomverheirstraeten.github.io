import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as  THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PointLight, AmbientLight } from 'three';
import * as TWEEN from 'tween';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  camera;
  cube;
  loader = new GLTFLoader();
  scene;
  ticketmesh;
  programmesh;
  practicalmesh;
  keynotemesh;
  partnersmesh;
  turn: boolean;
  raycaster = new THREE.Raycaster();
  intersects: [];
  NavigationPosition = -1;
  moveleft = false;
  moveright = false;
  counter = 0;
  speed = 0.35;
  leftarrow = true;
  rightarrow = true;
  ismoving = false;




  @ViewChild('render') el: ElementRef;
  constructor(private router: Router, private activatedrouter: ActivatedRoute) {
    this.scene = new THREE.Scene();
    this.NavigationPosition = parseInt(this.activatedrouter.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight);

  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.el.nativeElement.appendChild(this.renderer.domElement);
    this.loader.load('assets/3Dobjects/meshes.gltf', this.handle_load)
  }

  handle_load = (gltf) => {

    const light = new AmbientLight(0x1c2e4a, 2);
    const light2 = new PointLight(0x3BDCE1, 2);
    this.scene.add(light);
    this.scene.add(light2);
    //put meshes in variabelen
    this.programmesh = gltf.scene.children[2];
    this.ticketmesh = gltf.scene.children[3];
    this.keynotemesh = gltf.scene.children[4];
    this.partnersmesh = gltf.scene.children[5];
    this.practicalmesh = gltf.scene.children[6];
    //add meshes to scene
    this.scene.add(this.ticketmesh);
    this.scene.add(this.programmesh);
    this.scene.add(this.keynotemesh);
    this.scene.add(this.partnersmesh);
    this.scene.add(this.practicalmesh);
    //voor camera zetten (verschuiven op z-as)
    this.ticketmesh.position.z = -5;
    this.keynotemesh.position.z = -5;
    this.partnersmesh.position.z = -5;
    this.practicalmesh.position.z = -5;
    this.programmesh.position.z = -5;
    //verschuiven van links naar rechts
    if (this.NavigationPosition == -1) {
      this.ticketmesh.position.x += 3;
      this.keynotemesh.position.x += 7;
      this.keynotemesh.position.y += 0.5;
      this.partnersmesh.position.x += 9;
      this.practicalmesh.position.x += 11;
      this.programmesh.position.x += 5;

    } else if (this.NavigationPosition == 0) {
      this.ticketmesh.position.x += -4;
      this.keynotemesh.position.x += 0;
      this.keynotemesh.position.y += 0.5;
      this.partnersmesh.position.x += 2;
      this.practicalmesh.position.x += 4;
      this.programmesh.position.x += -2;
    } else if (this.NavigationPosition == 1) {
      this.ticketmesh.position.x += -11;
      this.keynotemesh.position.x += -7;
      this.keynotemesh.position.y += 0.5;
      this.partnersmesh.position.x += -5;
      this.practicalmesh.position.x += -3;
      this.programmesh.position.x += -9;
    } else if (this.NavigationPosition == 2) {
      this.ticketmesh.position.x += -18;
      this.keynotemesh.position.x += -14;
      this.keynotemesh.position.y += 0.5;
      this.partnersmesh.position.x += -12;
      this.practicalmesh.position.x += -10;
      this.programmesh.position.x += -16;
    } else if (this.NavigationPosition == 3) {
      this.ticketmesh.position.x += -25;
      this.keynotemesh.position.x += -21;
      this.keynotemesh.position.y += 0.5;
      this.partnersmesh.position.x += -19;
      this.practicalmesh.position.x += -17;
      this.programmesh.position.x += -23;
    }
    //rotate om x-as
    this.ticketmesh.rotation.x = 2;
    this.keynotemesh.rotation.x = 2;
    this.partnersmesh.rotation.x = 1.5;
    this.practicalmesh.rotation.x = 2;
    this.programmesh.rotation.x = 1.5;
    //material geven
    var material = new THREE.MeshLambertMaterial({
      color: '0x#3BDCE1',
    });
    this.ticketmesh.material = material;
    this.keynotemesh.material = material;
    this.partnersmesh.material = material;
    this.practicalmesh.material = material;
    this.programmesh.material = material;
    this.checkarrows();
    this.render();
  }

  //RENDER LOOPING
  render = () => {
    if (this.turn == true) {
      this.ticketmesh.rotation.x += 0.001;
      this.keynotemesh.rotation.x += 0.001;
      this.programmesh.rotation.x -= 0.001;
      this.partnersmesh.rotation.x -= 0.001;
      this.practicalmesh.rotation.x += 0.001;
      if (this.ticketmesh.rotation.x >= 2.1) {
        this.turn = false
      }
    } else {
      this.ticketmesh.rotation.x -= 0.001;
      this.keynotemesh.rotation.x -= 0.001;
      this.programmesh.rotation.x += 0.001;
      this.partnersmesh.rotation.x += 0.001;
      this.practicalmesh.rotation.x -= 0.001;
      if (this.ticketmesh.rotation.x <= 1.6) {
        this.turn = true
      }
    }
    if (this.moveleft) {
      //vanaf hier wordt het shady maar heb het wel zelf geschreven
      this.counter += -0.5;

      if (this.counter >= -10) {
        this.ticketmesh.position.x += this.speed;
        this.keynotemesh.position.x += this.speed;
        this.partnersmesh.position.x += this.speed;
        this.practicalmesh.position.x += this.speed;
        this.programmesh.position.x += this.speed;
      } else {
        this.counter = 0;
        this.moveleft = false;
        this.ismoving = false;
      }

    } else if (this.moveright) {
      this.counter += 0.5;
      if (this.counter <= 10) {
        this.ticketmesh.position.x += -this.speed;
        this.keynotemesh.position.x += -this.speed;
        this.partnersmesh.position.x += -this.speed;
        this.practicalmesh.position.x += -this.speed;
        this.programmesh.position.x += -this.speed;
      } else {
        this.counter = 0;
        this.moveright = false;
        this.ismoving = false;
      }

    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render);
  }


  travel = () => {
    if (this.NavigationPosition == -1) {
      this.router.navigate(["/Tickets"]);
    } else if (this.NavigationPosition == 0) {
      this.router.navigate(["/Program"]);
    } else if (this.NavigationPosition == 1) {
      this.router.navigate(["/keynote"]);
    } else if (this.NavigationPosition == 2) {
      this.router.navigate(["/Sponsors"]);
    }

  }

  setMoveleft = () => {
    this.ismoving = true;
    this.moveleft = true;
    this.NavigationPosition -= 1;
    this.checkarrows();

  }

  setMoveright = () => {
    this.ismoving = true;
    this.moveright = true;
    this.NavigationPosition += 1;
    this.checkarrows();
  }

  checkarrows = () => {
    if (this.NavigationPosition <= -1) {
      this.leftarrow = false
    } else if (this.NavigationPosition >= 3) {
      this.rightarrow = false
    } else {
      this.leftarrow = true;
      this.rightarrow = true;
    }

  }
}
