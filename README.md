## Problem Statement
Tech Stack to be used - Angular 10+. Create a responsive web app for reviewing Flickr images. The application would consist of two pages.
In the first page, pull the latest 30 food images from Flickr using Flickr API and display in a grid format. By clicking on any of the images, the user should be redirected to a new page. 
In the new page, display the information of clicked image (like image, name, description) and provide a form to add a review. 
The review form will have the below fields
  1. Rating (1 to 10 stars, you can use radio buttons to take this input)
  2. Rating provided by
  3. Reason for the rating

Once the user provides the review, the user should be redirected to the main page and the rating should be displayed along with the image.

# FlickrImages

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# FlickrImages

## Deployment Steps
1. Install : using npm i angular-cli-ghpages --save-dev
2. Run Build : ng build --prod --base-href "https://GithubUserName.github.io/GithubRepoName/"  (ng build --prod --base-href "https://aishwaryamensinkai.github.io/FlickrImages/")
3. Deploy to gh-pages: npx angular-cli-ghpages --dir=dist/flickr-images

## Deployed Link
https://aishwaryamensinkai.github.io/FlickrImages/firstpage
