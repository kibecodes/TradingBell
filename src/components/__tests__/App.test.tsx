
test('adding positive numbers is not zero', () => {
    for (let a=1; a<10; a++){
        for (let b=1; b<10; b++){
            expect(a+b).not.toBe(0);
        }
    }
});

test('null', () => {
    const n = null;
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeCloseTo(4);
})

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});
test('but there is a "stop" in christoph', () => {
    expect('christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  "milk"
];

test('shopping list has milk in it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk')
})

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}
test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});