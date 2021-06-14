import { NumberConditionType, BooleanConditionType } from '../../../../src/math-naming.class';
import { LessThan } from "../../../../src/objects/boolean/number-comparators/less-than";
import { NumberConst } from "../../../../src/objects/number/const";

/**
 * LessThan test
 */
describe("LessThan test", () => {
  const a = new NumberConst(-1);
  const b = new NumberConst(2);
  const c = new NumberConst(-1);
  it("LessThan is instantiable", () => {
    expect(new LessThan(a, b)).toBeInstanceOf(LessThan)
  })
  it("calc returns the correct value", () => {
    expect(new LessThan(a, a).calc((key: string) => undefined)).toBeFalsy()
    expect(new LessThan(b, b).calc((key: string) => undefined)).toBeFalsy()
    expect(new LessThan(c, c).calc((key: string) => undefined)).toBeFalsy()
    expect(new LessThan(a, b).calc((key: string) => undefined)).toBeTruthy()
    expect(new LessThan(a, c).calc((key: string) => undefined)).toBeFalsy()
    expect(new LessThan(b, c).calc((key: string) => undefined)).toBeFalsy()
  })
  it("toJson returns correct json structure", () => {
    expect(new LessThan(a, b).toJson()).toEqual({
      type: BooleanConditionType.LT,
      first: {
        type: NumberConditionType.CONST,
        value: -1
      },
      second: {
        type: NumberConditionType.CONST,
        value: 2
      }
    })
  })
})
