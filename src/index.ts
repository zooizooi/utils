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
