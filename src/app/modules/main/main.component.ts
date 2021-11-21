import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isDeveloper: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  profileChange(){
    this.isDeveloper = !this.isDeveloper
  }

}
