import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppSelectorService } from '../state/app-state/app.selector.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    loginForm: FormGroup;
    images: Array<{path:string}>;
    showForm: boolean;


    constructor(private router: Router, private formBuilder: FormBuilder,
        private loginSelecSvc: AppSelectorService) {
        this.loginForm = this.formValidation();
        this.images = this.loginSelecSvc.returnImages();
        this.showForm = false;
        
    }

    ngOnInit() {
        this.loginForm = this.formValidation();
    }

    formValidation() {
        return this.formBuilder.group({
            emailId: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    submit() {
        const loginDetails = {
            emailId: this.loginForm.value.emailId,
            password: this.loginForm.value.password
        }
        this.loginSelecSvc.dispatchLoginAction(loginDetails);
    }
}
