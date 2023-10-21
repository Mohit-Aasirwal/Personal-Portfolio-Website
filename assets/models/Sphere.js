import React, { useRef, useEffect } from "react";
import Image from "next/image";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const Sphere = () => {
  const canvasRef = useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    //creating sphere
    const geometry = new THREE.SphereGeometry(4, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff83,
      roughness: 0.5,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //lights
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    light.intensity = 1.25;
    scene.add(light);

    //sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    //camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 15;
    scene.add(camera);

    // const backgroundImage = new Image();
    // backgroundImage.src = "../../public/profile.png";
    // backgroundImage.onload = () => {
    //   const texture = new THREE.Texture(backgroundImage);
    //   texture.needsUpdate = true;
    //   scene.background = texture;
    // };
    //renderer
    // const canvas = document.querySelector(".webgl");
    const canvas = document.querySelector("canvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(2);
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    //controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;

    //resize
    window.addEventListener("resize", () => {
      //update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      //update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      mesh.position.x = 1;
      window.requestAnimationFrame(loop);
    };
    loop();

    //timeline magic
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });

    //mouse Animation color

    let mouseDown = false;
    let rgb = [];
    window.addEventListener("mousedown", () => (mouseDown = true));
    window.addEventListener("mouseup", () => (mouseDown = false));

    window.addEventListener("mousemove", (e) => {
      if (mouseDown) {
        rgb = [
          Math.round((e.pageX / sizes.width) * 255),
          Math.round((e.pageY / sizes.height) * 255),
          150,
        ];
        // mesh.material.color.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
        let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
        gsap.to(mesh.material.color, {
          r: newColor.r,
          g: newColor.g,
          b: newColor.b,
        });
      }
    });

    // animate();
  }, []);

  return (
    <>
      <canvas className="relative xl:mx-96" />
      <Image
        priority
        src={"/profile.png"}
        alt="profile"
        width={450}
        height={450}
        className={`z-auto absolute xl:w-1/3`}
        // loading="lazy"
      />
    </>
  );
};

export default Sphere;
