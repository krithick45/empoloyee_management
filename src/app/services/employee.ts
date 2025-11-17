import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  http = inject(HttpClient);



  onLogin(data: any) {
    return this.http.post('  https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login', data);
  }

}
