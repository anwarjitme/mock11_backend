const jwt=require("jsonwebtoken")
const jwt_verify = (req, res, next) => {
  const token = req.query.token
  if (token) {
    const decoded = jwt.verify(token, "RM");
    if (decoded) {
      next();
    } else {
      res.send("Please Login");
    }
  } else {
    res.send("Please Login");
  }
};
module.exports={
jwt_verify
}
