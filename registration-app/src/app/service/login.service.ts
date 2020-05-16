import { Injectable } from "@angular/core";
import { APIService } from "./api.service";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {
  loginData: any;
  constructor(private apiService: APIService) {}

  authenticateUser(data: any): Observable<any> {
    debugger;
    this.apiService.authenticateUser(data).subscribe(
      (data) => {
        this.loginData = data;
      },
      (error) => {
        console.log(`Error in Login service${error}`);
      }
    );
    return this.loginData;
  }
}
