import { Component } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-alternate',
  templateUrl: './alternate.component.html',
  styleUrls: ['./alternate.component.css']
})
export class AlternateComponent {

  multi = [
    {
      "name": "Red #1",
      "series": [
        {
          "name": "Promotores",
          "value": 7
        },
        {
          "name": "Promovidos",
          "value": 89
        }
      ]
    },

    {
      "name": "Red #2",
      "series": [
        {
          "name": "Promotores",
          "value": 9
        },
        {
          "name": "Promovidos",
          "value": 120
        }
      ]
    },

    {
      "name": "Red #3",
      "series": [
        {
          "name": "Promotores",
          "value": 10
        },
        {
          "name": "Promovidos",
          "value": 58
        }
      ]
    }
  ];
  view: [number,number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Redes';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Alcance';
  legendTitle: string = 'Campaña';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
    name: '',
    selectable: false,
    group: ScaleType.Linear
  };

  constructor() {
    Object.assign(this.multi )
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
