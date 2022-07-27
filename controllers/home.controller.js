require("dotenv").config();

let getHome = (req, res) => {
    res.status(200).send("Hello");
}

module.exports = {
    getHome: getHome
  };