//npx json-server --watch db.json --middlewares middleware.cjs --port 3000
module.exports = (req, res, next) => {
  // res.header("X-Total-Count", "100");
  res.header("Access-Control-Expose-Headers", "X-Total-Count");
  next();
};
