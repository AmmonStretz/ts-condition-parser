import { BooleanConditionType } from '../../../src/math-naming.class';
import { Or } from "../../../src/objects/boolean/or";
import { BooleanConst } from "../../../src/objects/boolean/const";

/**
 * Not test
 */
describe("Or test", () => {
  const t = new BooleanConst(true);
  const f = new BooleanConst(false);
  it("Or is instantiable", () => {
    expect(new Or([])).toBeInstanceOf(Or)
  })
  it("calc returns the correct value", () => {
    expect(new Or([t,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(new Or([t,f]).calc((key: string) => undefined)).toBeTruthy()
    expect(new Or([f,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new Or([f,f]).calc((key: string) => undefined)).toBeTruthy()
    
    expect(new Or([t,t,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(new Or([t,t,f]).calc((key: string) => undefined)).toBeTruthy()
    expect(new Or([t,f,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(new Or([t,f,f]).calc((key: string) => undefined)).toBeTruthy()
    
    expect(new Or([f,t,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(new Or([f,t,f]).calc((key: string) => undefined)).toBeTruthy()
    expect(new Or([f,f,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new Or([f,f,f]).calc((key: string) => undefined)).toBeTruthy()
  })
  it("toJson returns correct json structure", () => {
    expect(new Or([t,f]).toJson()).toEqual({
      type: BooleanConditionType.OR,
      operators: [{
        type: BooleanConditionType.CONST,
        value: true
      }, {
        type: BooleanConditionType.CONST,
        value: false
      }]
    })
  })
})
