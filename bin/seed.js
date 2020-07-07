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
    address: "Otto-Schmirgal-Str. 1, 10319 Berlin",
    coord: [],
    comments: [{
      title: `NIE MALS`,
      body: 'Ich reduzier auf 11/2 Sterne..(3.9.2014) Typisch Döner Station halt. Man kann drinnen und draußen sitzen. Der Döner schmeckt recht gut. Drei Spielautomaten sind vorhanden. Durchaus eine Alternative zum Tierpark Bistro und McDonalds und auch Kaisers gibt es hier ja nicht mehr...',
      date: '03.09.14'
    }],
  },

  {
    shopName: "Horse glue",
    picture: "some link to the image",
    review: 1,
    address: "Friedrichstr. 101, 10117 Berlin",
    coord: [],
    comments: [{
      title: `Kotzen essen`,
      body: 'Der Laden betreibt offensichtlich Preisabsprachen. Unabhängig von der Qualität des Essen kann ich daher keine Punkte geben, da ein solches Verhalten wettbewerbswidrig ist.',
      date: '01.01.20'
    }],
  },

  {
    shopName: "Rat's paradise",
    picture: "some link to the image",
    review: 3,
    address: "Prenzlauer Allee 32, 10405 Berlin",
    coord: [],
    comments: [{
      title: `Es stinkt zu holle`,
      body: 'Einmal rein und rückwärts wieder raus, WAS FÜR EIN GRAUS! Es stinkt wirklich fürchterlich nach Rauch!',
      date: '05.21.19'
    }],
  },

  {
    shopName: "Rubber chew",
    picture: "some link to the image",
    review: 2,
    address: "Wilmersdorfer Str. 129, 10627 Berlin",
    coord: [],
    comments: [{
      title: `Sorry aber wie scheiße seid ihr?`,
      body: 'Essen dürfen wir nicht mehr bei euch aber verkaufen geht? Ganz klasse für einen zweitklassigen Döner - herzlichen Glückwunsch - nie wieder bei euch!!! Ps das Fleisch ist quasi ungenießbar - Qualität zahlt sich am Ende aus - versucht es mal damit wenn der Service schon versagt!',
      date: '11.15.18'
    }],
  },

  {
    shopName: "We also serve food",
    picture: "some link to the image",
    review: 1,
    address: "Pfarrstr. 116, 10317 Berlin",
    coord: [],
    comments: [{
      title: `4.50 EURO DÖNER???!!!`,
      body: 'Wird von Jahr zu Jahr teurer... also die Preise werden wirklich immer dreister und ich kenne Yuppies seit der Eröffnung. Das Essen ist halt billiges Fastfood vor allem die Chinapfanne: Finger weg! das lohnt sich es nicht für den Preis... überfettet, kaum Gemüse...',
      date: '11.06.19'
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


