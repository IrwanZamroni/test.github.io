import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username?:any;
  constructor(private router: Router) {
   
    this.username = JSON.parse(localStorage.getItem('usrInfo') || '{}');

   

  }

  
  isRootRoute(): boolean {
    return this.router.url === '/authentication/login';
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
 
    isDropdownOpen: boolean = false;
  
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
 
  
}

