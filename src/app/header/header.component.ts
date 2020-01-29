import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title ="Dashboard";
  constructor(private _navigationService: NavigationService) { }

  ngOnInit() {
  }
  
   onMenuClicked(){
    this._navigationService.toggleMenu();
  }

}
