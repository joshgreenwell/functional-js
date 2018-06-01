// Hi, I am a test! Ignore this import styleing...
import {
  identity, 
  add, sub, mul,
  identityf, addf,
  curry, curryr,
  liftf,
  twice, reverse,
  composeu, composeb,
  limit,
  from as fromf, to, thru, fromTo,
  element, collect, filter, concat,
  gensymf, fibonaccif,
  counter, revocable,
  addg, liftg,
  join, continuize
} from '../index'

// ~~~~~~~~~~ Test Start ~~~~~~~~~~
describe('Functional JavaScript', () => {
  // Functions to be used later
  const double = twice(add)
  const square = twice(mul)
  const div = (a, b) => a / b

  // Variables
  let x
  let y

  // Setup
  beforeEach(() => {
    x = undefined
    y = undefined
  })

  // Let's do this!
  describe('Part 1: Test we are good', () => {
    it('calls identity', () => {
      x = identity(3)
      expect(x).toEqual(3)
    })
  })
  describe('Part 2: Basic functions', () => {
    it('calls add', () => {
      x = add(3, 4)
      expect(x).toEqual(7)
    })
    it('calls sub', () => {
      x = sub(3, 4)
      expect(x).toEqual(-1)
    })
    it('calls mul', () => {
      x = mul(3, 4)
      expect(x).toEqual(12)
    })
  })
  describe('Part 3: Returning functions', () => {
    it('calls identityf', () => {
      x = identityf(3)
      expect(typeof x).toBe('function')
      expect(x()).toEqual(3)
    })
    it('calls addf', () => {
      x = addf(3)
      expect(typeof x).toBe('function')
      expect(x(4)).toEqual(7)
    })
  })
  describe('Part 4: Passing and returning functions', () => {
    it('calls curry', () => {
      x = curry(mul, 3)
      expect(typeof x).toBe('function')
      expect(x(4)).toEqual(12)
    })
    it('calls curryr', () => {
      x = curryr(sub, 1)
      expect(typeof x).toBe('function')
      expect(x(7)).toEqual(6)
    })
  })
  describe('Part 5: Nested function', () => {
    it('calls liftf', () => {
      x = liftf(add)
      y = x(3)
      expect(typeof x).toBe('function')
      expect(typeof y).toBe('function')
      expect(y(4)).toEqual(7)
    })
  })
  describe('Part 6: More passing functions and returning functions', () => {
    it('calls twice w/ add', () => {
      x = twice(add)
      expect(typeof x).toBe('function')
      expect(x(11)).toEqual(22)
    })
    it('calls twice w/ mul', () => {
      x = twice(mul)
      expect(typeof x).toBe('function')
      expect(x(11)).toEqual(121)
    })
    it('calls reverse', () => {
      x = reverse(sub)
      expect(typeof x).toBe('function')
      expect(x(3, 2)).toEqual(-1)
    })
  })
  describe('part 7: Order of operations', () => {
    it('calls composeu', () => {
      x = composeu(double, square)
      expect(typeof x).toBe('function')
      expect(x(5)).toEqual(100)
    })
    it('calls composeb', () => {
      x = composeb(add, mul)
      expect(typeof x).toBe('function')
      expect(x(2, 3, 7)).toEqual(35)
    })
  })
  describe('Part 8: Limiting the number of times a function can be called', () => {
    it('calls limit', () => {
      x = limit(add, 1)
      expect(typeof x).toBe('function')
      expect(x(1, 2)).toEqual(3)
      expect(x(1, 2)).toEqual(undefined)
    })
  })
  describe('Part 9: Factories', () => {
    it('calls from', () => {
      x = fromf(0)
      expect(typeof x).toBe('function')
      expect(x()).toEqual(0)
      expect(x()).toEqual(1)
      expect(x()).toEqual(2)
    })
    it('calls to', () => {
      x = to(fromf(2), 4)
      expect(typeof x).toBe('function')
      expect(x()).toEqual(2)
      expect(x()).toEqual(3)
      expect(x()).toEqual(undefined)
    })
    it('calls thru', () => {
      x = thru(fromf(2), 4)
      expect(typeof x).toBe('function')
      expect(x()).toEqual(2)
      expect(x()).toEqual(3)
      expect(x()).toEqual(4)
      expect(x()).toEqual(undefined)
    })
    it('calls fromTo', () => {
      x = fromTo(0, 3)
      expect(typeof x).toBe('function')
      expect(x()).toEqual(0)
      expect(x()).toEqual(1)
      expect(x()).toEqual(2)
      expect(x()).toEqual(undefined)
    })
  })
  describe.skip('Part 10: More factories', () => {
    it('calls element', () => {
      x = element(['a', 'b', 'c', 'd'], fromTo(1, 3))
      expect(typeof x).toBe('function')
      expect(x()).toBe('b')
      expect(x()).toBe('c')
      expect(x()).toEqual(undefined)
    })
    it('calls element w/o a generator func', () => {
      x = element(['a', 'b', 'c', 'd'])
      expect(typeof x).toBe('function')
      expect(x()).toBe('a')
      expect(x()).toBe('b')
      expect(x()).toBe('c')
      expect(x()).toBe('d')
      expect(x()).toEqual(undefined)
    })
    it('calls collect', () => {
      const arr = []
      x = collect(fromTo(0, 2), arr)
      expect(typeof x).toBe('function')
      expect(x()).toBe(0)
      expect(x()).toBe(1)
      expect(x()).toEqual(undefined)
      expect(arr).toEqual([0, 1])
    })
    it('calls filter', () => {
      const fn = val => (val % 3) === 0
      x = filter(fromTo(0, 5), fn)
      expect(typeof x).toBe('function')
      expect(x()).toBe(0)
      expect(x()).toBe(3)
      expect(x()).toEqual(undefined)
    })
    it('calls concat', () => {
      x = concat(fromTo(0, 3), fromTo(0, 2))
      expect(typeof x).toBe('function')
      expect(x()).toBe(0)
      expect(x()).toBe(1)
      expect(x()).toBe(2)
      expect(x()).toBe(0)
      expect(x()).toBe(1)
      expect(x()).toEqual(undefined)
    })
  })
  describe.skip('Part 11: Funwith what we have learned', () => {
    it('calls gensymf', () => {
      x = gensymf('G')
      y = gensymf('H')
      expect(typeof x).toBe('function')
      expect(typeof y).toBe('function')
      expect(x()).toBe('G1')
      expect(y()).toBe('H1')
      expect(x()).toBe('G2')
      expect(y()).toBe('H2')
    })
    it('calls fib', () => {
      x = fibonaccif(0, 1)
      expect(typeof x).toBe('function')
      expect(x()).toBe(0)
      expect(x()).toBe(1)
      expect(x()).toBe(1)
      expect(x()).toBe(2)
      expect(x()).toBe(3)
      expect(x()).toBe(5)
    })
  })
  describe.skip('Part 12: Return Objects', () => {
    it('calls counter', () => {
      x = counter(10)
      expect(x.up()).toBe(11)
      expect(x.up()).toBe(12)
      expect(x.down()).toBe(11)
      expect(x.down()).toBe(10)
    })
    it('calls revocable', () => {
      x = revocable(add)
      let rev_add = x.invoke
      expect(rev_add(3, 4)).toBe(7)
      x.revoke()
      expect(rev_add(3, 4)).toBe(undefined)
    })
  })
  describe.skip('Part 13: g functions', () => {
    it('calls addg', () => {
      expect(addg()).toBe(undefined)
      expect(addg(2)()).toBe(2)
      expect(addg(2)(7)()).toBe(9)
      expect(addg(3)(0)(4)()).toBe(7)
    })
    it('calls liftg', () => {
      expect(liftg(mul)()).toBe(undefined)
      expect(liftg(mul)(3)()).toBe(3)
      expect(liftg(mul)(3)(0)(4)()).toBe(0)
      expect(liftg(mul)(1)(2)(4)(8)()).toBe(64)
    })
  })
  describe.skip('Part 14: Some final challenges', () => {
    it('calls join', () => {
      x = join(div, fibonaccif(3, 5), fibonaccif(2, 3))
      expect(x()).toBe(1.5)
      x()
      expect(x()).toBe(1.6)
      expect(x()).toBe(1.625)
    })
    it('calls continuize', () => {
      x = continuize(Math.sqrt)
      expect(x(val => val, 81)).toBe(9)
    })
  })
})

// Hi there. Why you down here? Get back to work!