"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, Line, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

type Coordinate = {
  lat: number;
  lng: number;
};

type RouteDefinition = {
  start: Coordinate;
  end: Coordinate;
  color: string;
  speed: number;
};

const globeRadius = 2;

const destinationPoints: Coordinate[] = [
  { lat: 25.2048, lng: 55.2708 },
  { lat: 3.139, lng: 101.6869 },
  { lat: 1.3521, lng: 103.8198 },
  { lat: 41.0082, lng: 28.9784 },
  { lat: 3.2028, lng: 73.2207 },
  { lat: 24.7136, lng: 46.6753 },
  { lat: 51.5072, lng: -0.1276 },
  { lat: 13.7563, lng: 100.5018 }
];

const routes: RouteDefinition[] = [
  {
    start: { lat: 6.9271, lng: 79.8612 },
    end: { lat: 25.2048, lng: 55.2708 },
    color: "#D98928",
    speed: 0.09
  },
  {
    start: { lat: 6.9271, lng: 79.8612 },
    end: { lat: 51.5072, lng: -0.1276 },
    color: "#D98928",
    speed: 0.07
  },
  {
    start: { lat: 6.9271, lng: 79.8612 },
    end: { lat: -8.3405, lng: 115.092 },
    color: "#D98928",
    speed: 0.08
  }
];

function latLngToVector3({ lat, lng }: Coordinate, radius: number) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lng + 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function makeArc(start: Coordinate, end: Coordinate) {
  const startVector = latLngToVector3(start, globeRadius + 0.035);
  const endVector = latLngToVector3(end, globeRadius + 0.035);
  const midpoint = startVector
    .clone()
    .add(endVector)
    .normalize()
    .multiplyScalar(globeRadius * 1.52);

  return new THREE.QuadraticBezierCurve3(startVector, midpoint, endVector).getPoints(76);
}

function GlobeCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.055;
    }
  });

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.28}>
      <group ref={groupRef} rotation={[0.05, 2.75, -0.08]}>
        <mesh>
          <sphereGeometry args={[globeRadius, 72, 72]} />
          <meshStandardMaterial
            color="#F5F1E8"
            metalness={0.18}
            roughness={0.28}
            transparent
            opacity={0.9}
          />
        </mesh>

        <mesh scale={1.012}>
          <sphereGeometry args={[globeRadius, 72, 72]} />
          <meshBasicMaterial
            color="#082B49"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>

        <mesh scale={1.16}>
          <sphereGeometry args={[globeRadius, 72, 72]} />
          <meshBasicMaterial
            color="#D98928"
            side={THREE.BackSide}
            transparent
            opacity={0.09}
            depthWrite={false}
          />
        </mesh>

        {destinationPoints.map(point => (
          <GlobePoint key={`${point.lat}-${point.lng}`} coordinate={point} />
        ))}

        {routes.map(route => (
          <RouteArc key={`${route.end.lat}-${route.end.lng}`} route={route} />
        ))}

        <MovingPlane route={routes[0]} />
      </group>
    </Float>
  );
}

function GlobePoint({ coordinate }: { coordinate: Coordinate }) {
  const position = useMemo(
    () => latLngToVector3(coordinate, globeRadius + 0.075),
    [coordinate]
  );

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.046, 18, 18]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#D98928"
          emissiveIntensity={1.4}
          roughness={0.25}
        />
      </mesh>
      <pointLight color="#D98928" intensity={0.45} distance={0.9} />
    </group>
  );
}

function RouteArc({ route }: { route: RouteDefinition }) {
  const points = useMemo(() => makeArc(route.start, route.end), [route]);

  return (
    <Line
      points={points}
      color={route.color}
      lineWidth={2}
      transparent
      opacity={0.88}
    />
  );
}

function MovingPlane({ route }: { route: RouteDefinition }) {
  const markerRef = useRef<THREE.Group>(null);
  const points = useMemo(() => makeArc(route.start, route.end), [route]);
  const progress = useRef(0);

  useFrame((_, delta) => {
    progress.current = (progress.current + delta * route.speed) % 1;
    const exact = progress.current * (points.length - 1);
    const index = Math.floor(exact);
    const nextIndex = Math.min(index + 1, points.length - 1);
    const position = points[index].clone().lerp(points[nextIndex], exact - index);

    if (markerRef.current) {
      markerRef.current.position.copy(position);
      markerRef.current.lookAt(points[nextIndex]);
    }
  });

  return (
    <group ref={markerRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.045, 0.18, 18]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive={route.color}
          emissiveIntensity={1.2}
          metalness={0.15}
          roughness={0.2}
        />
      </mesh>
      <mesh scale={[0.16, 0.014, 0.045]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={route.color} emissive={route.color} />
      </mesh>
      <pointLight color={route.color} intensity={0.85} distance={1.2} />
    </group>
  );
}

function GlobeScene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 4, 5]} intensity={1.9} color="#ffffff" />
      <pointLight position={[-3, 2, 4]} intensity={1.4} color="#D98928" />
      <Sparkles
        count={95}
        scale={[6.8, 4.8, 6.8]}
        size={1.35}
        speed={0.18}
        color="#D98928"
        opacity={0.32}
      />
      <GlobeCore />
    </>
  );
}

export default function TravelGlobe() {
  return (
    <div
      className="h-[340px] w-full sm:h-[410px] lg:h-[470px]"
      aria-label="Animated 3D globe with travel routes"
    >
      {/* Swap this Canvas for a Spline embed later if the client provides a branded globe scene. */}
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.7]}>
        <Suspense
          fallback={
            <Html center>
              <div className="rounded-full border border-marine/10 bg-white/80 px-4 py-2 text-xs font-semibold text-marine shadow-premium">
                Loading route map
              </div>
            </Html>
          }
        >
          <GlobeScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
