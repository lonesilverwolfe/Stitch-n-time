const isDivisible = require('./remainder');

test('10 is divisible by 5', ()=> {
	expect(isDivisible(10,5)).toBe(true);});

test('7 is not divisible by2', ()=>{
	expect(isDivisible(7,2)).toBe(false);});
