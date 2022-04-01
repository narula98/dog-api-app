# Dog Breed application using Vue JS
Dog Breed application is a single page web application which allows the user to browse different dog breeds. It is using open source api: https://dog.ceo/dog-api/. On Dashboard it loads random images of dogs and list of dogs and you can search any dog and there sub breeds. If user selects any dog then it loads all the random images of the dog of that breed.

## Heroku Deployment URL
 https://vue-dog-api.herokuapp.com/

## Basic Features
* List of dog breeds shown with a random image on home page
* When you click on the image it will redirect you to a page containing the images of that particular breed
* When you click on the Dog Breed heading on navigation menu it will always take you to the home page

## Installation of Node Js
* You need to install Node.js in this url: https://nodejs.org/en/download/
* You can check node version with the command node-v


## Installation of Vue CLI
* You should have Node.js before installing Vue/cli
* You can install Vue/cli with the command npm install -g @vue/cli
* You can check vue/cli version with the command vue --version

## Project dependencies
* Bootstrap:  With BootstrapVue we can build responsive, mobile-first projects on the web using Vue.js and the world's most popular front-end CSS library. Please refer url for more details:https://bootstrap-vue.org/
* vue3-pagination: With this api we can insert pagination to the data to avoid endless scrolling. Please refer the below url for more details: https://jasonwatmore.com/post/2019/08/21/vue-js-simple-pagination-example
* Naive Web Components: Naive is a web component library which provides us web components for faster development with beautiful ui. 
    Details: https://www.naiveui.com/en-US/os-theme


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run unit tests
```
npm run test:unit

```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).