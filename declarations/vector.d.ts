interface Vector {
  x: number;
  y: number;
  z: number;
  add(o: Vector): Vector;
  sub(o: Vector): Vector;
  mul(m: number): Vector;
  div(m: number): Vector;
  unm(): Vector;
  dot(o: Vector): Vector;
  cross(o: Vector): Vector;
  length(): number;
  normalize(): Vector;
  round(tolerance?: number): Vector;
  tostring(): string;
}

declare module vector {
  function _new(x: number, y: number, z: number): Vector;
  export { _new as new };
}
