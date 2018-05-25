import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // Radar
    public radarChartLabels:string[] = ['Html/CSS', 'JS/ECS', 'SQL', 'Node/Express', 'Php', 'Python', 'C#'];
 
    public radarChartData:any = [
      {data: [90, 90, 70, 60, 50, 50, 40], label: 'Lenguajes'},
    ];
    public radarChartType:string = 'radar';

    public lineChartColors:Array<any> = [
      { // grey
        // rgb(109,182,201)
        backgroundColor: 'rgba(109,182,201,.2)',
        borderColor: 'rgba(109,182,201,1)',
        pointBackgroundColor: 'rgba(109,182,201,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];

}
