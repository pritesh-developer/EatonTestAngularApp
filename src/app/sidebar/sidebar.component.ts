import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import {NavigationService} from '../services/navigation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   
  open = false;
  userMenu = false;
  constructor(_navigationService: NavigationService,  changeDetectorRef: ChangeDetectorRef) {
     _navigationService.navToggled$.subscribe(
        value => {
          this.open = !this.open;
          changeDetectorRef.detectChanges();
        }
      );
  }

  ngOnInit() {
  }

}
