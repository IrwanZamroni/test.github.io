import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../../service/loginservice.service';
import Swal from 'sweetalert2';
import { Router} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.css']
})
export class DetailemployeeComponent {
  id: any;
  employee: any; 
  currentUrl?: string;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginserviceService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.id = +idParam;
        this.loginService.getEmployeeById(this.id).subscribe(employee => {
          this.employee = employee;
          if (!this.employee) {
            Swal.fire({
              icon: 'error',
              title: 'Employee Not Found',
              text: 'The employee you are trying to access does not exist.Please select the employee details button in the employee list menu',
              confirmButtonText: 'OK',
              timer: 3000, 
              timerProgressBar: true, 
            });
          }
        });
      } else {
     
      }
    });
  }

  directhome(){
    this.router.navigate(['/home']);
  }
}
