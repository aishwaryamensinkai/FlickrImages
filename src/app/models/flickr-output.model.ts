import { FlickrPhoto } from './flickr-photo.model';

export interface FlickrOutput {
  photos: {
    photo: FlickrPhoto[];
  };
}
