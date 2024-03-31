import { Injectable } from '@angular/core';
import { Observable, of ,throwError } from 'rxjs';
import {User} from '../model/user.model'
import {dataEmploy} from '../model/data.model'
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})

 
export class LoginserviceService {
  users: User[] = [
    {
      
      username: "user1",
      password: "password123",
      jwtToken: "",
   
    },
    {
      username: "user2",
      password: "abc123",
      jwtToken: "",
    
    }
  ];
  private employees: dataEmploy[] = [
    {
      "id": 1,
      "username": "user1",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "birthDate": "1990-01-01",
      "basicSalary": 500000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Senior Developer"
    },
    {
      "id": 2,
      "username": "user2",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "birthDate": "1992-05-15",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "HR Manager"
    },
    {
      "id": 3,
      "username": "user2",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "birthDate": "1992-05-15",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "HR Manager"
    },
    {
      "id": 4,
      "username": "user2",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "birthDate": "1992-05-15",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "HR Manager"
    },
    {
      "id": 5,
      "username": "user2",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "birthDate": "1992-05-15",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "HR Manager"
    },
    {
      "id": 6,
      "username": "user2",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "birthDate": "1992-05-15",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "HR Manager"
    },
    {
      "id": 7,
      "username": "user2",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "birthDate": "1992-05-15",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "HR Manager"
    },
    {
      "id": 8,
      "username": "user2",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "birthDate": "1992-05-15",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "HR Manager"
    },
    {
      "id": 9,
      "username": "user2",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "birthDate": "1992-05-15",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "HR Manager"
    },
    {
      "id": 10,
      "username": "user10",
      "firstName": "Matthew",
      "lastName": "Anderson",
      "email": "matthew.anderson@example.com",
      "birthDate": "1990-11-25",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Financial Analyst"
    },
    {
      "id": 11,
      "username": "user11",
      "firstName": "Olivia",
      "lastName": "Walker",
      "email": "olivia.walker@example.com",
      "birthDate": "1993-06-30",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "UI/UX Designer"
    },
    {
      "id": 12,
      "username": "user12",
      "firstName": "Ethan",
      "lastName": "Perez",
      "email": "ethan.perez@example.com",
      "birthDate": "1991-02-15",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Sales Representative"
    },
    {
      "id": 13,
      "username": "user13",
      "firstName": "Isabella",
      "lastName": "Roberts",
      "email": "isabella.roberts@example.com",
      "birthDate": "1989-08-20",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Database Administrator"
    },
    {
      "id": 14,
      "username": "user14",
      "firstName": "James",
      "lastName": "Hernandez",
      "email": "james.hernandez@example.com",
      "birthDate": "1995-04-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Content Writer"
    },
    {
      "id": 15,
      "username": "user15",
      "firstName": "Charlotte",
      "lastName": "Lopez",
      "email": "charlotte.lopez@example.com",
      "birthDate": "1992-10-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Financial Controller"
    },
    {
      "id": 16,
      "username": "user16",
      "firstName": "Benjamin",
      "lastName": "Gonzalez",
      "email": "benjamin.gonzalez@example.com",
      "birthDate": "1994-03-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Network Engineer"
    },
    {
      "id": 17,
      "username": "user17",
      "firstName": "Mia",
      "lastName": "Wilson",
      "email": "mia.wilson@example.com",
      "birthDate": "1988-05-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Logistics Coordinator"
    },
    {
      "id": 18,
      "username": "user18",
      "firstName": "Henry",
      "lastName": "Taylor",
      "email": "henry.taylor@example.com",
      "birthDate": "1993-09-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Human Resources Assistant"
    },
    {
      "id": 19,
      "username": "user19",
      "firstName": "Amelia",
      "lastName": "Thomas",
      "email": "amelia.thomas@example.com",
      "birthDate": "1991-01-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Technical Support Specialist"
    },
    {
      "id": 20,
      "username": "user20",
      "firstName": "Alexander",
      "lastName": "Harris",
      "email": "alexander.harris@example.com",
      "birthDate": "1995-07-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Systems Administrator"
    },
    {
      "id": 20,
      "username": "user20",
      "firstName": "Alexander",
      "lastName": "Harris",
      "email": "alexander.harris@example.com",
      "birthDate": "1995-07-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Systems Administrator"
    },
    {
      "id": 21,
      "username": "user21",
      "firstName": "Grace",
      "lastName": "Scott",
      "email": "grace.scott@example.com",
      "birthDate": "1992-11-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Operations Manager"
    },
    {
      "id": 22,
      "username": "user22",
      "firstName": "Lucas",
      "lastName": "Green",
      "email": "lucas.green@example.com",
      "birthDate": "1989-04-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Business Development Manager"
    },
    {
      "id": 23,
      "username": "user23",
      "firstName": "Lily",
      "lastName": "Adams",
      "email": "lily.adams@example.com",
      "birthDate": "1994-08-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Accountant"
    },
    {
      "id": 24,
      "username": "user24",
      "firstName": "Christopher",
      "lastName": "Baker",
      "email": "christopher.baker@example.com",
      "birthDate": "1991-03-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Customer Service Representative"
    },
    {
      "id": 25,
      "username": "user25",
      "firstName": "Zoe",
      "lastName": "Nelson",
      "email": "zoe.nelson@example.com",
      "birthDate": "1988-06-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Legal Assistant"
    },
    {
      "id": 26,
      "username": "user26",
      "firstName": "Nathan",
      "lastName": "Carter",
      "email": "nathan.carter@example.com",
      "birthDate": "1995-11-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Graphic Designer"
    },
    {
      "id": 27,
      "username": "user27",
      "firstName": "Ava",
      "lastName": "Parker",
      "email": "ava.parker@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Public Relations Specialist"
    },
    {
      "id": 28,
      "username": "user28",
      "firstName": "William",
      "lastName": "Evans",
      "email": "william.evans@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Sales Manager"
    },
    {
      "id": 29,
      "username": "user29",
      "firstName": "Sofia",
      "lastName": "Collins",
      "email": "sofia.collins@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Marketing Coordinator"
    },
    {
      "id": 30,
      "username": "user30",
      "firstName": "Elijah",
      "lastName": "Edwards",
      "email": "elijah.edwards@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Technical Writer"
    },
    {
      "id": 31,
      "username": "user31",
      "firstName": "Madison",
      "lastName": "Morris",
      "email": "madison.morris@example.com",
      "birthDate": "1988-12-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Software Developer"
    },
    {
      "id": 32,
      "username": "user32",
      "firstName": "Jackson",
      "lastName": "James",
      "email": "jackson.james@example.com",
      "birthDate": "1993-06-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Data Scientist"
    },
    {
      "id": 33,
      "username": "user33",
      "firstName": "Chloe",
      "lastName": "Bennett",
      "email": "chloe.bennett@example.com",
      "birthDate": "1990-11-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "IT Manager"
    },
    {
      "id": 34,
      "username": "user34",
      "firstName": "Gabriel",
      "lastName": "Russell",
      "email": "gabriel.russell@example.com",
      "birthDate": "1987-04-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Network Administrator"
    },
    {
      "id": 35,
      "username": "user35",
      "firstName": "Harper",
      "lastName": "Bell",
      "email": "harper.bell@example.com",
      "birthDate": "1994-08-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Customer Support Specialist"
    },
    {
      "id": 36,
      "username": "user36",
      "firstName": "Ryan",
      "lastName": "Hill",
      "email": "ryan.hill@example.com",
      "birthDate": "1991-03-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Business Intelligence Analyst"
    },
    {
      "id": 37,
      "username": "user37",
      "firstName": "Evelyn",
      "lastName": "Gomez",
      "email": "evelyn.gomez@example.com",
      "birthDate": "1988-06-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Operations Coordinator"
    },
    {
      "id": 38,
      "username": "user38",
      "firstName": "David",
      "lastName": "Wood",
      "email": "david.wood@example.com",
      "birthDate": "1995-11-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Financial Analyst"
    },
    {
      "id": 39,
      "username": "user39",
      "firstName": "Avery",
      "lastName": "Perry",
      "email": "avery.perry@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Marketing Analyst"
    },
    {
      "id": 40,
      "username": "user40",
      "firstName": "Victoria",
      "lastName": "Powell",
      "email": "victoria.powell@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Project Coordinator"
    },
    {
      "id": 41,
      "username": "user41",
      "firstName": "Natalie",
      "lastName": "Long",
      "email": "natalie.long@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Administrative Assistant"
    },
    {
      "id": 42,
      "username": "user42",
      "firstName": "Julian",
      "lastName": "Reed",
      "email": "julian.reed@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Digital Marketing Specialist"
    },
    {
      "id": 43,
      "username": "user43",
      "firstName": "Brooklyn",
      "lastName": "Sanders",
      "email": "brooklyn.sanders@example.com",
      "birthDate": "1988-12-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Business Analyst"
    },
    {
      "id": 44,
      "username": "user44",
      "firstName": "Christopher",
      "lastName": "Price",
      "email": "christopher.price@example.com",
      "birthDate": "1993-06-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Quality Assurance Analyst"
    },
    {
      "id": 45,
      "username": "user45",
      "firstName": "Samantha",
      "lastName": "Scott",
      "email": "samantha.scott@example.com",
      "birthDate": "1990-11-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Operations Analyst"
    },
    {
      "id": 46,
      "username": "user46",
      "firstName": "Jonathan",
      "lastName": "Ramirez",
      "email": "jonathan.ramirez@example.com",
      "birthDate": "1987-04-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Systems Engineer"
    },
    {
      "id": 47,
      "username": "user47",
      "firstName": "Hailey",
      "lastName": "Peterson",
      "email": "hailey.peterson@example.com",
      "birthDate": "1994-08-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Technical Project Manager"
    },
    {
      "id": 48,
      "username": "user48",
      "firstName": "Dylan",
      "lastName": "Foster",
      "email": "dylan.foster@example.com",
      "birthDate": "1991-03-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "UI/UX Developer"
    },
    {
      "id": 49,
      "username": "user49",
      "firstName": "Katherine",
      "lastName": "Simmons",
      "email": "katherine.simmons@example.com",
      "birthDate": "1988-06-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Customer Success Manager"
    },
    {
      "id": 50,
      "username": "user50",
      "firstName": "Nicholas",
      "lastName": "Butler",
      "email": "nicholas.butler@example.com",
      "birthDate": "1995-11-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Product Marketing Manager"
    },
    {
      "id": 51,
      "username": "user51",
      "firstName": "Elizabeth",
      "lastName": "Ward",
      "email": "elizabeth.ward@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Financial Analyst"
    },
    {
      "id": 52,
      "username": "user52",
      "firstName": "Christian",
      "lastName": "Griffin",
      "email": "christian.griffin@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Operations Manager"
    },
    {
      "id": 53,
      "username": "user53",
      "firstName": "Mila",
      "lastName": "Kennedy",
      "email": "mila.kennedy@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Business Development Manager"
    },
    {
      "id": 54,
      "username": "user54",
      "firstName": "Connor",
      "lastName": "Mills",
      "email": "connor.mills@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Account Manager"
    },
    {
      "id": 55,
      "username": "user55",
      "firstName": "Lillian",
      "lastName": "Warren",
      "email": "lillian.warren@example.com",
      "birthDate": "1988-12-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Data Analyst"
    },
    {
      "id": 56,
      "username": "user56",
      "firstName": "Carter",
      "lastName": "Grant",
      "email": "carter.grant@example.com",
      "birthDate": "1995-11-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Marketing Analyst"
    },
    {
      "id": 57,
      "username": "user57",
      "firstName": "Addison",
      "lastName": "West",
      "email": "addison.west@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Operations Analyst"
    },
    {
      "id": 58,
      "username": "user58",
      "firstName": "Eli",
      "lastName": "Diaz",
      "email": "eli.diaz@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Systems Engineer"
    },
    {
      "id": 59,
      "username": "user59",
      "firstName": "Paisley",
      "lastName": "Griffin",
      "email": "paisley.griffin@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Technical Project Manager"
    },
    {
      "id": 60,
      "username": "user60",
      "firstName": "Grayson",
      "lastName": "Henderson",
      "email": "grayson.henderson@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "UI/UX Developer"
    },
    {
      "id": 61,
      "username": "user61",
      "firstName": "Zoey",
      "lastName": "Henry",
      "email": "zoey.henry@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Business Analyst"
    },
    {
      "id": 62,
      "username": "user62",
      "firstName": "Brody",
      "lastName": "Morrison",
      "email": "brody.morrison@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Product Manager"
    },
    {
      "id": 63,
      "username": "user63",
      "firstName": "Penelope",
      "lastName": "Woods",
      "email": "penelope.woods@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "HR Generalist"
    },
    {
      "id": 64,
      "username": "user64",
      "firstName": "Leo",
      "lastName": "Wheeler",
      "email": "leo.wheeler@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Software Engineer"
    },
    {
      "id": 65,
      "username": "user65",
      "firstName": "Hazel",
      "lastName": "Andrews",
      "email": "hazel.andrews@example.com",
      "birthDate": "1988-12-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "UX Designer"
    },
    {
      "id": 66,
      "username": "user66",
      "firstName": "Elias",
      "lastName": "Reynolds",
      "email": "elias.reynolds@example.com",
      "birthDate": "1995-11-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Customer Support Manager"
    },
    {
      "id": 67,
      "username": "user67",
      "firstName": "Alice",
      "lastName": "Spencer",
      "email": "alice.spencer@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Marketing Manager"
    },
    {
      "id": 68,
      "username": "user68",
      "firstName": "Theodore",
      "lastName": "Griffith",
      "email": "theodore.griffith@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Financial Analyst"
    },
    {
      "id": 69,
      "username": "user69",
      "firstName": "Luna",
      "lastName": "Gregory",
      "email": "luna.gregory@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Supply Chain Manager"
    },
    {
      "id": 70,
      "username": "user70",
      "firstName": "Mateo",
      "lastName": "Montgomery",
      "email": "mateo.montgomery@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Project Manager"
    },
    {
      "id": 71,
      "username": "user71",
      "firstName": "Adeline",
      "lastName": "Keller",
      "email": "adeline.keller@example.com",
      "birthDate": "1988-12-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Business Intelligence Analyst"
    },
    {
      "id": 72,
      "username": "user72",
      "firstName": "Ryder",
      "lastName": "Floyd",
      "email": "ryder.floyd@example.com",
      "birthDate": "1995-11-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Operations Manager"
    },
    {
      "id": 73,
      "username": "user73",
      "firstName": "Margaret",
      "lastName": "Dean",
      "email": "margaret.dean@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Customer Service Manager"
    },
    {
      "id": 74,
      "username": "user74",
      "firstName": "Silas",
      "lastName": "Sullivan",
      "email": "silas.sullivan@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Product Analyst"
    },
    {
      "id": 75,
      "username": "user75",
      "firstName": "June",
      "lastName": "Matthews",
      "email": "june.matthews@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "HR Coordinator"
    },
    {
      "id": 76,
      "username": "user76",
      "firstName": "Maverick",
      "lastName": "Owens",
      "email": "maverick.owens@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Business Development Manager"
    },
    {
      "id": 77,
      "username": "user77",
      "firstName": "Gemma",
      "lastName": "Lawson",
      "email": "gemma.lawson@example.com",
      "birthDate": "1988-12-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Marketing Coordinator"
    },
    {
      "id": 78,
      "username": "user78",
      "firstName": "Milo",
      "lastName": "Simmons",
      "email": "milo.simmons@example.com",
      "birthDate": "1995-11-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Financial Analyst"
    },
    {
      "id": 79,
      "username": "user79",
      "firstName": "Juliette",
      "lastName": "Porter",
      "email": "juliette.porter@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Operations Manager"
    },
    {
      "id": 80,
      "username": "user80",
      "firstName": "Rowan",
      "lastName": "Hunter",
      "email": "rowan.hunter@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Sales Manager"
    },
    {
      "id": 81,
      "username": "user81",
      "firstName": "Evangeline",
      "lastName": "Chapman",
      "email": "evangeline.chapman@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Technical Support Engineer"
    },
    {
      "id": 82,
      "username": "user82",
      "firstName": "Phoenix",
      "lastName": "Harvey",
      "email": "phoenix.harvey@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Software Developer"
    },
    {
      "id": 83,
      "username": "user83",
      "firstName": "Ivy",
      "lastName": "Franklin",
      "email": "ivy.franklin@example.com",
      "birthDate": "1988-12-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Data Scientist"
    },
    {
      "id": 84,
      "username": "user84",
      "firstName": "Jasper",
      "lastName": "Lucas",
      "email": "jasper.lucas@example.com",
      "birthDate": "1995-11-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Quality Assurance Engineer"
    },
    {
      "id": 85,
      "username": "user85",
      "firstName": "Seraphina",
      "lastName": "Morgan",
      "email": "seraphina.morgan@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Business Development Executive"
    },
    {
      "id": 86,
      "username": "user86",
      "firstName": "Finn",
      "lastName": "Oliver",
      "email": "finn.oliver@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Product Owner"
    },
    {
      "id": 87,
      "username": "user87",
      "firstName": "Aria",
      "lastName": "Sparks",
      "email": "aria.sparks@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Network Engineer"
    },
    {
      "id": 88,
      "username": "user88",
      "firstName": "Declan",
      "lastName": "Fletcher",
      "email": "declan.fletcher@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Systems Analyst"
    },
    {
      "id": 89,
      "username": "user89",
      "firstName": "Lyla",
      "lastName": "Bishop",
      "email": "lyla.bishop@example.com",
      "birthDate": "1988-12-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Digital Marketing Manager"
    },
    {
      "id": 90,
      "username": "user90",
      "firstName": "Asher",
      "lastName": "Mckenzie",
      "email": "asher.mckenzie@example.com",
      "birthDate": "1995-11-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Customer Support Engineer"
    },
    {
      "id": 91,
      "username": "user91",
      "firstName": "Nova",
      "lastName": "Mcdonald",
      "email": "nova.mcdonald@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Project Coordinator"
    },
    {
      "id": 92,
      "username": "user92",
      "firstName": "Atticus",
      "lastName": "Wallace",
      "email": "atticus.wallace@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Operations Manager"
    },
    {
      "id": 93,
      "username": "user93",
      "firstName": "Amara",
      "lastName": "Garza",
      "email": "amara.garza@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Financial Analyst"
    },
    {
      "id": 94,
      "username": "user94",
      "firstName": "Ezekiel",
      "lastName": "Vaughn",
      "email": "ezekiel.vaughn@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Technical Support Specialist"
    },
    {
      "id": 95,
      "username": "user95",
      "firstName": "Elara",
      "lastName": "Waters",
      "email": "elara.waters@example.com",
      "birthDate": "1988-12-30",
      "basicSalary": 62000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Sales Coordinator"
    },
    {
      "id": 96,
      "username": "user96",
      "firstName": "Cassian",
      "lastName": "Logan",
      "email": "cassian.logan@example.com",
      "birthDate": "1995-11-05",
      "basicSalary": 58000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "Business Analyst"
    },
    {
      "id": 97,
      "username": "user97",
      "firstName": "Lyra",
      "lastName": "Bush",
      "email": "lyra.bush@example.com",
      "birthDate": "1992-04-10",
      "basicSalary": 70000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "IT Manager"
    },
    {
      "id": 98,
      "username": "user98",
      "firstName": "Caspian",
      "lastName": "Shepherd",
      "email": "caspian.shepherd@example.com",
      "birthDate": "1989-09-15",
      "basicSalary": 65000.00,
      "status": "Active",
      "group": "Group 1",
      "description": "Marketing Analyst"
    },
    {
      "id": 99,
      "username": "user99",
      "firstName": "Cora",
      "lastName": "Morrison",
      "email": "cora.morrison@example.com",
      "birthDate": "1994-02-20",
      "basicSalary": 60000.00,
      "status": "Active",
      "group": "Group 3",
      "description": "HR Manager"
    },
    {
      "id": 100,
      "username": "user100",
      "firstName": "Atlas",
      "lastName": "Stone",
      "email": "atlas.stone@example.com",
      "birthDate": "1991-07-25",
      "basicSalary": 55000.00,
      "status": "Active",
      "group": "Group 2",
      "description": "Operations Analyst"
    }
  
  ];

  constructor() { }


  getAllEmployees(): Observable<any[]> {
    return of(this.employees);
  }


  searchEmployees(
    username: string,
    firstName: string,
    lastName: string,
    birthDate: string,
    currentPage: number,
    pageSize: number,
    sortType: string,
    sortAsc: boolean
  ): Observable<any> {
    

    const updatedEmployees = this.employees;
    let filteredEmployees = updatedEmployees.filter(employee => {
      return (
        employee.username.toLowerCase().includes(username.toLowerCase()) &&
        employee.firstName.toLowerCase().includes(firstName.toLowerCase()) &&
        employee.lastName.toLowerCase().includes(lastName.toLowerCase()) &&
        (birthDate === '' || employee.birthDate === birthDate)
      );
    });


    filteredEmployees.sort((a, b) => {
      
      let A, B;
      switch (sortType) { 
        case 'username':
          A = a.username.toUpperCase();
          B = b.username.toUpperCase();
          break;
        case 'firstName':
          A = a.firstName.toUpperCase();
          B = b.firstName.toUpperCase();
          break;
        case 'lastName':
          A = a.lastName.toUpperCase();
          B = b.lastName.toUpperCase();
          break;
        case 'email':
          A = a.email.toUpperCase();
          B = b.email.toUpperCase();
          break;
        case 'birthDate':
          A = a.birthDate.toUpperCase();
          B = b.birthDate.toUpperCase();
          break;
        case 'basicSalary':
          A = a.basicSalary;
          B = b.basicSalary;
          break;
        case 'status':
          A = a.status.toUpperCase();
          B = b.status.toUpperCase();
          break;
        case 'group':
          A = a.group.toUpperCase();
          B = b.group.toUpperCase();
          break;
        case 'description':
          A = a.description.toUpperCase();
          B = b.description.toUpperCase();
          break;
        default:
          A = '';
          B = '';
      }
      let resaultSort = 0;
      if (A > B) {
        resaultSort = 1;
      } else if (A < B) {
        resaultSort = -1;
      }
      return sortAsc ? resaultSort : -resaultSort;
    });

   
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);
    const results = filteredEmployees.slice(startIndex, endIndex);

    return of({ total: filteredEmployees.length, results: results });
  }
 
  login(username: string, password: string): Observable<boolean> {
    
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      const token =this.generateRandomToken()
      localStorage.setItem('token',token);
      localStorage.setItem('usrInfo', JSON.stringify(username));
      return of(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Invalid Password or Email',
        timer: 3000, 
          timerProgressBar: true, 
          allowOutsideClick: false,
      });
      return of(false); 
    }
  }
  getEmployeeById(id: any): Observable<any> {
    const employee = this.employees.find(emp => emp.id === id);
    return of(employee);
  }
  generateRandomToken(): string {
   
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tokenLength = 30;
    let token = '';
    for (let i = 0; i < tokenLength; i++) {
      token += character.charAt(Math.floor(Math.random() * character.length));
    }
    return token;
  }
  verifyLogin(): boolean {
 
   
    return localStorage.getItem('token') !== null;
  }


  updateEmployee(updatedEmployee: any): Observable<any> {
    
    const index = this.employees.findIndex(employee => employee.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = { ...updatedEmployee };
   
     

      return of('Employee updated successfully');
    } else {
      return throwError('Employee not found');
    }
  }

  deleteEmployee(id: any): Observable<any> {
    const index = this.employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1); 
      return of('Employee deleted successfully');
    } else {
      return throwError('Employee not found');
    }
  }
  addEmployee(newEmployee: any): Observable<any> {
    
    const lastEmployee = this.employees[this.employees.length - 1];
    const newId = lastEmployee.id + 1;

   
    newEmployee.id = newId;

    
    this.employees.push(newEmployee);

    
    return of(newEmployee);
  }
}
