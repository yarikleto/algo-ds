import createLinkedList from "./linked-list";

describe("The linked list is working well", () => {
  const linkedList = createLinkedList();

  test("'addFirst' is ok", () => {
    linkedList.addFirst(4);
    linkedList.addFirst([1,2,3]);

    expect(linkedList.size).toEqual(4);
    expect(linkedList.head.prev).toBeNull();
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.tail.value).toEqual(4);
    expect(linkedList.tail.next).toBeNull();
  });

  test("'addLast' is ok", () => {
    linkedList.addLast(6);
    linkedList.addLast([7,8,9]);

    expect(linkedList.size).toEqual(8);
    expect(linkedList.tail.value).toEqual(9);
  });

  test("'removeFirst' is ok", () => {
    linkedList.removeFirst();

    expect(linkedList.size).toEqual(7);
    expect(linkedList.head.value).toEqual(2);
    expect(linkedList.head.next.value).toEqual(3);
  });

  test("'removeLast' is ok", () => {
    linkedList.removeLast();

    expect(linkedList.size).toEqual(6);
    expect(linkedList.tail.value).toEqual(8);
    expect(linkedList.contains(7)).toBeTruthy();
    expect(linkedList.contains(11)).toBeFalsy();
  });

  test("'remove' is ok", () => {
    linkedList.remove(7);
    linkedList.addFirst(11);

    expect(linkedList.contains(7)).toBeFalsy();
    expect(linkedList.contains(11)).toBeTruthy();
    expect(linkedList.size).toEqual(6);
  });

  test("'forEach' is ok", () => {
    const mockCallback = jest.fn();
    const expectedParamsOfCalls = expect.arrayContaining([[11], [2], [3], [4], [6], [8]]);
    linkedList.forEach(mockCallback);

    expect(mockCallback.mock.calls.length).toBe(6);
    expect(mockCallback.mock.calls).toEqual(expectedParamsOfCalls);
  });

  test("'clear' is ok", () => {
    linkedList.clear();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.size).toEqual(0);
  });

  test("'copyTo' is ok", () => {
    linkedList.addFirst([1,2,3,4]);
    const arr = linkedList.copyTo();

    expect(linkedList.size).toEqual(4);
    expect(arr.length).toEqual(4);
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3, 4]));
  });
});