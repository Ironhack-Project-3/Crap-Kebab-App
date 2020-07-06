const mongoose = require("mongoose")

const Kebab = require("../models/kebab")
const User = require("../models/user")

mongoose.connect(`mongodb://localhost/kebabDb`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Kebab.collection.drop()
//User.collection.drop()

const Users = [
  {
    userName: 'test',
    password: 'testtest'
  }
];

const Kebabs = [

  {
    shopName: "Greasy shot",
    picture: "some link to the image",
    review: 1,
    address: "Lobeckstraße 36-40, 10969 Berlin",
    coord: [],
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
    coord: [],
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
    coord: [],
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
    coord: [],
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
    coord: [],
    comments: [{
      title: `Horrible title`,
      body: 'Horrible body',
      date: '01.01.20'
    }],
  },

]

User
  .create(Users)
  .then(allUsers => {
    console.log(`User is added`)
    mongoose.connection.close()
  })
  .catch(error => {
    throw new Error(`User is not added. ${error}`)
  })

Kebab
  .create(Kebabs)
  .then(allKebabs => {
    console.log(`Kebab Shop is added`)
    mongoose.connection.close()
  })
  .catch(error => {
    throw new Error(`Kebab shop is not added. ${error}`)
  })


