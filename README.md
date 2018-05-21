# Barcode Generator

[UNICEF](http://www.unicef.org)´s barcode generator is a simple web app that
helps UNICEF´s suppliers to ship packages with a standardised barcode label.

The current status of this project is: **Work in progress. It is not ready for production use yet.**

Live version: **[Generate barcodes](http://unicef.github.io/barcode-generator)**

Setting your own development environment:

## Requirements

* NodeJS ready environment (https://nodejs.org/en/)
* Angular CLI (once you have NodeJS environment run in a terminal `npm install @angular/cli` )

## Run development server

First install dependencies.

```
npm install
```

Launch a development server:

```
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build and `--base-href` to set the base tag (`<base href="/">`) in your index.html.

```
# Example build to deploy in GitHub

$ ng build --prod --base-href /barcode-generator/
```

More info about `ng build` in [angular-cli Wiki](https://github.com/angular/angular-cli/wiki/build)


## Running unit tests (TODO)

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests (TODO)

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


# License

Distributed under MIT License.

Copyright 2018 UNICEF. Developed by Solutions Centre and Support @ ICT Division

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
