import { Injectable } from "@angular/core";
import { APIService } from "./api.service";
import { Observable } from "rxjs";

@Injectable()
export class RegisterService {
  loginData: any;
  constructor(private apiService: APIService) {}

  saveUser(data: any): Observable<any> {
    debugger;
    this.apiService.saveUser(data).subscribe(
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
