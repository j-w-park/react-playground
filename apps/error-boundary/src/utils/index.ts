export function invariant(cond?: boolean, message?: string): asserts cond {
  if (!cond) {
    throw new Error(message);
  }
}
