import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  isPrime: boolean;
  capitalCount: number;

  constructor(
    private numberService: NumberService,
    private stringService: StringService
  )
{
  this.isPrime = this.numberService.ChkPrime(13);
  this.capitalCount = this.stringService.CountCapital('Marvellous Infosystem');
}
}
