const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware');


router.get('/', restricted,  (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, user: req.user });
    })
    .catch(error =>
      res.send(error));
})

module.exports = router;