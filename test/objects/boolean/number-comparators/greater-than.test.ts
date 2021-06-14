import { NumberConditionType, BooleanConditionType } from '../../../../src/math-naming.class';
import { GreaterThan } from "../../../../src/objects/boolean/number-comparators/greater-than";
import { NumberConst } from "../../../../src/objects/number/const";

/**
 * GreaterThan test
 */
describe("GreaterThan test", () => {
  const a = new NumberConst(-1);
  const b = new NumberConst(2);
  const c = new NumberConst(-1);
  it("GreaterThan is instantiable", () => {
    expect(new GreaterThan(a, b)).toBeInstanceOf(GreaterThan)
  })
  it("calc returns the correct value", () => {
    expect(new GreaterThan(a, a).calc((key: string) => undefined)).toBeFalsy()
    expect(new GreaterThan(b, b).calc((key: string) => undefined)).toBeFalsy()
    expect(new GreaterThan(c, c).calc((key: string) => undefined)).toBeFalsy()
    expect(new GreaterThan(a, b).calc((key: string) => undefined)).toBeFalsy()
    expect(new GreaterThan(a, c).calc((key: string) => undefined)).toBeFalsy()
    expect(new GreaterThan(b, c).calc((key: string) => undefined)).toBeTruthy()
  })
  it("toJson returns correct json structure", () => {
    expect(new GreaterThan(a, b).toJson()).toEqual({
      type: BooleanConditionType.GT,
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
