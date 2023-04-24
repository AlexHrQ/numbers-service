import { Injectable } from '@nestjs/common';

@Injectable()
export class MultiplesService {
  checkNumberMultiples(inputNumber: number): string {
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      return 'GN';
    } else if (inputNumber % 3 === 0) {
      return 'G';
    } else if (inputNumber % 5 === 0) {
      return 'N';
    } else {
      return inputNumber.toString();
    }
  }
}
