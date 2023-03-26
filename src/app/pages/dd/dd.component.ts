import { Component } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent {

  single = [
    {
      "name": "Territoral",
      "value": 11700
    },
    {
      "name": "Afectiva",
      "value": 800
    },
    {
      "name": "Alterna",
      "value": 4500
    }
  ];

  view: [number,number] = [500, 400];

  legend: boolean = true;

  legendPosition: any = 'below';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: '',
    selectable: true,
    group: ScaleType.Time
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
