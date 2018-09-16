const mongoose = require('mongoose');
 
const Schema = mongoose.Schema
 
const CustomDrinkSchema = new Schema({
  drink: String,
  type: [String],
  selected_size: String,
  selected_milk: String,
  selected_sweetness: [String],
  selected_toppings: [String],
  date_created: Date,
  created_by: {type: Schema.Types.ObjectId, ref: 'User'}
  
});

const UserSchema = new Schema({
  social_id: String, 
  first_name: String, 
  last_name: String,
  email: String,
  phone_number: String,
  profile_image_url: String,
  custom_drinks: [{type: Schema.Types.ObjectId, ref: 'CustomDrink'}]
});

const CustomDrinkModel = mongoose.model('CustomDrink', CustomDrinkSchema);
const UserModel = mongoose.model('User', UserSchema);

module.exports = {
  CustomDrink: CustomDrinkModel,
  User: UserModel
}

