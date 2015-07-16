# generator-parata
Yeoman generator for [parata](https://github.com/cybrilla/parata).

## Installation
---
Make sure you have [GruntJS](http://gruntjs.com) and [Yeoman](http://yeoman.io/) installed globally. Refer the respective documentation for installing the same.

TODO:
Write the appropriate npm command.

## Usage

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

#### Generate a component

`$ yo parata:component button`

This will create the following files and directories:
```
- myapp
  - components
    - button
      - style.scss / style.less
      - example.html
....
....
```
