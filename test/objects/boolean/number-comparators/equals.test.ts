import { NumberConditionType, BooleanConditionType } from '../../../../src/math-naming.class';
import { Equal } from "../../../../src/objects/boolean/number-comparators/equal";
import { NumberConst } from "../../../../src/objects/number/const";

/**
 * Equal test
 */
describe("Equal test", () => {
  const a = new NumberConst(-1);
  const b = new NumberConst(2);
  const c = new NumberConst(-1);
  it("Equal is instantiable", () => {
    expect(new Equal(a, b)).toBeInstanceOf(Equal)
  })
  it("calc returns the correct value", () => {
    expect(new Equal(a, a).calc((key: string) => undefined)).toBeTruthy()
    expect(new Equal(b, b).calc((key: string) => undefined)).toBeTruthy()
    expect(new Equal(c, c).calc((key: string) => undefined)).toBeTruthy()
    expect(new Equal(a, b).calc((key: string) => undefined)).toBeFalsy()
    expect(new Equal(a, c).calc((key: string) => undefined)).toBeTruthy()
    expect(new Equal(b, c).calc((key: string) => undefined)).toBeFalsy()
  })
  it("toJson returns correct json structure", () => {
    expect(new Equal(a, b).toJson()).toEqual({
      type: BooleanConditionType.EQ,
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
