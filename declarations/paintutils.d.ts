declare type Image = Table<number, string>;

declare module paintutils {
  // Parses an image from a multi-line string
  export function parseImage(image: string): Image;
  // Loads an image from a file.
  export function loadImage(path: string): Image | null;
  // Draws a single pixel to the current term at the specified position.
  export function drawPixel(xPos: number, yPos: number, colour?: colors): void;
  // Draws a straight line from the start to end position.
  export function drawLine(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    colour?: colors
  ): void;
  // Draws the outline of a box on the current term from the specified start position to the specified end position.
  export function drawBox(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    colour?: colors
  ): void;
  // Draws a filled box on the current term from the specified start position to the specified end position.
  export function drawFilledBox(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    colour?: colors
  ): void;
  // Draw an image loaded by paintutils.parseImage or paintutils.loadImage.
  export function drawImage(
    image: Table<number, string>,
    xPos: number,
    yPos: number
  ): void;
}
