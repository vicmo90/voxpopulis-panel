import { Component } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-affective',
  templateUrl: './affective.component.html',
  styleUrls: ['./affective.component.css']
})
export class AffectiveComponent {

  single = [
    {
      "name": "Promotor #1",
      "value": 84
    },
    {
      "name": "Promotor #2",
      "value": 40
    },
    {
      "name": "Promotor #3",
      "value": 55
    },
    {
      "name": "Promotor #4",
      "value": 112
    },
    {
      "name": "Promotor #5",
      "value": 172
    },
    {
      "name": "Promotor #6",
      "value": 77
    },
    {
      "name": "Promotor #7",
      "value": 11
    }
  ];
  view: [number,number] = [900, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Promotores';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Promovidos';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: '',
    selectable: true,
    group: ScaleType.Linear
  };

  constructor() {
    Object.assign(this.single);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
