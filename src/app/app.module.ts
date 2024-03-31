import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginmenuComponent } from './loginmenu/loginmenu.component';
import { FormsModule } from '@angular/forms';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatSliderModule } from '@angular/material/slider'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EmloyeeaddComponent } from './emloyeeadd/emloyeeadd.component';
import { CurrencyPipe } from '@angular/common'; 
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { DetailemployeeComponent } from './detailemployee/detailemployee.component';
import { MatMenuModule } from '@angular/material/menu';
import { FormatSalaryPipe } from '../app/employeelist/employeelist.component';
import { MatListModule } from '@angular/material/list';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    AppComponent,
    LoginmenuComponent,
    EmployeelistComponent,
    EmloyeeaddComponent,
    ModalComponent,
    DetailemployeeComponent,
    FormatSalaryPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
     MatDialogModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatListModule,
    NgSelectModule
  ],
  exports: [
    FormatSalaryPipe 
  ],
  providers: [ CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
