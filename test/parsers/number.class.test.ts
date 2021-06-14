import { NumberConditionType, StringConditionType } from '../../src/math-naming.class';
import { Addition, Division, Multiplication, NumberConst, NumberVar, Pow, StringLength } from '../../src/objects/number.class';
import { Subtraction } from '../../src/objects/number/subtraction';
import { NumberConditionParser } from '../../src/parsers/number.class';

/**
 * NumberConditionParser test
 */
describe("NumberConditionParser test", () => {
  let CONST = {
    type: NumberConditionType.CONST,
    value: 100
  };

  it("containsParser returns correct boolean", () => {
    expect(NumberConditionParser.containsParser(NumberConditionType.CONST)).toBeTruthy()
    expect(NumberConditionParser.containsParser(NumberConditionType.VAR)).toBeTruthy()
    expect(NumberConditionParser.containsParser(NumberConditionType.ADD)).toBeTruthy()
    expect(NumberConditionParser.containsParser(NumberConditionType.MULT)).toBeTruthy()
    expect(NumberConditionParser.containsParser(NumberConditionType.DIV)).toBeTruthy()
    expect(NumberConditionParser.containsParser(NumberConditionType.POW)).toBeTruthy()
    expect(NumberConditionParser.containsParser(NumberConditionType.STRING_LENGTH)).toBeTruthy()
    expect(NumberConditionParser.containsParser('not in there')).toBeFalsy()
  })
  it("fromJson returns CONST correct", () => {
    expect(NumberConditionParser.fromJson(
      CONST
    ) instanceof NumberConst).toBeTruthy()
  })
  it("fromJson returns VAR correct", () => {
    expect(NumberConditionParser.fromJson({
      type: NumberConditionType.VAR,
      key: 'key',
    }) instanceof NumberVar).toBeTruthy()
  })
  it("fromJson returns ADD correct", () => {
    expect(NumberConditionParser.fromJson({
      type: NumberConditionType.ADD,
      summands: [CONST, CONST],
    }) instanceof Addition).toBeTruthy()
  })
  it("fromJson returns SUB correct", () => {
    expect(NumberConditionParser.fromJson({
      type: NumberConditionType.SUB,
      minuend: CONST,
      subtrahend: CONST
    }) instanceof Subtraction).toBeTruthy()
  })
  it("fromJson returns MULT correct", () => {
    expect(NumberConditionParser.fromJson({
      type: NumberConditionType.MULT,
      factors: [CONST, CONST],
    }) instanceof Multiplication).toBeTruthy()
  })
  it("fromJson returns DIV correct", () => {
    expect(NumberConditionParser.fromJson({
      type: NumberConditionType.DIV,
      divident: CONST,
      divisor: CONST
    }) instanceof Division).toBeTruthy()
  })
  it("fromJson returns POW correct", () => {
    expect(NumberConditionParser.fromJson({
      type: NumberConditionType.POW,
      base: CONST,
      exponent: CONST
    }) instanceof Pow).toBeTruthy()
  })
  it("fromJson returns STRING_LENGTH correct", () => {
    expect(NumberConditionParser.fromJson({
      type: NumberConditionType.STRING_LENGTH,
      str: {
        type: StringConditionType.CONST,
        value: 'text'
      },
    }) instanceof StringLength).toBeTruthy()
  })
})
