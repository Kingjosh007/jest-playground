// expect + toBe => used to test exact equality (===)
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// expect + toEqual => recursively checks every field of an object or array.
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

// expect + not + toBe => use not to check the opposite.
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
});

