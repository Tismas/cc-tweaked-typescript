declare module "turtle" {
  interface Turtle {
    forward: () => void;
    dig: () => void;
  }

  export const turtle: Turtle;
}
