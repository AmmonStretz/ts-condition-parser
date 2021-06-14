import { NumberConditionType } from '../../../src/math-naming.class';
import { Multiplication } from "../../../src/objects/number/multiplication";
import { NumberConst } from "../../../src/objects/number/const";

/**
 * Not test
 */
describe("Multiplication test", () => {
  const a = new NumberConst(-1);
  const b = new NumberConst(2);
  const c = new NumberConst(0);
  it("Multiplication is instantiable", () => {
    expect(new Multiplication([])).toBeInstanceOf(Multiplication)
  })
  it("calc returns the correct value", () => {
    expect(new Multiplication([a, b]).calc((key: string) => undefined)).toEqual(-2)
    expect(new Multiplication([a, a]).calc((key: string) => undefined)).toEqual(1)
    expect(0 + new Multiplication([a, c]).calc((key: string) => undefined)).toEqual(0)
    expect(new Multiplication([a, b, a]).calc((key: string) => undefined)).toEqual(2)
  })
  it("toJson returns correct json structure", () => {
    expect(new Multiplication([a, b]).toJson()).toEqual({
      type: NumberConditionType.MULT,
      factors: [{
        type: NumberConditionType.CONST,
        value: -1
      }, {
        type: NumberConditionType.CONST,
        value: 2
      }]
    })
  })
})
