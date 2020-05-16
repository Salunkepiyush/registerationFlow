import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class APIService {
  baseurl = "http://localhost:3000";
  constructor(private http: HttpClient) {}
  authenticateUser(loginData: any): Observable<any> {
    return this.http
      .post(this.baseurl + "/user/authenticate", loginData)
      .pipe(catchError((error) => of(this.handleError(error))));
  }
  saveUser(user: any): Observable<any> {
    return this.http
      .post(this.baseurl + "/user", user)
      .pipe(catchError((error) => of(this.handleError(error))));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("An error occurred:", error.error.message);
    } else {
      console.log(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(error);
  }
}
