// Functional JavaScript Challenge Problems
// _____________________________________________________________
// Please read the README file for more details and instructions
//
// Quick notes:
// func() -> val means the function returns that value
// | is used to show possible other affects to variables
// -- is used to refernece which function is being used
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
//     fn(3) -> 36
// -or-
//     composeu(double, square)(3) -> 36
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

// Write a function that takes a value as a parameter and
// returns a function. When the returned function is called it
// should return one more than the previous value returned,
// starting with the value passed in.
// Ex. let fn = from(3)
//     fn() -> 3
//     fn() -> 4
//     fn() -> 5
//     ...
//     fn() -> infinity
export const from = () => {}

// Write a function that takes a function and a value as
// parameters and returns a function. When the returned function
// is called it should return the value of the passed function,
// incrementing by the passed functions return value each call
// until reaching the value passed, then only undefined should be
// returned. The function passed should be a generator function.
// Ex. let fn = to(from(3), 5)
//     fn() -> 3
//     fn() -> 4
//     fn() -> undefined
export const to = () => {}

// Write a function that takes a function and a value as
// parameters and returns a function. When the returned function
// is called it should return the value of the passed function,
// incrementing by the passed functions return value each call
// until exceeding the value passed, then only undefined should be
// returned. The function passed should be a generator function.
// Ex. let fn = thru(from(3), 4)
//     fn() -> 3
//     fn() -> 4
//     fn() -> undefined
export const thru = () => {}

// Write a function that takes two values as parameters and
// returns a function. When the returned function is called it
// should return the value first passed in and increment by one
// each subsequent call until reaching the value passed, then only
// undefined should be returned.
// Ex. let fn = fromTo(3, 5)
//     fn() -> 3
//     fn() -> 4
//     fn() -> undefined
export const fromTo = () => {}

// Write a function that takes an array as a parameter and returns
// a function that retuns one element from the array, sequentially,
// every time it is called. The element function can also take an
// optional generator function as a second paramter and will use
// that to determine where to start and end when returning elements
// from the array.
// Ex. let fn = element(['a', 'b', 'c', 'd'], fromTo(1, 3))
//     fn() -> 'b'
//     fn() -> 'c'
//     fn() -> undefined
// -or-
// let fn = element(['a', 'b', 'c'])
//     fn() -> 'a'
//     fn() -> 'b'
//     fn() -> 'c'
export const element = () => {}

// Write a function that takes a generator function and a refernece
// to an array as parameters and returns a function. When the
// returned function is called, it should return the value given by
// the function passed in and adds that value to the array before
// returning.
// Ex. let fn = collect(['a', 'b', 'c', 'd'], fromTo(1, 3))
//     fn() -> 0  | arr = [0]
//     fn() -> 1  | arr = [0, 1]
export const collect = () => {}

// Write a function that returns a function and takes a generator
// function and a function to filter what is retrned from the returned
// function.
// Ex. let filt = val => (val % 3) === 0
//     let fn = filter(fromTo(0, 5), filt)
//     fn() -> 0
//     fn() -> 3
//     fn() -> undefined
export const filter = () => {}

// Write a function that takes a variable number of generator functions
// and returns a function. Each time the function is called, it will
// return the value returned by the left most generator function that
// done not return undefined. If all return undefined, return undefined.
// Ex. let fn = concat(fromTo(0, 2), fromTo(0, 1))
//     fn() -> 0    --gen1
//     fn() -> 1    --gen1
//     fn() -> 0    --gen2
//     fn() -> undefined
export const concat = () => {}

export const gensymf = () => {}
export const fibonaccif = () => {}

export const counter = () => {}
export const revocable = () => {}

export const addg = () => {}
export const liftg = () => {}

export const join = () => {}
export const continuize = () => {}