import { NumberConditionType } from '../../../src/math-naming.class';
import { Subtraction } from "../../../src/objects/number/subtraction";
import { NumberConst } from "../../../src/objects/number/const";

/**
 * Not test
 */
describe("Subtraction test", () => {
  const a = new NumberConst(-1);
  const b = new NumberConst(1);
  const c = new NumberConst(2);
  it("Subtraction is instantiable", () => {
    expect(new Subtraction(a, b)).toBeInstanceOf(Subtraction)
  })
  it("calc returns the correct value", () => {
    expect(new Subtraction(a, a).calc((key: string) => undefined)).toEqual(0)
    expect(new Subtraction(a, b).calc((key: string) => undefined)).toEqual(-2)
    expect(new Subtraction(b, a).calc((key: string) => undefined)).toEqual(2)
    expect(new Subtraction(b, b).calc((key: string) => undefined)).toEqual(0)
    expect(new Subtraction(c, b).calc((key: string) => undefined)).toEqual(1)
    expect(new Subtraction(b, c).calc((key: string) => undefined)).toEqual(-1)
  })
  it("toJson returns correct json structure", () => {
    expect(new Subtraction(a, b).toJson()).toEqual({
      type: NumberConditionType.DIV,
      minuend: {
        type: NumberConditionType.CONST,
        value: -1
      },
      subtrahend: {
        type: NumberConditionType.CONST,
        value: 1
      }
    })
  })
})
