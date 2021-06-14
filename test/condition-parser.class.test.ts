import { BooleanConditionType, NumberConditionType, StringConditionType } from "../src/math-naming.class"
import { ConditionParser } from "../src/condition-parser.class"
import { BooleanConst } from "../src/objects/boolean.class"
import { NumberConst } from "../src/objects/number.class"
import { StringConst } from "../src/objects/string.class"

/**
 * StringConditionParser test
 */
describe("ConditionParser test", () => {

  it("fromJson returns STRING_CONST object correctly", () => {
    expect(ConditionParser.fromJson({
      type: StringConditionType.CONST,
      value: 's'
    }) instanceof StringConst).toBeTruthy()
  })
  it("fromJson returns NUMBER_CONST object correctly", () => {
    expect(ConditionParser.fromJson({
      type: NumberConditionType.CONST,
      value: 123
    }) instanceof NumberConst).toBeTruthy()
  })
  it("fromJson returns BOOLEAN_CONST object correctly", () => {
    expect(ConditionParser.fromJson({
      type: BooleanConditionType.CONST,
      value: true
    }) instanceof BooleanConst).toBeTruthy()
  })
  it("fromJson does not find nonexsisting parser", () => {
    try {
      ConditionParser.fromJson({ type: 'wrong type' })
      expect(false).toBeTruthy()
    } catch (error) {
      expect(true).toBeTruthy()
    }
  })
})
