import { NumberConditionType, BooleanConditionType } from '../../../../src/math-naming.class';
import { NotEqual } from "../../../../src/objects/boolean/number-comparators/not-equal";
import { NumberConst } from "../../../../src/objects/number/const";

/**
 * NotEqual test
 */
describe("NotEqual test", () => {
  const a = new NumberConst(-1);
  const b = new NumberConst(2);
  const c = new NumberConst(-1);
  it("NotEqual is instantiable", () => {
    expect(new NotEqual(a, b)).toBeInstanceOf(NotEqual)
  })
  it("calc returns the correct value", () => {
    expect(new NotEqual(a, a).calc((key: string) => undefined)).toBeFalsy()
    expect(new NotEqual(b, b).calc((key: string) => undefined)).toBeFalsy()
    expect(new NotEqual(c, c).calc((key: string) => undefined)).toBeFalsy()
    expect(new NotEqual(a, b).calc((key: string) => undefined)).toBeTruthy()
    expect(new NotEqual(a, c).calc((key: string) => undefined)).toBeFalsy()
    expect(new NotEqual(b, c).calc((key: string) => undefined)).toBeTruthy()
  })
  it("toJson returns correct json structure", () => {
    expect(new NotEqual(a, b).toJson()).toEqual({
      type: BooleanConditionType.NE,
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
