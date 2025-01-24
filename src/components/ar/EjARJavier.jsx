//Ejemplo de un cubo en RA
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from './XrJavier';
import { ARButton, XR } from "@react-three/xr";


function EjARJavier() {

    return (
        <>
            <ARButton />
            <Canvas>
                <XR>
                    <OrbitControls />
                    <ambientLight />
                    <Model />
                </XR>
            </Canvas>
        </>
    )

}

export default EjARJavier;