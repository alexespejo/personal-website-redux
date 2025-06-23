import { useCallback } from "react";
import {
 getNextZIndex,
 getCurrentZIndex,
 resetZIndex,
 setZIndex,
} from "./zIndexManager";

export function useZIndex() {
 const getNext = useCallback(() => {
  return getNextZIndex();
 }, []);

 const getCurrent = useCallback(() => {
  return getCurrentZIndex();
 }, []);

 const reset = useCallback((initialValue?: number) => {
  resetZIndex(initialValue);
 }, []);

 const set = useCallback((value: number) => {
  setZIndex(value);
 }, []);

 return {
  getNextZIndex: getNext,
  getCurrentZIndex: getCurrent,
  resetZIndex: reset,
  setZIndex: set,
 };
}
