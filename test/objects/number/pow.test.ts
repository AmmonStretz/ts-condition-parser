import { NumberConditionType } from '../../../src/math-naming.class';
import { Pow } from "../../../src/objects/number/pow";
import { NumberConst } from "../../../src/objects/number/const";

/**
 * Not test
 */
describe("Pow test", () => {
  const a = new NumberConst(-1);
  const b = new NumberConst(2);
  const c = new NumberConst(0);
  it("Pow is instantiable", () => {
    expect(new Pow(a, b)).toBeInstanceOf(Pow)
  })
  it("calc returns the correct value", () => {
    expect(new Pow(a, a).calc((key: string) => undefined)).toEqual(-1)
    expect(new Pow(a, b).calc((key: string) => undefined)).toEqual(1)
    expect(new Pow(b, a).calc((key: string) => undefined)).toEqual(0.5)
    expect(new Pow(b, b).calc((key: string) => undefined)).toEqual(4)
    expect(new Pow(c, b).calc((key: string) => undefined)).toEqual(0)
    expect(new Pow(c, c).calc((key: string) => undefined)).toEqual(1)
  })
  it("toJson returns correct json structure", () => {
    expect(new Pow(a, b).toJson()).toEqual({
      type: NumberConditionType.POW,
      base: {
        type: NumberConditionType.CONST,
        value: -1
      },
      exponent: {
        type: NumberConditionType.CONST,
        value: 2
      }
    })
  })
})
