import React from "react";
import p5, {p5js} from "p5";

let img;
let vid;
let theta = 0;

const Setup = () => {
  createCanvas(710, 400, WEBGL);

  img = loadImage("");
  vid = createVideo([""]);
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
};

function draw() {
  background(250);
  translate(-220, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  //pass image as texture
  texture(vid);
  sphere(150);
  pop();
  translate(440, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img);
  box(100, 100, 100);
  pop();
  theta += 0.05;
}

export default Setup;
