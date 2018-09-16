const {CustomDrink, User} = require('../../db');

const createCustomDrink = async(req, res) => {
  const {customDrink} = req.body;

  console.log("the incoming request to DB API ", customDrink);

  customDrink.date_created = new Date();

  

  try {
    //create new customDrink in DB
    const newCustomDrink = await CustomDrink.create(customDrink);

    //expect to send new populatedDrink to server
    res.send(newCustomDrink);
  
  } catch(error) {
    console.log("There was an error creating the custom drink.", error);

    res.send({error: true, message: "There was an error creating the custom drink."});

  }
  
}

const updateUserCustomDrinks = async(req, res) => {
  //get the user socia_id
  const social_id = req.params.id;

  //get the user's created custom_drink
  const {custom_drink} = req.body;

  //add the custom_drink to user's custom_drinks array in DB
  const updates = { $addToSet: { custom_drinks: custom_drink } };

  try {
    //expect to get updated user with new custom_drink 
    //inside user's custom_drinks array
    let updatedUser = await User.findOneAndUpdate({social_id}, updates);


    res.send(updatedUser);

  } catch(error) {
    console.log("There was an error updating the user's custom drinks. ", error);
    
    res.send({error: true, message: "There was an error updating the user's custom drinks."});
  }


}




const findOrCreate = async (req, res) => {
  const {social_id, first_name, last_name, email, profile_image_url, phone_number} = req.body;

  const isNewUser = {social_id, first_name, last_name, email, profile_image_url, phone_number};
  

  try {
    let currentUser = await User.find({social_id});
    
    if (currentUser.length == 0) {
      currentUser = await User.create(isNewUser);
    }

    console.log("currentUser in DB is ", currentUser);
    
    res.send(currentUser);


  } catch(error) {
    console.log("There was an error saving/updating the user.", error);

    res.send({error: true, message: "There was an error saving/updating the user."});
  }

}


const findAUser = async (req, res) => {
  const social_id = req.params.id;

  try {
    //get back an array of results
    let foundUser = await User.find({social_id});
    
    foundUser = foundUser.pop(); 
    
    console.log("foundUser ", foundUser);
    
    res.send(foundUser);

  } catch(error) {
    console.log("There was an error find the user.", error);

    res.send({error: true, message: "There was an error finding the user."});
  }

}


const updateTheUser = async(req, res) => {
  const social_id = req.params.id;
  const updates = req.body;


  try {
    let updatedUser = await User.findOneAndUpdate({social_id}, updates, {new: true});

    console.log("the updatedUser is ", updatedUser);

    res.send(updatedUser);

  } catch(error) {
    console.log("There was an error updating the user. ", error);
    res.send({error: true, message: "There was an error updating the user."})
  }
}


module.exports = {
  createCustomDrink,
  updateUserCustomDrinks,
  findOrCreate,
  findAUser,
  updateTheUser
}