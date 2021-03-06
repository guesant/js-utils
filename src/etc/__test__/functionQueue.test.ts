import { functionQueue } from "../functionQueue";

test("functionQueue", (done) => {
  async function _functionQueue() {
    try {
      {
        let counter = 0;
        const queue = functionQueue();
        queue.add(() => (counter += 2));
        queue.add(() => (counter += 10));
        expect(counter).toBe(0);
        queue.runAllSync();
        expect(counter).toBe(12);
      }

      {
        let counter = 0;
        const queue = functionQueue();
        queue.add(() => (counter += 2));
        queue.add(() => (counter += 10));
        expect(counter).toBe(0);
        await queue.runAll();
        expect(counter).toBe(12);
      }

      done();
    } catch (error) {
      done(error);
    }
  }

  _functionQueue();
});
