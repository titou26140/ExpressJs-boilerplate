const mongoose = require('mongoose');
const Users = mongoose.model('Users');

// middleware for doing role-based permissions
module.exports = function setUser() {
  return async (request, response, next) => {
    await Users.findById(request.payload.id)
      .then((user) => {
        request.user = user
      });
    next();
  }
}