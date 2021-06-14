import { NumberConditionType } from '../../../src/math-naming.class';
import { NumberVar } from "../../../src/objects/number/var";

/**
 * NumberVar test
 */
describe("NumberVar test", () => {
  const bv = new NumberVar('a', 100);
  it("NumberVar is instantiable", () => {
    expect(new NumberVar('a')).toBeInstanceOf(NumberVar)
  })
  it("calc returns the correct value", () => {
    expect(bv.calc((key: string) => 100)).toBe(100)
    expect(bv.calc((key: string) => -99.9)).toBe(-99.9)
    expect(bv.calc((key: string) => 0)).toBe(0)
  })
  it("calc returns the default value", () => {
    expect(bv.calc((key: string) => undefined)).toBe(100)
  })
  it("toJson returns correct structure", () => {
    expect(bv.toJson()).toEqual({
      type: NumberConditionType.VAR,
      key: 'a'
    })
  })
})
