const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

// function to generate a token

function getToken(user){
  const token = jwt.sign({user}, process.env.SECRET, {expiresIn: "1d"});
  return token;
}


function post_signup(req, res) {
  console.log("Request body:", req.body);
  let newUser = req.body;
  userModel
    .create(newUser)
    .then((response) => {
      console.log(response);

      // creating a token and sending it back to the user
      const token = getToken(response);

      res.cookie('authToken', token, {httpOnly: true, maxAge: 24*60*60*1000});
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ success: false });
    });
}

function post_login(req, res) {
  let { email, password } = req.body;
  userModel
    .findOne({ email })
    .then((data) => {
      if (!data) {
        res.status(404).json({
            message : "User not found",
           success: false 
          });
      } else if (data.password !== password) {
        res.status(401).json({
          message: "Invalid password",
          success: false
        })
      } else {
        // creating a token and sending it back to the user
      const token = getToken(data);

      res.cookie('authToken', token, {httpOnly: true, maxAge: 24*60*60*1000});

        res.status(200).json({
          message: "Login successful",
          success: true
        })
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ success: false });
    });
}

// clear cookie in logout fun
function logout(req, res){
  res.clearCookie('authToken');
  res.send("Logged out successfully");
}

function get_login(req, res) {
  res.send("login page is this");
}
function get_signup(req, res) {
  res.send("signup page");
}

module.exports = { post_login, post_signup, get_login, get_signup, logout };
