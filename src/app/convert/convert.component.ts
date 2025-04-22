import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})

export class ConvertComponent {

  valueToConvert: number = 0;
  convertedValue: number = 0;
  conversionText: string = '';

  convertToMeter(): void {
    this.conversionText = ''; // Reset conversion text
    let feet: number = this.valueToConvert; 
    this.convertedValue = feet / 3.28084; 
    this.conversionText = `${feet} fot omvandlades till ${this.convertedValue.toFixed(3)} meter.`;
  }
  convertToFeet(): void {
    this.conversionText = ''; // Reset conversion text
    let meter: number = this.valueToConvert;
    this.convertedValue = meter * 3.28084;
    this.conversionText = `${meter} meter omvandlades till ${this.convertedValue.toFixed(3)} fot.`;
  }

  convertToFahrenheit(): void {
    this.conversionText = ''; // Reset conversion text
    let celsius: number = this.valueToConvert;
    this.convertedValue = (celsius * 9 / 5) + 32; 
    this.conversionText = `${celsius} 🌡︎ Celsius omvandlades till ${this.convertedValue.toFixed(3)} 🌡︎ Fahrenheit.`;
  }

  convertToCelsius(): void {
    this.conversionText = ''; // Reset conversion text
    let fahrenheit: number = this.valueToConvert;
    this.convertedValue = (fahrenheit - 32) * 5 / 9;
    this.conversionText = `${fahrenheit} 🌡︎ Fahrenheit omvandlades till ${this.convertedValue.toFixed(3)} 🌡︎ Celsius.`;
  }
}
