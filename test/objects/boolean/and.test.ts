import { BooleanConditionType } from '../../../src/math-naming.class';
import { And } from "../../../src/objects/boolean/and";
import { BooleanConst } from "../../../src/objects/boolean/const";

/**
 * Not test
 */
describe("And test", () => {
  const t = new BooleanConst(true);
  const f = new BooleanConst(false);
  it("And is instantiable", () => {
    expect(new And([])).toBeInstanceOf(And)
  })
  it("calc returns the correct value", () => {
    expect(new And([t,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new And([t,f]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new And([f,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new And([f,f]).calc((key: string) => undefined)).toBeTruthy()
    
    expect(new And([t,t,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new And([t,t,f]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new And([t,f,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new And([t,f,f]).calc((key: string) => undefined)).toBeTruthy()
    
    expect(!new And([f,t,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new And([f,t,f]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new And([f,f,t]).calc((key: string) => undefined)).toBeTruthy()
    expect(!new And([f,f,f]).calc((key: string) => undefined)).toBeTruthy()
  })
  it("toJson returns correct json structure", () => {
    expect(new And([t,f]).toJson()).toEqual({
      type: BooleanConditionType.AND,
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
