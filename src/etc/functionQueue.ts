import { IFunctionQueueCallback } from "../types/IFunctionQueueCallback";

/**
 *
 * ```typescript
 * let counter = 0;
 *
 * const queue = functionQueue();
 * queue.add(() => (counter += 12));
 *
 * expect(counter).toBe(0);
 * queue.runAllSync();
 * expect(counter).toBe(12);
 * ```
 */

export const functionQueue = <
  T extends IFunctionQueueCallback = IFunctionQueueCallback
>() => {
  const callbackList: T[] = [];
  return {
    /**
     * Adds `fn` to the `callbackList`
     * @param fn function to be queued
     */
    add(...fn: T[]) {
      callbackList.push(...fn);
      return this;
    },
    /**
     * Runs each `callbackList` function synchronism
     */
    runAllSync() {
      for (const callback of callbackList) {
        callback();
      }
      return this;
    },
    /**
     * Runs each `callbackList`, but waits async to run the next function
     */
    async runAll() {
      for (const callback of callbackList) {
        await Promise.resolve(callback());
      }
      return this;
    },
  };
};
