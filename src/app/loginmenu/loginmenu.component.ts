import { Component, } from '@angular/core';
import { Router} from '@angular/router';
import { LoginserviceService } from '../../service/loginservice.service';

@Component({
  selector: 'app-loginmenu',
  templateUrl: './loginmenu.component.html',
  styleUrls: ['./loginmenu.component.css']
})
export class LoginmenuComponent {
  username: string = '';
  password: string = '';
  constructor(private loginService: LoginserviceService,private router: Router) { }
  submit(): void {
    
    this.loginService.login(this.username, this.password)
    .subscribe({
      next: (response) => {
       
        
        this.isLoggin();

     
        
        this.router.navigate(['/home']);
        
      },
      error: (error) => {
      
      
      }
    });
  }

  isLoggin(): boolean {
    
    const token = this.loginService.verifyLogin();
    return token;
    
  }
}
