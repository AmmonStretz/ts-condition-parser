import { BooleanConditionType } from '../../../src/math-naming.class';
import { Not } from "../../../src/objects/boolean/not";
import { BooleanConst } from "../../../src/objects/boolean/const";

/**
 * Not test
 */
describe("Not test", () => {
  const a = new Not(new BooleanConst(true));
  const b = new Not(new BooleanConst(false));
  it("Not is instantiable", () => {
    expect(a).toBeInstanceOf(Not)
    expect(b).toBeInstanceOf(Not)
  })
  it("calc returns the inverted value", () => {
    expect(!a.calc((key: string) => undefined)).toBeTruthy()
    expect(b.calc((key: string) => undefined)).toBeTruthy()
  })
  it("toJson returns correct structure", () => {
    expect(a.toJson()).toEqual({
      type: BooleanConditionType.NOT,
      operator: {
        type: BooleanConditionType.CONST,
        value: true
      }
    })
    expect(b.toJson()).toEqual({
      type: BooleanConditionType.NOT,
      operator: {
        type: BooleanConditionType.CONST,
        value: false
      }
    })
  })
})
