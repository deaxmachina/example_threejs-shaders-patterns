<script>
  import { onMount } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import testVertexShader from './shaders/vertex.glsl'
  import testFragmentShader from './shaders/fragment.glsl'
  export let id

  onMount(() => {
    // Sizes
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    // Canvas
    const canvas = document.getElementById(`${id}`)

    // Scene
    const scene = new THREE.Scene()

    // Geometry
    const geometry = new THREE.PlaneGeometry(1, 1, 32, 32)

    // Material
    const material = new THREE.ShaderMaterial({
        vertexShader: testVertexShader,
        fragmentShader: testFragmentShader,
        side: THREE.DoubleSide
    })

    // Mesh
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(0.25, - 0.25, 1)
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enableZoom = false

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    ////////////////////////////////////////
    ////////////// Events //////////////////
    ////////////////////////////////////////

    // Resize 
    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // Animate
    const tick = () =>
    {
        // Update controls
        controls.update()

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()
  })

</script>

<div class='section'>
  <canvas class='webgl' id={id}></canvas>
</div>



<style>
  .section {
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    margin-bottom: 50px;
  }
  .webgl {
      position: absolute;
      top: 0;
      left: 0;
      outline: none;
  }

</style>