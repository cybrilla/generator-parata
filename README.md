# generator-parata

[![Code Climate](https://codeclimate.com/github/cybrilla/generator-parata/badges/gpa.svg)](https://codeclimate.com/github/cybrilla/generator-parata)
[![Circle CI](https://circleci.com/gh/cybrilla/generator-parata.svg?style=svg)](https://circleci.com/gh/cybrilla/generator-parata)
[![Stories in Ready](https://badge.waffle.io/cybrilla/generator-parata.png?label=ready&title=Ready)](https://waffle.io/cybrilla/generator-parata)

Yeoman generator for [parata](https://github.com/cybrilla/parata).

## Installation
---
Make sure you have [GruntJS](http://gruntjs.com) and [Yeoman](http://yeoman.io/) installed globally. Refer the respective documentation for installing the same.

Install `generator-parata` by using:

`$ npm install -g generator-parata`

## Usage
---
#### Setup your application
Create a directory of your choice say:

`$ mkdir myapp && cd $_`

Run the yeoman generator by typing:

`$ yo parata`

Select your preferred options and finish the setup. Once you have finished running the above command your directory will look like this:
```
- myapp
    - package.json
    - Gruntfile.js
```

#### Create your first component

Let's say you would like to create a `button` component. Run the generator for creating the button component:

`$ yo parata:component button`

where., `button` is the name of your component.

This would generate two files in `components/button/` called:
```
- myapp
  - components
    - button
      - example.html
      - style.scss
....
```

Note: If you were using `less` it would have created a file called: `components/button/style.less`

#### Build & Serve

Run `$ grunt parata --build` for building the components
Run `$ grunt server` and point to `http://localhost:8888` on your browser.

Regarding configuration options for `parata`, refer to https://github.com/cybrilla/parata.
