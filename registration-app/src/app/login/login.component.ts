import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      userName: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {}

  signin(loginValue) {
    this.service.authenticateUser(loginValue).subscribe(
      (data) => {
        this.router.navigate(["home"]);
        console.log(data);
      },
      (error) => {
        console.log(`Error is ${error}`);
      }
    );
  }
}
