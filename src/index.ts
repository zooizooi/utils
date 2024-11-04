export function distance2D(point1: { x: number, y: number }, point2: { x: number, y: number }): number {
    const a = point2.x - point1.x;
    const b = point2.y - point1.y;
    return Math.sqrt(a * a + b * b);
}

export function distance3D(point1: { x: number, y: number, z: number }, point2: { x: number, y: number, z: number }): number {
    const a = point2.x - point1.x;
    const b = point2.y - point1.y;
    const c = point2.z - point1.z;
    return Math.sqrt(a * a + b * b + c * c);
}

export function distanceManhattan(point1: { x: number, y: number }, point2: { x: number, y: number }): number {
    return Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y);
}

export function lerp(x: number, y: number, a: number): number {
    return x * (1 - a) + y * a;
}

export function invlerp(x: number, y: number, a: number): number {
    return clamp((a - x) / (y - x));
}

export function clamp(a: number, min = 0, max = 1): number {
    return Math.min(max, Math.max(min, a));
}

export function range(a: number, x1: number, y1: number, x2: number, y2: number): number {
    return lerp(x2, y2, invlerp(x1, y1, a));
}

export function step(value: number, x: number): number {
    return value < x ? 0 : 1;
}

export function smoothstep(min: number, max: number, value: number): number {
    const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return x * x * (3 - 2 * x);
}