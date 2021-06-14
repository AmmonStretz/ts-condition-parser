import { StringConditionType, NumberConditionType } from '../../../src/math-naming.class';
import { StringLength } from "../../../src/objects/number/string-length";
import { StringConst } from "../../../src/objects/string/const";

/**
 * StringLength test
 */
describe("StringLength test", () => {
  it("StringLength is instantiable", () => {
    expect(new StringLength(new StringConst('s'))).toBeInstanceOf(StringLength)
  })
  it("calc returns the correct value", () => {
    expect(new StringLength(new StringConst('')).calc((key: string) => 100)).toBe(0)
    expect(new StringLength(new StringConst('s')).calc((key: string) => 100)).toBe(1)
    expect(new StringLength(new StringConst('ss')).calc((key: string) => 100)).toBe(2)
  })
  it("toJson returns correct structure", () => {
    expect(new StringLength(new StringConst('')).toJson()).toEqual({
      type: NumberConditionType.STRING_LENGTH,
      str: {
        type: StringConditionType.CONST,
        value: ''
      }
    })
  })
})
