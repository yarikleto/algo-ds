import createLinkedList from "./linked-list";

describe("The linked list is working well", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = createLinkedList();
  });

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

    expect(linkedList.size).toEqual(4);
    expect(linkedList.tail.value).toEqual(9);
  });

  test("'removeFirst' is ok", () => {
    linkedList.removeFirst();
    linkedList.addFirst(6);
    linkedList.removeFirst();

    expect(linkedList.size).toEqual(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.addFirst([1, 2, 3]);
    linkedList.removeFirst();

    expect(linkedList.head.value).toEqual(2);
    expect(linkedList.head.next.value).toEqual(3);
    expect(linkedList.head.prev).toBeNull();
  });

  test("'removeLast' is ok", () => {
    linkedList.removeLast();
    linkedList.addLast(8);
    linkedList.removeLast();

    expect(linkedList.size).toEqual(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.addFirst([1, 2, 3]);
    linkedList.removeLast();

    expect(linkedList.tail.value).toEqual(2);
    expect(linkedList.tail.prev.value).toEqual(1);
    expect(linkedList.tail.next).toBeNull();
  });

  test("'contains' is ok", () => {
    linkedList.addFirst([1, 2]);

    expect(linkedList.contains(1)).toBeTruthy();
    expect(linkedList.contains(5)).toBeFalsy();
  });

  test("'remove' is ok", () => {
    linkedList.addFirst([2, 4, 5, 6, 88]);

    expect(linkedList.remove(2)).toBeTruthy();
    expect(linkedList.remove(88)).toBeTruthy();
    expect(linkedList.remove(5)).toBeTruthy();
    expect(linkedList.remove(101)).toBeFalsy();
    expect(linkedList.contains(2)).toBeFalsy();
    expect(linkedList.contains(5)).toBeFalsy();
    expect(linkedList.contains(88)).toBeFalsy();
    expect(linkedList.size).toEqual(2);
  });

  test("'forEach' is ok", () => {
    linkedList.addFirst([11, 2, 3]);
    linkedList.addLast([4, 6, 8]);
    const mockCallback = jest.fn();
    const expectedParamsOfCalls = expect.arrayContaining([[11], [2], [3], [4], [6], [8]]);
    linkedList.forEach(mockCallback);

    expect(mockCallback.mock.calls.length).toBe(6);
    expect(mockCallback.mock.calls).toEqual(expectedParamsOfCalls);
  });

  test("'clear' is ok", () => {
    linkedList.addLast([4, 6, 8]);
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