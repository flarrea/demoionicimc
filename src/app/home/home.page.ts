import { Component } from '@angular/core';

import { BmiService } from '../services/bmi.service';
import { BMI } from '../models/bmi.model';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  height: number;
  weight: number;
  BMI: BMI;

  constructor(private bmiService: BmiService) {}

  calculateBmi() {
    this.BMI = this.bmiService.calculateBMI(this.height, this.weight);
  }
}
