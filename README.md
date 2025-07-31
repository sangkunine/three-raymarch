<h1>
<img src='./public/threefy.svg'
    style='position: relative; top: 7px; padding: 0px; filter: brightness(5) sepia(1) hue-rotate(180deg) saturate(6)' 
    alt='threefy-logo' width='32' height='32'/>
3D Ray Marching & Ray Tracing
</h1>

![](https://img.shields.io/badge/package_size-638.7KB-blue)
![](https://img.shields.io/badge/three.js-r178-green)
![](https://img.shields.io/badge/license-mit-white)

## Overview

The 3D rendering techniques implemented in this app can be summarized as follows:
- Ray Marching (where shadow and ambient occlusion were used)
- Ray Tracing (where primary and secondary rays were used)
- Signed Distance Functions (of which the entire scene is created by the union operation)
- ShaderMaterial provided by [three.js](https://threejs.org/)
- Simplified PBR (Physically-Based Rendering)

The rendering parameters used for the simplified PBR can be listed as follows:
- Reflection and Transmission
- IOR (Index of Refraction)
- *Fresnel* Equation

## Preview
You can explore the three examples below [here](https://sangkunine.github.io/three-raymarch).<br/>

![raymarchFS](./public/images/raymarchFS.jpg)
![raytracingFS](./public/images/raytracingFS.jpg)
![forestFS](./public/images/forestFS.jpg)

## Contributions
All contributions are welcome as well as donations! Please contact us at **sangkunine@gmail.com** for any questions or suggestions. Thank you [jamhpark](https://github.com/jamhpark) and [ellyhpark](https://github.com/ellyhpark) for your contributions. The pool tile texture was designed by [Freepik](https://www.freepik.com).