import { StringConditionType } from '../../../src/math-naming.class';
import { StringConst } from "../../../src/objects/string/const";

/**
 * StringConst test
 */
describe("StringConst test", () => {
  const a = new StringConst('A');
  const b = new StringConst('B');
  const c = new StringConst('');
  it("StringConst is instantiable", () => {
    expect(a).toBeInstanceOf(StringConst)
    expect(b).toBeInstanceOf(StringConst)
    expect(c).toBeInstanceOf(StringConst)
  })
  it("calc returns correct number", () => {
    expect(a.calc((key: string) => undefined)).toBe('A')
    expect(b.calc((key: string) => undefined)).toBe('B')
    expect(c.calc((key: string) => undefined)).toBe('')
  })
  it("toJson returns correct structure", () => {
    expect(a.toJson()).toEqual({
      type: StringConditionType.CONST,
      value: 'A'
    })
    expect(b.toJson()).toEqual({
      type: StringConditionType.CONST,
      value: 'B'
    })
    expect(c.toJson()).toEqual({
      type: StringConditionType.CONST,
      value: ''
    })
  })
})
