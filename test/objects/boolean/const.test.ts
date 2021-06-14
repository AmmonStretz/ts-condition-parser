import { BooleanConditionType } from '../../../src/math-naming.class';
import { BooleanConst } from "../../../src/objects/boolean/const";

/**
 * BooleanConst test
 */
describe("BooleanConst test", () => {
  const a = new BooleanConst(true);
  const b = new BooleanConst(false);
  it("BooleanConst is instantiable", () => {
    expect(new BooleanConst(true)).toBeInstanceOf(BooleanConst)
  })
  it("calc returns true if key points to true", () => {
    expect(a.calc((key: string) => true)).toBeTruthy()
  })
  it("calc returns false if key points to false--------------", () => {
    expect(!b.calc((key: string) => true)).toBeTruthy()
  })
  it("toJson returns correct structure with true value", () => {
    expect(a.toJson()).toEqual({
      type: BooleanConditionType.CONST,
      value: true
    })
  })
  it("toJson returns correct structure with false value", () => {
    expect(b.toJson()).toEqual({
      type: BooleanConditionType.CONST,
      value: false
    })
  })
})
