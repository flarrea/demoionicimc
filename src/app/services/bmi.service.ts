import { Injectable } from '@angular/core';
import { BMI } from '../models/bmi.model';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  constructor() { }
  calculateBMI(height: number, weight: number) {
    const BMI = weight / height / height;

    return <BMI>{
      BMI: BMI.toFixed(2),
      classification: this.classifyBMI(BMI),
    };
  }

  private classifyBMI(BMI: number) {
    if (BMI < 18.5) {
      return 'faces_negative';
    } else if (BMI > 18.5 && BMI < 24.9) {
      return 'faces_neutral';
    } else if (BMI > 25 && BMI < 29.9) {
      return 'faces_positive';
    } else if (BMI > 30) {
      return 'faces_negative';
    }
  }
}

