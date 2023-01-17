// const sum = require('./sum');
import sum from './sum'
import { describe, expect, it } from "vitest"

describe("try", () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
  })
})