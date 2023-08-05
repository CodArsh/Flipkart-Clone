import User from "../model/user.schema.js";

export const userSignup_Controller = async (request, response) => {
  try {
    const usernameAlreadyExist = await User.findOne({
      username: request.body.username,
    });
    if (usernameAlreadyExist) {
      return response.status(401).json({ message: "Username already exist" });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin_Controller = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;

    let user = await User.findOne({ username: username, password: password });
    if (user) {
      response.status(200).json({ details: user });
    } else {
      response.status(401).json("Invalid login");
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
