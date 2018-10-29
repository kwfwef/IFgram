import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {
    if (localStorage.getItem('tema')) {
      this.tema = localStorage.getItem('tema');
    } 
  }

  showMenu:boolean = true;
  tema:string ='#5155b2';

  showhidden()
  {
    this.showMenu = !this.showMenu;
  }

  alteraTema()
  {
    if (localStorage.getItem('tema') == '#00ad4c') {
      localStorage.setItem('tema','#5155b2');
      this.tema = localStorage.getItem('tema');
      
    } else {
      localStorage.setItem('tema','#00ad4c');
      this.tema = localStorage.getItem('tema');
    }
    
  }

}
