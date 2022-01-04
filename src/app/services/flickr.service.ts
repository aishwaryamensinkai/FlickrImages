import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FlickrOutput } from '../models/flickr-output.model';
import { FlickrPhoto } from '../models/flickr-photo.model';

@Injectable({
  providedIn: 'root',
})
export class FlickrService {
  currPage = 1;
  extras = 'description';
  constructor(private http: HttpClient) {}
  getPhotos(keyword: string) {
    const url = environment.url;
    const params = `api_key=${environment.api_key}&text=${keyword}&tag=${keyword}&extras=${this.extras}&format=json&nojsoncallback=1`;
    return this.http.get<FlickrOutput>(url + params).pipe(
      map((res: FlickrOutput) => {
        const urlArr: any[] = [];
        res.photos.photo.forEach((ph: FlickrPhoto) => {
          const photoObj = {
            url: `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
            title: ph.title,
            description: ph.description,
          };
          urlArr.push(photoObj);
        });
        return urlArr;
      })
    );
  }
}
