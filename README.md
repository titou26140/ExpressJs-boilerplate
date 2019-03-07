# Passport-Tutorial

Node.js authentication tutorial using Passport.js

### Prerequisites

Make sure you have these installed on your machine

* [Node.js](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.com)
* **npm** This comes with Node.js, but make sure you check if you have it anyway

### Installing packages

Install packages

```
npm i
```

### Running the app

To run the app (dev. mode)

```
npm start
```

<<<<<<< HEAD
## Built With

* [Node.js](https://nodejs.org) - The backend framework used
* [Express.js](https://github.com/expressjs/express) - Node.js framework used
* [MongoDB](https://www.mongodb.com/) - Database platform used


## Authors

* **Antonio Erdeljac** - *Initial work* - [Passport-Tutorial](https://github.com/AntonioErdeljac/Blog-Tutorial)

## Acknowledgments

* This was a tutorial for my [Medium article](https://medium.com/p/4a56ed18e81e)
=======
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
>>>>>>> fde769678fc73b3814e479e76607a2a04b69c2d2
