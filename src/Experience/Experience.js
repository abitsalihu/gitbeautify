import * as THREE from "three";
import Html from "./Html";

let experience = null;

export default class Experience {
  constructor(canvas) {
    this.canvas = canvas;

    this.html = new Html();
  }

  update() {}
  resize() {}
}
