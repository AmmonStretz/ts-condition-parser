
import { BooleanConditionType } from '../../../math-naming.class';
import { NumberComparator, NumberCondition } from '../../../condition.class';

export class LessEqual extends NumberComparator {
  constructor(left: NumberCondition, right: NumberCondition){
    super(BooleanConditionType.LE, left, right)
  }
  calc(pointer: (key: string) => any): boolean {
    return this.first.calc(pointer) <= this.second.calc(pointer);
  }
  toJson() {
    return {
      type: BooleanConditionType.LE,
      first: this.first.toJson(),
      second: this.second.toJson()
    };
  }
}