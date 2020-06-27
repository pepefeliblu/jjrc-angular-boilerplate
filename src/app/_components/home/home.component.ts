import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public title: string = 'Angular 10';
  public logoSrc: string = './assets/angular_logo.png'

  constructor() { }

  ngOnInit() {
  }

  openOptions() {
  	window.document.getElementById('dashboard-button').click();
  }

}
