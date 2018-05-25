import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  topFunction() {
      document.body.scrollTop = document.body.scrollHeight; // For Safari
      document.documentElement.scrollTop = document.body.scrollHeight; // For Chrome, Firefox, IE and Opera
  }


}
