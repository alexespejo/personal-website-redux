// Global z-index manager
let currentZIndex = 10;

export function getNextZIndex(): number {
 currentZIndex += 1;
 return currentZIndex;
}

export function getCurrentZIndex(): number {
 return currentZIndex;
}

export function resetZIndex(initialValue: number = 10): void {
 currentZIndex = initialValue;
}

export function setZIndex(value: number): void {
 currentZIndex = value;
}
