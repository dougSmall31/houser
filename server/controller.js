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
  }
};
