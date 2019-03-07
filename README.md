# ExpressJs-boilerplate
:rocket: Boilerplate for speed up expressJs development !

## Technologies

- ExpressJs
- Mongoose
- PassportJs

:fire: This boilerplate include some middlewares to handle permissions and set the user in the requests.

## Instalation
This boilerplate use the **yarn** packets manager.
Install dependencies :
```
yarn
```

:warning: Before start the server you have to config your project.
Modify the file **config/constants.js** to set up your project.

## Usage
You can use :
```
node app.js
```

During the development I advise you to use [nodemon](https://github.com/remy/nodemon) to restart the server each time you modify your server.
```
nodemon app.js
```

### :cop: Permit road for one role
```JS
const permit = require ('../../middlewares/permission');

router.get('/', auth.required, permit('Admin'), async (req, res, next) => {
  return res.send("ok !")
});
```

### :man: Set user in request
```JS
const setUser = require('../../middlewares/setUserInRequest')

router.get('/', auth.required, setUser(), async (req, res, next) => {
  return res.send(req.user)
});
```
