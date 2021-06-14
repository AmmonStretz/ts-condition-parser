import { NumberConditionType } from '../../../src/math-naming.class';
import { NumberConst } from "../../../src/objects/number/const";

/**
 * NumberConst test
 */
describe("NumberConst test", () => {
  const a = new NumberConst(100);
  const b = new NumberConst(0);
  const c = new NumberConst(-99.9);
  it("NumberConst is instantiable", () => {
    expect(a).toBeInstanceOf(NumberConst)
    expect(b).toBeInstanceOf(NumberConst)
    expect(c).toBeInstanceOf(NumberConst)
  })
  it("calc returns correct number", () => {
    expect(a.calc((key: string) => undefined)).toBe(100)
    expect(b.calc((key: string) => undefined)).toBe(0)
    expect(c.calc((key: string) => undefined)).toBe(-99.9)
  })
  it("toJson returns correct structure", () => {
    expect(a.toJson()).toEqual({
      type: NumberConditionType.CONST,
      value: 100
    })
    expect(b.toJson()).toEqual({
      type: NumberConditionType.CONST,
      value: 0
    })
    expect(c.toJson()).toEqual({
      type: NumberConditionType.CONST,
      value: -99.9
    })
  })
})
