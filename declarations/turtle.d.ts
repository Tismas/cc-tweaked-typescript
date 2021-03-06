/** @noSelfInFile */
declare module turtle {
  type ReturnStatus = boolean | string | null;
  enum tool {
    left = "left",
    right = "right",
  }
  export function forward(): ReturnStatus;
  export function back(): ReturnStatus;
  export function up(): ReturnStatus; // Move the turtle up one block.
  export function down(): ReturnStatus; // Move the turtle down one block.
  export function turnLeft(): ReturnStatus; // Rotate the turtle 90 degress to the left.
  export function turnRight(): ReturnStatus; // Rotate the turtle 90 degress to the right.
  export function dig(tool?: tool): ReturnStatus; // Attempt to break the block in front of the turtle.
  export function digUp(tool?: tool): ReturnStatus; // Attempt to break the block above the turtle.
  export function digDown(tool?: tool): ReturnStatus; // Attempt to break the block below the turtle.
  export function place(text?: string): ReturnStatus; // Place a block or item into the world in front of the turtle.
  export function placeUp(text?: string): ReturnStatus; // Place a block or item into the world above the turtle.
  export function placeDown(text?: string): ReturnStatus; // Place a block or item into the world below the turtle.
  export function drop(count?: number): ReturnStatus; // Drop the currently selected stack into the inventory in front of the turtle, or as an item into the world if there is no inventory.
  export function dropUp(count?: number): ReturnStatus; // Drop the currently selected stack into the inventory above the turtle, or as an item into the world if there is no inventory.
  export function dropDown(count?: number): ReturnStatus; // Drop the currently selected stack into the inventory in front of the turtle, or as an item into the world if there is no inventory.
  export function select(slot: number): boolean; // Change the currently selected slot.
  export function getItemCount(slot?: number): number; // Get the number of items in the given slot.
  export function getItemSpace(slot?: number): number; // Get the remaining number of items which may be stored in this stack.
  export function detect(): boolean; // Check if there is a solid block in front of the turtle.
  export function detectUp(): boolean; // Check if there is a solid block above the turtle.
  export function detectDown(): boolean; // Check if there is a solid block below the turtle.
  export function compare(): any;
  export function compareUp(): any;
  export function compareDown(): any;
  export function attack(tool?: tool): ReturnStatus; // Attack the entity in front of the turtle.
  export function attackUp(tool?: tool): ReturnStatus; // Attack the entity above the turtle.
  export function attackDown(tool?: tool): ReturnStatus; // Attack the entity below the turtle.
  export function suck(count?: number): ReturnStatus; // Suck an item from the inventory in front of the turtle, or from an item floating in the world.
  export function suckUp(count?: number): ReturnStatus; // Suck an item from the inventory above the turtle, or from an item floating in the world.
  export function suckDown(count?: number): ReturnStatus; // Suck an item from the inventory below the turtle, or from an item floating in the world.
  export function getFuelLevel(): any;
  export function refuel(count?: number): any;
  export function compareTo(slot: number): any;
  export function transferTo(slot: number, count?: number): any;
  export function getSelectedSlot(): number; //	Get the currently selected slot.
  export function getFuelLimit(): any;
  export function equipLeft(): any;
  export function equipRight(): any;
  export function inspect(): ReturnStatus; // Get information about the block in front of the turtle.
  export function inspectUp(): ReturnStatus; // Get information about the block above the turtle.
  export function inspectDown(): ReturnStatus; // Get information about the block below the turtle.
  export function getItemDetail(
    slot?: number,
    detailed?: boolean
  ): Table<string, any>; //Get detailed information about the items in the given slot.
  export function craft(limit: number): void;
}
