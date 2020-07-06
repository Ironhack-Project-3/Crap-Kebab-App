const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

const loginCheck = () => {
  return (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/login');
    }
  }
}
/*
router.get("/celebrities", (req, res) => {
  Celebs.find()
    .then((celebmodel) => {
      console.log(Celebs, celebmodel);
      res.render("celebrities", {
        CelebList: celebmodel
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
*/

router.get('/profile', loginCheck(), (req, res) => {
  console.log('this is the cookie: ', req.cookies);
  console.log('this is the user: ', req.session.user);
  res.render('profile');
})

module.exports = router;