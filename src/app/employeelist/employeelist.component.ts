import { Component,Inject  } from '@angular/core';
import { LoginserviceService } from '../../service/loginservice.service';
import { Router} from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component'
import Swal from 'sweetalert2';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSalary'
})
export class FormatSalaryPipe implements PipeTransform {
  transform(value: number): string {
    if (value || value === 0) {
    
      const formattedValue = value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
 
      return formattedValue.replace('IDR', '');
    }
    return '';
  }
}
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  editEmployeeDetails: any = {};
 
  
  pagedItems: any[] = [];
  pageSize: number = 5;
 
  currentPage: number = 1;
  totalPages: number = 1;
  sortAsc: boolean = true;
  searchUsername: string = '';
  searchFirstName: string = '';
  searchLastName: string = '';
  searchBirthDate: string = '';
  sortType: string = ''; 
  selectedItem: any;
  defaultSearchUsername: string = '';
  defaultSearchFirstName: string = '';
  defaultSearchLastName: string = '';
  defaultSearchBirthDate: string = '';
  defaultSortAsc: boolean = true;
  constructor(private employeeService: LoginserviceService,private router: Router,public dialog: MatDialog) {
    const searchData = localStorage.getItem('searchData');
    if (searchData) {
      const searchParams = JSON.parse(searchData);
      this.searchUsername = searchParams.searchUsername;
      this.searchFirstName = searchParams.searchFirstName;
      this.searchLastName = searchParams.searchLastName;
      this.searchBirthDate = searchParams.searchBirthDate;
      this.currentPage = searchParams.currentPage;
      this.pageSize = searchParams.pageSize;
      this.sortAsc = searchParams.sortAsc;
    }
    this.search();
 
    
   
   }
   openDialog(id:number,username:string,firstName:string,lastName:string,email:string,birthDate:any,basicSalary:any,status:string
    ,group:any,description:string) {
      const dialogRef = this.dialog.open(ModalComponent, {
      width: '1050px',
      height:"80vh",
      data: { id: id, username: username ,firstName:firstName,lastName:lastName,email,birthDate,basicSalary:basicSalary,status,group,description,
      
        searchFirstName:this.searchFirstName,searchLastName:this.searchLastName,searchBirthDate:this.searchBirthDate,currentPage:this.currentPage,

        pageSize:this.pageSize,sortAsc:this.sortAsc
      } 
    });
    dialogRef.afterClosed().subscribe(result => {
    
      if (result === true) {
     
        this.search();
      }
    });
  }
  
  ngOnInit(): void {
    
    
   
    
  }
  onDelete(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.deleteEmployee(id);
        
        this.search();
       
      }
    });
  }
  deleteEmployee(id: number): void {

    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        this.search();
        Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
      
      },
      error => {
      
        Swal.fire('Error!', 'Failed to delete data.', 'error');
       
      }
    );
  }

  search(): void {
    this.currentPage = 1; 
    this.loadEmployees( this.searchUsername,
      this.searchFirstName,
      this.searchLastName,
      this.searchBirthDate,
      this.currentPage,
      this.pageSize,
      this.sortType,
      this.sortAsc);
  }


  loadEmployees(
    searchUsername: any,
    searchFirstName: any,
    searchLastName: any,
    searchBirthDate: any,
    currentPage: any,
    pageSize: any,
    sortType: any,
    sortAsc: any
  ): void {
 
    this.employeeService.searchEmployees(
      searchUsername,
      searchFirstName,
      searchLastName,
      searchBirthDate,
      currentPage,
      pageSize,
      sortType,
      sortAsc
    ).subscribe((data: any) => {
      this.totalPages = Math.ceil(data.total / this.pageSize);
      this.pagedItems = data.results.map((item:any) => {
        return {
          ...item,
          basicSalary: item.basicSalary 
        };
      });
    });
    const isFormChanged = this.isFormChanged();

    if (isFormChanged) {
      localStorage.removeItem('searchData')
      
    }
  

  }
  isFormChanged(): boolean {
  
    const isUsernameChanged = this.searchUsername !== this.defaultSearchUsername;
    const isFirstNameChanged = this.searchFirstName !== this.defaultSearchFirstName;
    const isLastNameChanged = this.searchLastName !== this.defaultSearchLastName;
    const isBirthDateChanged = this.searchBirthDate !== this.defaultSearchBirthDate;
    const isSortAscChanged = this.sortAsc !== this.defaultSortAsc;
  
   
    return isUsernameChanged || isFirstNameChanged || isLastNameChanged || isBirthDateChanged || isSortAscChanged;
  }
  
  
  transformBasicSalaryToNumber(formattedValue: string): number {
    
    const numericValue = formattedValue.replace(/\D/g, '');
   
    const truncatedValue = numericValue.slice(0, -2);
   
    return parseFloat(truncatedValue) || 0;
  }

  sortBy(column: string): void {
    this.currentPage = 1; 
 
    this.sortType = column;
  
    this.sortAsc = this.sortType === column ? !this.sortAsc : true;
 
    this.loadEmployees(
      this.searchUsername,
      this.searchFirstName,
      this.searchLastName,
      this.searchBirthDate,
      this.currentPage,
      this.pageSize,
      this.sortType,
      this.sortAsc,
      
    );
  }
  pageSizeChanged(): void {
    this.loadEmployees(this.searchUsername,
      this.searchFirstName,
      this.searchLastName,
      this.searchBirthDate,
      this.currentPage,
      this.pageSize,
      this.sortType,
      this.sortAsc);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadEmployees(this.searchUsername,
        this.searchFirstName,
        this.searchLastName,
        this.searchBirthDate,
        this.currentPage,
        this.pageSize,
        this.sortType,
        this.sortAsc);
    }
  }
  detailEmploy(id:number){
    localStorage.setItem('searchData', JSON.stringify({
      searchUsername: this.searchUsername,
      searchFirstName: this.searchFirstName,
      searchLastName: this.searchLastName,
      searchBirthDate: this.searchBirthDate,
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      sortAsc: this.sortAsc
    }));
    this.router.navigate(['/detail-employee', id]);
  
  }

  
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadEmployees(this.searchUsername,
        this.searchFirstName,
        this.searchLastName,
        this.searchBirthDate,
        this.currentPage,
        this.pageSize,
        this.sortType,
        this.sortAsc);
    }
  }
  goToAddEmployee(): void {
    this.router.navigate(['/add-employee']);
  }
  goToFirstPage(): void {
    this.currentPage = 1;
    this.loadEmployees(
      this.searchUsername,
      this.searchFirstName,
      this.searchLastName,
      this.searchBirthDate,
      this.currentPage,
      this.pageSize,
      this.sortType,
      this.sortAsc
    );
  }
  
  goToLastPage(): void {
    this.currentPage = this.totalPages;
    this.loadEmployees(
      this.searchUsername,
      this.searchFirstName,
      this.searchLastName,
      this.searchBirthDate,
      this.currentPage,
      this.pageSize,
      this.sortType,
      this.sortAsc
    );
  }
  
}
