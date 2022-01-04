import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlickrService } from 'src/app/services/flickr.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  images: any[] = [];
  keyword!: string;
  ratingObj: any;

  constructor(
    private flickrService: FlickrService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.keyword = 'noodles food';
    this.flickrService.getPhotos(this.keyword).subscribe((data) => {
      this.images = data;
    });
    this.ratingObj = this.sharedService.getObject();
    console.log(this.ratingObj);
  }

  routing(image: any) {
    this.sharedService.setObject(image);
    this.router.navigateByUrl('secondpage');
  }
}
