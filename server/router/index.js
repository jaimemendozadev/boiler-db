const Router = require('express').Router();
const {createCustomDrink, updateUserCustomDrinks, findOrCreate, findAUser, updateTheUser} = require('./controllers');



Router.post('/customdrink', createCustomDrink);
Router.post('/user', findOrCreate);
Router.get('/user/:id', findAUser);
Router.patch('/user/:id', updateTheUser);
Router.post('/user/:id/drink', updateUserCustomDrinks);

module.exports = Router;
