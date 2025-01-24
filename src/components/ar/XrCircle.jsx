import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function XrCircle() {

    const circleRef = useRef();

    useFrame((state, delta) => {
        circleRef.current.rotation.y += delta;

    });

    return (<>
        <OrbitControls />
        <ambientLight />
        <mesh ref={circleRef} position={[0, 0, -5]}>
            <circleGeometry args={[5, 32, 0]} />
            <meshStandardMaterial color='white' />
        </mesh>


    </>

    )
}
export default XrCircle;