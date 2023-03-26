import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  view: [number,number] = [900, 400];
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  single = [
    {
      "name": "Territorial",
      "value": 5200
    },
    {
      "name": "Afectivos",
      "value": 1500
    },
    {
      "name": "Alterna",
      "value": 2300
    },
  ];

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
