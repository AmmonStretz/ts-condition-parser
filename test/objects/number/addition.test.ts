import { NumberConditionType } from '../../../src/math-naming.class';
import { Addition } from "../../../src/objects/number/addition";
import { NumberConst } from "../../../src/objects/number/const";

/**
 * Not test
 */
describe("Addition test", () => {
  const a = new NumberConst(-10);
  const b = new NumberConst(20);
  it("Addition is instantiable", () => {
    expect(new Addition([])).toBeInstanceOf(Addition)
  })
  it("calc returns the correct value", () => {
    expect(new Addition([a,a]).calc((key: string) => undefined)).toEqual(-20)
    expect(new Addition([a,b]).calc((key: string) => undefined)).toEqual(10)
    expect(new Addition([a,b,a]).calc((key: string) => undefined)).toEqual(0)
  })
  it("toJson returns correct json structure", () => {
    expect(new Addition([a,b]).toJson()).toEqual({
      type: NumberConditionType.ADD,
      summands: [{
        type: NumberConditionType.CONST,
        value: -10
      }, {
        type: NumberConditionType.CONST,
        value: 20
      }]
    })
  })
})
