
import { Component,Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginserviceService} from '../../service/loginservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  employeeForm: FormGroup<any> = new FormGroup({}); 
  employeeId?: number;
  group: string[] = [
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
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,private loginService:LoginserviceService
  ) {
    this.employeeForm = this.formBuilder.group({
      username: [data.username, Validators.required],
      firstName: [data.firstName, Validators.required],
      lastName: [data.lastName, Validators.required],
      email: [data.email, Validators.required],
      birthDate: [data.birthDate,[Validators.required, this.validateBirthDate]],
      basicSalary: [data.basicSalary, Validators.required],
      status: [data.status, Validators.required],
      group: [data.group, Validators.required],
      description: [data.description, Validators.required]
    });
  }

  validateBirthDate(control:any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    return selectedDate <= currentDate ? null : { invalidDate: true };
  }

  onClose(): void {
   
    this.dialogRef.close();
  }
  save(): void {
    
    if (this.employeeForm.valid) {
      const updatedEmployee = this.employeeForm.value;
      updatedEmployee.id = this.data.id;
      this.loginService.updateEmployee(updatedEmployee).subscribe(
        () => {
        
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Employee data updated successfully',
            timer: 3000,
            timerProgressBar: true, 
            allowOutsideClick: false,
          })
          this.dialogRef.close(true);
       
        },
        error => {
        
         
        }
      );
    } else {
      
    }
   
  }
}
