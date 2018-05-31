// Functional JavaScript Challenge Problems
// _____________________________________________________________
// Please read the README file for more details and instructions
//
// Quick notes:
// func() -> val means the function returns that value
// _____________________________________________________________

// _____________________________________________________________
// Catagory 1: Basics
// _____________________________________________________________

// Write a function that return the value of the parameter passed
// in. Ex. indentity(2) -> 2
export const identity = () => {}

// Write a function that takes two parameters and returns the
// sum of the two. Ex. add(1, 2) -> 3
export const add = () => {}

// Write a function that takes two parameters and returns the
// differemce of the two. Ex. sub(1, 2) -> -1
export const sub = () => {}

// Write a function that takes two parameters and returns the
// product of the two. Ex. mul(5, 2) -> 10
export const mul = () => {}

// _____________________________________________________________
// Catagory 2: Intermediate
// _____________________________________________________________

// Write a function that takes a parameter and returns a
// function, that when called, returns the value passed to the
// first function.
// Ex: let fn = indentityf(2)
//     fn() -> 2
export const identityf = () => {}

// Write a function that takes a parameter and returns a
// function, that when called, also takes a parameter and returns
// the sum of the passed parameters.
// Ex: let fn = addf(1)
//     fn(2) -> 3
// -or-
//     addf(1)(2) -> 3
export const addf = () => {}

// Write a function that takes two parameters, a function and a
// value, and returns a function, that when called, also takes a
// value as a parameter and returns the value of the function
// passed with the values passed.
// Ex: let fn = curry(add, 4)
//     fn(7) -> 11
// -or-
//     curry(add, 1)(2) -> 3
export const curry = () => {}

// Does the same as 'curry', but uses the params in the opposit
// position when calling the function.
// Ex: let fn = curryr(sub, 4)
//     fn(7) -> 3
// -or-
//     curry(add, 4)(7) -> 3
// NOTE: notice that 4-7 is -3, but 7-4 is 3
export const curryr = () => {}

// Write a function that takes a function as a parameter and
// returns a function that takes a value as a paramter and
// returns a function that takes a value as a parameter.
// When called, this final function returns the value of the
// passed function called with the two inner params
// Ex: let fn = liftf(add)
//     let fn2 = fn(1)
//     fn2(2) -> 3
// -or-
//     liftf(add)(1)(2) -> 3
export const liftf = () => {}

// Write a function that takes a binary function as a paramter
// and returns a function that takes a value as a paramter. When
// called, the inner function should return the passed functions
// return value using the value passed to the inner function in
// both param spots.
// Ex: let fn = twice(add)
//     fn(2) -> 4
// -or-
//     twice(mul)(6) -> 36
export const twice = () => {}

// Write a function that takes a binary function as a paramter
// and returns a function that takes two values as a paramters.
// when called, the inner function should return the passed
// functions return value using the values passed to the inner
// function in reverse order.
// Ex: let fn = reverse(sub)
//     fn(3, 6) -> 3
// -or-
//     reverse(sub)(3, 6) -> 3
export const reverse = () => {}

// Write a function that takes two functions as parameters and
// returns a function that takes a value as a parameter. When
// the returned function is called, it calles the first function
// passed in with the value and then calles the second function
// with that returned value.
// Ex: Assume double and square exist, such that double returns
//     the value passed doubled and square returns the value
//     passed multiplied by itself
//
//     let fn = composeu(double, square)
//     fn(3) -> 81
// -or-
//     composeu(double, square)(3) -> 81
export const composeu = () => {}

// This is the same as the 'composeu' function, but it takes two
// binary functions as parameters and return a function that will
// take three values as parameters instead of one.
// Ex. let fn = composeb(add, mul)
//     fn(3, 1, 10) -> 40
// -or-
//     composeb(add, mul)(3, 1, 10) -> 40
export const composeb = () => {}

// Write a function that takes a function as a paramter and a
// value and returns a function. The function should return as
// normal until the number of times the function was called
// exceeds the value passed in, at which point the function
// will always return undefined
// Ex. let fn = limit(add, 1)
//     fn(3, 1) -> 4
//     fn(9, 2) -> undefined
export const limit = () => {}

// _____________________________________________________________
// Catagory 3: Advanced
// _____________________________________________________________

export const from = () => {}
export const to = () => {}
export const thru = () => {}
export const fromTo = () => {}

export const collect = () => {}
export const filter = () => {}
export const concat = () => {}

export const gensymf = () => {}
export const fibonaccif = () => {}

export const counter = () => {}
export const revocable = () => {}

export const addg = () => {}
export const liftg = () => {}

export const join = () => {}
export const continuize = () => {}