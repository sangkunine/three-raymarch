import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

import raymarchFS from './shaders/raymarchFS.glsl'
import raytracingFS from './shaders/raytracingFS.glsl'
import forestFS from './shaders/forestFS.glsl'

//======================================
// choose one of the following:
//======================================
// const example = 1; // raymarchFS
// const example = 2; // raytracingFS
// const example = 3; // forestFS

let camera
let material

const loader = new THREE.TextureLoader()
const poolTile = loader.load( 'images/poolTile.jpg', tex => tex.wrapS = tex.wrapT = THREE.RepeatWrapping )
const abstract2 = loader.load( 'images/abstract2.jpg', tex => tex.wrapS = tex.wrapT = THREE.RepeatWrapping )
const grayNoise256 = loader.load( 'images/grayNoise256.png', tex => tex.wrapS = tex.wrapT = THREE.RepeatWrapping )

const selectOption = document.querySelector(".select-option")
selectOption.addEventListener('change', (e) =>
{
    switch( +e.target.value ) {
        case 1: // raymarchFS
            camera.position.set(5,5,5)
            material.uniforms['textureMaps'].value = [ poolTile ]
            material.fragmentShader = raymarchFS
            break
        case 2: // raytracingFS
            camera.position.set(5,5,5)
            material.uniforms['textureMaps'].value = [ abstract2, poolTile ]
            material.fragmentShader = raytracingFS
            break
        case 3: // forestFS
            camera.position.set(200,100,200)
            material.uniforms['textureMaps'].value = [ grayNoise256 ]
            material.fragmentShader = forestFS
            break
    }
    material.needsUpdate = true
})

function threeRaymarch()
{
    const forward = new THREE.Vector3()

    const scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 2000 )
    camera.position.set(5,5,5)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.setAnimationLoop( animate )
    document.body.appendChild( renderer.domElement )

    const controls = new OrbitControls( camera, renderer.domElement )
    controls.enableDamping = true

    const light = new THREE.DirectionalLight( 0xffffff, 1 )
    light.position.set(1,1,0)
    scene.add( light )

    // planar mesh (where fragments created)
    const geometry = new THREE.PlaneGeometry()
    material = new THREE.ShaderMaterial({
        uniforms: {
            devicePixelRatio:  { value: window.devicePixelRatio },
            time:              { value: 0.0 },
            resolution:        { value: new THREE.Vector2( renderer.domElement.width, renderer.domElement.height ) },
            cameraNear:        { value: camera.near },
            cameraFar:         { value: camera.far },
            cameraWorldMatrix: { value: camera.matrixWorld },
            cameraProjectionMatrixInverse: { value: camera.projectionMatrixInverse },
            textureMaps:       { value: [abstract2,poolTile] }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `,
        fragmentShader: raytracingFS
    })
    const raymarch = new THREE.Mesh( geometry, material )
    scene.add( raymarch )

    const fov = camera.fov * Math.PI/180
    const nearHeight = camera.near * Math.tan( fov / 2 ) * 2
    const nearWidth = nearHeight * camera.aspect
    raymarch.scale.set( nearWidth, nearHeight, 1 )

    function animate( time )
    {
        // forward: cameraPos to screenPos
        camera.getWorldDirection( forward )
        forward.multiplyScalar( camera.near )
        const cameraPos = camera.position.clone()
        const screenCen = cameraPos.add( forward )

        raymarch.position.copy( screenCen )
        raymarch.rotation.copy( camera.rotation )
        
        material.uniforms.time.value = time / 1000

        renderer.render( scene, camera ) // NOTE*: render() before update()
        controls.update()
    }

    window.addEventListener( 'resize', () =>
    {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        const fov = camera.fov * Math.PI/180
        const nearHeight = camera.near * Math.tan( fov / 2 ) * 2
        const nearWidth = nearHeight * camera.aspect
        raymarch.scale.set( nearWidth, nearHeight, 1 )

        if( renderer )
        {
            renderer.setSize( window.innerWidth, window.innerHeight )
        }
    })
}
threeRaymarch()