import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {LoginserviceService} from '../../service/loginservice.service'

@Component({
  selector: 'app-emloyeeadd',
  templateUrl: './emloyeeadd.component.html',
  styleUrls: ['./emloyeeadd.component.css']
})
export class EmloyeeaddComponent implements OnInit {
  employeeForm: FormGroup<any> = new FormGroup({}); 
  amount:any;
  dummyGroups: string[] = [
    'Group 1',
    'Group 2',
    'Group 3',
    'Group 4',
    'Group 5',
    'Group 6',
    'Group 7',
    'Group 8',
    'Group 9',
    'Group 10'
  ];
 
  constructor(private formBuilder: FormBuilder, private router: Router,private loginService:LoginserviceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.employeeForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required, this.validateBirthDate]],
      status: ['',Validators.required],
      basicSalary: ['', [Validators.required]],
      group: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  filterGroups(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.dummyGroups.filter(group => group.toLowerCase().includes(filterValue));
  }

  validateBirthDate(control:any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    return selectedDate <= currentDate ? null : { invalidDate: true };
  }



  onCancel(): void {
  

    this.router.navigate(['/home']);
  }
  addEmployee(): void {
    if (this.employeeForm.valid) {
      const newEmployee = this.employeeForm.value;

      this.loginService.addEmployee(newEmployee).subscribe(
        (result) => {
        
          this.employeeForm.reset();
          // this.router.navigate(['/home']);
         
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'New employee has been added successfully!',
            timer: 3000, 
            timerProgressBar: true, 
          })
        },
        (error) => {
        
       
        }
      );
    } else {
     
    
    }
  }
}
