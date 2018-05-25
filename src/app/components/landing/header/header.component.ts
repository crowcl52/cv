import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  i = 0;
  txt = 'Desarrollador y Gamer de Nacimiento!!'; /* The text */
  speed = 50; /* The speed/duration of the effect in milliseconds */

  constructor() { }

  ngOnInit() {
    window.onscroll = function() {myFunction()};

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }

    setTimeout(()=>{
      setInterval(()=>{
        if (this.i < this.txt.length) {
          document.getElementById("demo").innerHTML += this.txt.charAt(this.i);
          this.i++;
        }
      },this.speed)
    },1500)
    
  }


}
