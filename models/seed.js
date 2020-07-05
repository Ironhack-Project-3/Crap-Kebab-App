const mongoose = require("mongoose")
const Kebab = require("../models/Kebab.model")

mongoose.connect(`mongodb://localhost/kebabDb`)

Kebab.collection.drop()

const Kebabs = [

  {
    shopName: "Greasy shot",
    picture: "some link to the image",
    review: 1,
    address: "Lobeckstraße 36-40, 10969 Berlin",
    coord: [{
        long: 13.40,
        lat: 52.52
    }],
    comments: [{
        title: `Horrible title`,
        body: 'Horrible body',
        date: '01.01.20'
    }],
  },

  {
    shopName: "Horse glue",
    picture: "some link to the image",
    review: 1,
    address: "Lobeckstraße 36-40, 10969 Berlin",
    coord: [{
        long: 13.40,
        lat: 52.52
    }],
    comments: [{
        title: `Horrible title`,
        body: 'Horrible body',
        date: '01.01.20'
    }],
  },

  {
    shopName: "Rat's paradise",
    picture: "some link to the image",
    review: 1,
    address: "Lobeckstraße 36-40, 10969 Berlin",
    coord: [{
        long: 13.40,
        lat: 52.52
    }],
    comments: [{
        title: `Horrible title`,
        body: 'Horrible body',
        date: '01.01.20'
    }],
  },

  {
    shopName: "Rubber chew",
    picture: "some link to the image",
    review: 1,
    address: "Lobeckstraße 36-40, 10969 Berlin",
    coord: [{
        long: 13.40,
        lat: 52.52
    }],
    comments: [{
        title: `Horrible title`,
        body: 'Horrible body',
        date: '01.01.20'
    }],
  },

  {
    shopName: "We also serve food",
    picture: "some link to the image",
    review: 1,
    address: "Lobeckstraße 36-40, 10969 Berlin",
    coord: [{
        long: 13.40,
        lat: 52.52
    }],
    comments: [{
        title: `Horrible title`,
        body: 'Horrible body',
        date: '01.01.20'
    }],
  },

]



Kebab
  .create(Kebabs)
  .then(allKebabs => {
    console.log(`Kebab Shop is added`)
    mongoose.connection.close()
      })
      .catch(error => {
          throw new Error(`Kebab shop is not added. ${error}`)
      }) 
