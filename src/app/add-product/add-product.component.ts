import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  userForm: FormGroup;
  
  constructor(private fb: FormBuilder,private readonly router: Router) { 
    this.initForm();
  }

  ngOnInit() {
  }
  addProduct(){
  this.router.navigateByUrl('/products');
  }
  initForm() {
  this.userForm = this.fb.group({
      inputFC: ['', Validators.required,],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern(/((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})/)])],

    });
  }

}
