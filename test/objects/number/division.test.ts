import { NumberConditionType } from '../../../src/math-naming.class';
import { Division } from "../../../src/objects/number/division";
import { NumberConst } from "../../../src/objects/number/const";

/**
 * Division test
 */
describe("Division test", () => {
  const a = new NumberConst(-1);
  const b = new NumberConst(2);
  const c = new NumberConst(0);
  it("Division is instantiable", () => {
    expect(new Division(a, b)).toBeInstanceOf(Division)
  })
  it("calc returns the correct value", () => {
    expect(new Division(a, a).calc((key: string) => undefined)).toEqual(1)
    expect(new Division(a, b).calc((key: string) => undefined)).toEqual(-0.5)
    expect(new Division(b, a).calc((key: string) => undefined)).toEqual(-2)
    expect(new Division(b, b).calc((key: string) => undefined)).toEqual(1)
    // TODO
    // expect(new Division(a, c).calc((key: string) => undefined)).toThrowError(new Error("division by zero"))
    expect(new Division(c, b).calc((key: string) => undefined)).toEqual(0)
  })
  it("toJson returns correct json structure", () => {
    expect(new Division(a, b).toJson()).toEqual({
      type: NumberConditionType.DIV,
      divident: {
        type: NumberConditionType.CONST,
        value: -1
      },
      divisor: {
        type: NumberConditionType.CONST,
        value: 2
      }
    })
  })
})
