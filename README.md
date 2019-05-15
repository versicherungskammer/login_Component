# login

Login is a frontend webcomponent for login.
You simply load a javascriptfile and use a tag (my-login) to get the login. There a examples and also an example backend inluded in this 
repository.

If you simply wnat to use it You only need to download one file :  app.js from the dist folder.
An example for the usage is in the index.html in the dist folder.



###Testserver

```
cd attic
yarn install
cd server
node server.js
```

A Testserver is running on port 9001. This server exposes the url /login as post which accepts username and password in json and returns a status and a jwt token. This server is not for production. To run the demo the server must run.


###The frontend Webcomponent
The frontend is an example plain vanilla javascript in an demo.html file which uses the login.
to start it go to the dist directory and fire up the ```http-server```
Now go to your browser and enter localhost:8081


##Minimalzo
Just download app.js from dist-folder and put it your html file.

##Configuration
To configure the login you can set params.

| parameter     | sense                | example                       |
| ------------- |:--------------------:| -----------------------------:|
| backend       | uri retruns the token| backend='localhost:9001/login'|
| register      | switch for register  |                               |
|               | not yet implemented  | register='true'               |
| locStore      | writes the jwt token | locStore= 'false'             |
|               | not yet implemented  |                               |

###CSS Configuration
The css has a default configuration which is the mdc (material webcomponents) basis.
[material-componens](https://material-components.github.io/material-components-web-catalog/#/)
It can be customized to your needs by overwirting the classes in your own file. 
To do this You have to checkout the project, setup it, change the public/individual.css (referenece to another file) and compile it.

Within that file you can overwrite all css classes defined in the mdc-Components by adding a double-dash before the classname adn sourround ist in a component name block. (For detailes see file public/individual_styles.css.

##The communication with your application

The loginComponent emits a message wether the login succeeded or not.
If ok it emit the content of the jwt - token as hash (Whatever the auth server putted in the token). Look at the index.html in the dist folder, there is vanilla js code which caches the event.
Additionally it stores the token on the localStorage

## The Backend
What You need is a backend  In this LoginFrontend a Testbackend is included which You can use as guideline. 

The login frontend expects a 403 if the login is denied.
or a status 200 when the access is passed.


# Howto build a WebComponent in VUE

You have to consider two steps 

## Frist wrap the component in a Custom Component Wrapper.

```
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Login from './components/Login.vue';

Vue.config.productionTip = false;
const CustomElement = wrap(Vue, Login);
window.customElements.define('my-login', CustomElement);
```

the url has to have a slash in the name example :   my-login your-wrapper  

## Second build the js Files via vue-cli-service

```
vue-cli-service build --target wc --name my-login src/main.ts
```

The result is in Your dist Folder a demo.html where the the webcomponent is called.
For the basic You need from a cdn vue which is also referenced in the demo.html

Thats all to do.



# The Concept of a general css - management

to be written





