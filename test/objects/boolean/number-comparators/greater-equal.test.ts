import { NumberConditionType, BooleanConditionType } from '../../../../src/math-naming.class';
import { GreaterEqual } from "../../../../src/objects/boolean/number-comparators/greater-equal";
import { NumberConst } from "../../../../src/objects/number/const";

/**
 * GreaterEqual test
 */
describe("GreaterEqual test", () => {
  const a = new NumberConst(-1);
  const b = new NumberConst(2);
  const c = new NumberConst(-1);
  it("GreaterEqual is instantiable", () => {
    expect(new GreaterEqual(a, b)).toBeInstanceOf(GreaterEqual)
  })
  it("calc returns the correct value", () => {
    expect(new GreaterEqual(a, a).calc((key: string) => undefined)).toBeTruthy()
    expect(new GreaterEqual(b, b).calc((key: string) => undefined)).toBeTruthy()
    expect(new GreaterEqual(c, c).calc((key: string) => undefined)).toBeTruthy()
    expect(new GreaterEqual(a, b).calc((key: string) => undefined)).toBeFalsy()
    expect(new GreaterEqual(a, c).calc((key: string) => undefined)).toBeTruthy()
    expect(new GreaterEqual(b, c).calc((key: string) => undefined)).toBeTruthy()
  })
  it("toJson returns correct json structure", () => {
    expect(new GreaterEqual(a, b).toJson()).toEqual({
      type: BooleanConditionType.GE,
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
