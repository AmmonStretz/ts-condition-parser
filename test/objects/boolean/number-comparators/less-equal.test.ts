import { NumberConditionType, BooleanConditionType } from '../../../../src/math-naming.class';
import { LessEqual } from "../../../../src/objects/boolean/number-comparators/less-equal";
import { NumberConst } from "../../../../src/objects/number/const";

/**
 * LessEqual test
 */
describe("LessEqual test", () => {
  const a = new NumberConst(-1);
  const b = new NumberConst(2);
  const c = new NumberConst(-1);
  it("LessEqual is instantiable", () => {
    expect(new LessEqual(a, b)).toBeInstanceOf(LessEqual)
  })
  it("calc returns the correct value", () => {
    expect(new LessEqual(a, a).calc((key: string) => undefined)).toBeTruthy()
    expect(new LessEqual(b, b).calc((key: string) => undefined)).toBeTruthy()
    expect(new LessEqual(c, c).calc((key: string) => undefined)).toBeTruthy()
    expect(new LessEqual(a, b).calc((key: string) => undefined)).toBeTruthy()
    expect(new LessEqual(a, c).calc((key: string) => undefined)).toBeTruthy()
    expect(new LessEqual(b, c).calc((key: string) => undefined)).toBeFalsy()
  })
  it("toJson returns correct json structure", () => {
    expect(new LessEqual(a, b).toJson()).toEqual({
      type: BooleanConditionType.LE,
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
