module.exports = {
  get: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_houses()
      .then(house => res.status(200).send(house))
      .catch(err => {
        res.status(500).send({ errorMessage: "Server Error!" });
        console.log(err);
      });
  },

  post: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log("req.body", req.body, "req.bdy");
    const { name, address, city, state, zipcode } = req.body;

    dbInstance
      .post_house([name, address, city, state, Number(zipcode)])
      .then(() => res.sendStatus(200, "All good!"))
      .catch(err => {
        res.status(500).send({ errorMessage: "Server Error!" });
        console.log(err);
      });
  }
};
