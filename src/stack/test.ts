import Stack from "./index";

const stack = new Stack();

test('stack has necessary methods', () => {
  ['push', 'pop', 'peek'].forEach(methodName => (
    expect(typeof stack.push).toEqual('function');
  ));
});