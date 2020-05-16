import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterService } from "../service/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  providers: [RegisterService],
})
export class RegisterComponent {
  registerForm: FormGroup;
  message: string = "This field is required";
  constructor(private fb: FormBuilder, private service: RegisterService) {
    this.registerForm = fb.group({
      userName: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }
  signin(loginValue) {
    this.service.saveUser(loginValue).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(`Error is ${error}`);
      }
    );
  }
}
