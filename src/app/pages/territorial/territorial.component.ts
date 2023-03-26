import { Component } from '@angular/core';
import { Color, ColorHelper, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-territorial',
  templateUrl: './territorial.component.html',
  styleUrls: ['./territorial.component.css']
})
export class TerritorialComponent {

  single = [
    {
      "name": "Sector #1",
      "value": 89400
    },
    {
      "name": "Sector #2",
      "value": 50000
    },
    {
      "name": "Sector #3",
      "value": 72000
    },
    {
      "name": "Sector #4",
      "value": 45000
    },
    {
      "name": "Sector #5",
      "value": 57300
    },{
      "name": "Sector #6",
      "value": 82000
    }
  ];
  view: [number,number] = [800, 500];
  // options
  gradient: boolean = false;
  animations: boolean = true;

  constructor() {
    Object.assign(this.single);
  }

  onSelect(event: any) {
    console.log(event);
  }

  labelFormatting(c: { label: any; }) {
    return `${(c.label)} Promovidos`;
  }

  colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    name: '',
    selectable: false,
    group: ScaleType.Linear
  };

}
