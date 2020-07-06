
const express = require('express');

const router  = express.Router();
const newKebab = require('../models/kebab');

//------------------------------------------------------get to new kebab form
router.get("/newKebab", (req, res) => {
      res.render("newKebab/index");
});

router.get("/newKebab/show", (req, res) => {
  res.render("newKebab/show");
});

router.get("/newKebab/new", (req, res) => {
  res.render("newKebab/new");
});

router.get("/newKebab/edit", (req, res) => {
  res.render("newKebab/edit");
});

router.get("/newKebab/delete", (req, res) => {
  res.render("newKebab/delete");
});


// ------------------------------------------------------add
  router.post("/newKebab/new", (req, res) => {
    console.log("New kebab added", req.body);
    const {shopName, picture, review, address, coord, comments} = req.body;
    newKebab.create({
        shopName: shopName,
        picture: picture,
        review: review,
        address: address,
        coord: [],
        comments: []

    }).then((kebabmodel) => {
        console.log(`Success! ${shopName} was added to the database.`);
        res.redirect("/profile");
        }).catch((err) => {
        console.log(err);
      })
  })
  
  //------------------------------------------------------delete
  router.post('/newKebab/:id/delete', (req, res, next) => {
    Kebabs.findByIdAndRemove(req.params.id)
      .then(() => {
        res.redirect('/profile');
      })
      .catch(err => {
        console.log(err);
      })
  });

  
  //------------------------------------------------------edit
  router.get('/newKebab/:_id/edit'), (req, res, next) => {
    Kebabs.findOne(req.params._id)
    .then(celebmodel => {
      res.render('/newKebab/edit',{Kebabs: kebabmodel});
    })
    .catch(err => {
      console.log(err);
    })
  };

  //-----------------------------------------------------post edit 
  router.post('/newKebab/:_id/edit', (req, res) => {
    const {shopName, picture, review, address, coord, comments} = req.body;
    const kebabId = req.params._id;
    Celebs.findByIdAndUpdate(kebabId, {
        shopName, picture, review, address, coord, comments
    })
      .then(kebabmodel => {
        res.redirect(`/newKebab/${kebabId}`);
      })
      .catch(err => {
        console.log(err);
      });
  })

// ------------------------------------------------------individual kebab details
router.get("/newKebab/:id", (req, res) => {
  Celebs.findById(req.params.id)
    .then((kebabmodel) => {
      console.log(kebabmodel);
      res.render("newKebab/show", {kebabmodel});
    })
    .catch((err) => {
      console.log(err);
    })
});
  module.exports = router;


