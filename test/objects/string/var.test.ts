import { StringConditionType } from '../../../src/math-naming.class';
import { StringVar } from "../../../src/objects/string/var";

/**
 * StringVar test
 */
describe("StringVar test", () => {
  const bv = new StringVar('a', 'test');
  it("StringVar is instantiable", () => {
    expect(new StringVar('a')).toBeInstanceOf(StringVar)
  })
  it("calc returns the correct value", () => {
    expect(bv.calc((key: string) => 'AAA')).toBe('AAA')
    expect(bv.calc((key: string) => 'BBB')).toBe('BBB')
    expect(bv.calc((key: string) => '')).toBe('')
  })
  it("calc returns the default value", () => {
    expect(bv.calc((key: string) => undefined)).toBe('test')
  })
  it("toJson returns correct structure", () => {
    expect(bv.toJson()).toEqual({
      type: StringConditionType.VAR,
      key: 'a'
    })
  })
})
