
function sum(a, b) {
    return a + b;
}

const sum2= (a,b) => a+b

test('adds 1 + 2 to equal 3', () => {
    expect(sum2(1, 2)).toBe(3);
});