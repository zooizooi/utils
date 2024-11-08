/**
 * Generates a series of points representing a quadratic Bezier curve.
 *
 * @param startPoint - The starting point of the curve, represented as a 2D coordinate [x, y].
 * @param controlPoint - The control point of the curve, represented as a 2D coordinate [x, y].
 * @param endPoint - The ending point of the curve, represented as a 2D coordinate [x, y].
 * @param segments - The number of segments to divide the curve into.
 * @returns An array of points representing the quadratic Bezier curve.
 */
export default function generateQuadraticBezierCurve(startPoint: [number, number], controlPoint: [number, number], endPoint: [number, number], segments: number) {
    const points = [];
    for (let i = 1; i <= segments; i++) {
        const t = i * 1 / (segments + 1);
        const x = (1 - t) * ((1 - t) * startPoint[0] + t * controlPoint[0]) + t * ((1 - t) * controlPoint[0] + t * endPoint[0]);
        const y = (1 - t) * ((1 - t) * startPoint[1] + t * controlPoint[1]) + t * ((1 - t) * controlPoint[1] + t * endPoint[1]);
        points.push([x, y]);
    }
    return points;
}