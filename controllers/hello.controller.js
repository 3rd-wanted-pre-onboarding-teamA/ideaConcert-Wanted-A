const hello = (req, res) => {
  return res.status(200).send("Hello");
};

module.exports = hello;