const mongoose = require('mongoose');
const Users = mongoose.model('Users');

// middleware for doing role-based permissions
module.exports =  function permit(...allowed) {
  return async (request, response, next) => {
    let pass = false;
    await Users.findById(request.payload.id)
      .then((user) => {
        if (user && user.roles.some(r => allowed.includes(r))) {
          pass = true;
        }
      });
      if (pass) {
        next();
      } else {
        response.status(403).json({ message: "Forbidden" }); // user is forbidden
      }
  }
}