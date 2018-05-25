import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var init = "0,1" 
      let fibo = 1, fibo2 = 1,  resultado; 
       
              for(let i = 0; i < 10; i++) {
                  fibo = fibo + fibo2; 
                  fibo2 = fibo - fibo2; 
                  init+= ' , ' + fibo; 
              } 
      console.log(init) ;
      }
}
