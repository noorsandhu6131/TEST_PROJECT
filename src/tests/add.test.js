const add = require('../functions/add.js');

test('add 1 + 2 to equal 3',()=>{
    expect(add(1,2)).toBe(3);
});

test('add 0 + 0 to equal 0',()=>{
    expect(add(0,0)).toBe(0);
});

test('add negative numbers',()=>{
    expect(add(-1,-2)).toBe(-3);
});