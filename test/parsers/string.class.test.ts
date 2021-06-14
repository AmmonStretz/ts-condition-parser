import { StringConditionType } from '../../src/math-naming.class';
import { StringConst, StringVar } from '../../src/objects/string.class';
import { StringConditionParser } from '../../src/parsers/string.class';

/**
 * StringConditionParser test
 */
describe("StringConditionParser test", () => {

  it("containsParser returns correct boolean", () => {
    expect(StringConditionParser.containsParser(StringConditionType.CONST)).toBeTruthy()
    expect(StringConditionParser.containsParser(StringConditionType.VAR)).toBeTruthy()
    expect(StringConditionParser.containsParser('not in there')).toBeFalsy()
  })
  it("fromJson returns CONST object correctly", () => {
    expect(StringConditionParser.fromJson({
      type: StringConditionType.CONST,
      value: 's'
    }) instanceof StringConst).toBeTruthy()
  })
  it("fromJson returns VAR object correctly", () => {
    expect(StringConditionParser.fromJson({
      type: StringConditionType.VAR,
      key: 'key',
    }) instanceof StringVar).toBeTruthy()
  })
})
