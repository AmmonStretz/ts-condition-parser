import { BooleanConditionType } from '../../../src/math-naming.class';
import { BooleanVar } from "../../../src/objects/boolean/var";

/**
 * BooleanVar test
 */
describe("BooleanVar test", () => {
  const bv = new BooleanVar('a');
  it("BooleanVar is instantiable", () => {
    expect(new BooleanVar('a')).toBeInstanceOf(BooleanVar)
  })
  it("calc returns true if key points to true", () => {
    expect(bv.calc((key: string) => true)).toBeTruthy()
  })
  it("calc returns false if key points to false", () => {
    expect(!bv.calc((key: string) => false)).toBeTruthy()
  })
  it("calc returns false if key points to undefined", () => {
    expect(bv.calc((key: string) => undefined)).toBe(false)
  })
  it("toJson returns correct structure", () => {
    expect(bv.toJson()).toEqual({
      type: BooleanConditionType.VAR,
      key: 'a'
    })
  })
})
