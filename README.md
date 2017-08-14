[![license](https://img.shields.io/github/license/TobitSoftware/chayns-template-angular2.svg)]() [![GitHub pull requests](https://img.shields.io/github/issues-pr/TobitSoftware/chayns-template-angular2.svg)]() [![](https://img.shields.io/github/issues-pr-closed-raw/TobitSoftware/chayns-template-angular2.svg)]()

# chayns-template-angular2

A small and simple template for AngularJS based chayns® tapps.

## Features

- AngularJS with typescript
- webpack
- webpack-dev-server
- scss
- tslint

## Usage

## Install dependencies

```bash
npm install
```

### Run webpack-dev-server

This command starts a dev server listening on port 8081.  
Whenever a change in a project file is made, the server reloads the website.

```bash
npm start
```

If you get an 'Invalid Host header' error when accessing the dev-server from ChaynsWeb, 
append the following to the 'start'-script in 'package.json': ` --public example.org`

```json
"start": "webpack-dev-server --inline --progress --host 0.0.0.0 --port 8081 --public example.org",
```


### Build for production

The whole project will be built, uglified and sourcemaps will be generated.  
The build output will be available after build in `dist/` dir.

```bash
npm run build
```
