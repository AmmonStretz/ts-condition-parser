import { BooleanConditionType, NumberConditionType, StringConditionType } from '../../src/math-naming.class';
import { And, BooleanConst, BooleanVar, Equal, GreaterEqual, GreaterThan, LessEqual, LessThan, Not, NotEqual, Or } from '../../src/objects/boolean.class';
import { BooleanConditionParser } from '../../src/parsers/boolean.class';

/**
 * BooleanConditionParser test
 */
describe("BooleanConditionParser test", () => {
  // TODO: if CONST not boolean
  const CONST = {
    type: BooleanConditionType.CONST,
    value: true
  };
  // TODO: if CONST not number
  let NUMBER_CONST = {
    type: NumberConditionType.CONST,
    value: 100
  };

  // TODO: if CONST not number
  let STRING_CONST = {
    type: StringConditionType.CONST,
    value: "asd"
  };

  it("containsParser returns correct boolean", () => {
    expect(BooleanConditionParser.containsParser(BooleanConditionType.CONST)).toBeTruthy()
    expect(BooleanConditionParser.containsParser(BooleanConditionType.VAR)).toBeTruthy()
    expect(BooleanConditionParser.containsParser('not in there')).toBeFalsy()
  })
  it("fromJson returns CONST object correctly", () => {
    expect(BooleanConditionParser.fromJson(CONST) instanceof BooleanConst).toBeTruthy()
  })
  it("fromJson returns VAR object correctly", () => {
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.VAR,
      key: 'key',
    }) instanceof BooleanVar).toBeTruthy()
  })
  it("fromJson returns NOT object correctly", () => {
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.NOT,
      operator: CONST
    }) instanceof Not).toBeTruthy()
  })
  it("fromJson returns AND object correctly", () => {
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.AND,
      operators: [CONST, CONST]
    }) instanceof And).toBeTruthy()
  })
  it("fromJson returns OR object correctly", () => {
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.OR,
      operators: [CONST, CONST]
    }) instanceof Or).toBeTruthy()
  })
  it("fromJson returns GT object correctly", () => {
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.GT,
      left: NUMBER_CONST,
      right: NUMBER_CONST
    }) instanceof GreaterThan).toBeTruthy()
  })
  it("fromJson returns GE object correctly", () => {
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.GE,
      left: NUMBER_CONST,
      right: NUMBER_CONST
    }) instanceof GreaterEqual).toBeTruthy()
  })
  it("fromJson returns LT object correctly", () => {
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.LT,
      left: NUMBER_CONST,
      right: NUMBER_CONST
    }) instanceof LessThan).toBeTruthy()
  })
  it("fromJson returns LE object correctly", () => {
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.LE,
      left: NUMBER_CONST,
      right: NUMBER_CONST
    }) instanceof LessEqual).toBeTruthy()
  })
  it("fromJson returns EQ object correctly", () => {
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.EQ,
      left: NUMBER_CONST,
      right: NUMBER_CONST
    }) instanceof Equal).toBeTruthy()
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.EQ,
      left: STRING_CONST,
      right: STRING_CONST
    }) instanceof Equal).toBeTruthy()
  })
  it("fromJson returns NE object correctly", () => {
    expect(BooleanConditionParser.fromJson({
      type: BooleanConditionType.NE,
      left: NUMBER_CONST,
      right: NUMBER_CONST
    }) instanceof NotEqual).toBeTruthy()
  })
})
