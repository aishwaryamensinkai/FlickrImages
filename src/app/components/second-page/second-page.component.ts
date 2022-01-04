import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
})
export class SecondPageComponent implements OnInit {
  foodObj: any;
  ratingForm!: FormGroup;
  ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.foodObj = this.sharedService.getObject();
    this.initForms();
  }
  initForms() {
    this.ratingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    if (this.ratingForm.valid) {
      const obj = { ...this.ratingForm.value, ...this.foodObj };
      this.sharedService.setObject(obj);
      this.router.navigateByUrl('firstpage');
    } else {
      console.log('Invalid Form');
    }
  }
}
