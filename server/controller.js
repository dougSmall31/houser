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
    const {
      name,
      address,
      city,
      state,
      zipcode,
      img,
      mortgage,
      rent
    } = req.body;

    dbInstance
      .post_house([
        name,
        address,
        city,
        state,
        Number(zipcode),
        img,
        mortgage,
        rent
      ])
      .then(() => res.sendStatus(200, "All good!"))
      .catch(err => {
        res.status(500).send({ errorMessage: "Server Error!" });
        console.log(err);
      });
  }
  // delete: (req, res) => {
  //   const dbInstance = req.app.get("db");

  //   dbInstance
  //     .delete_house([id, name, address, city, state, zipcode])
  //     .then(() => res.sendStatus(200, "All good!"))
  //     .catch(err => {
  //       res.status(500).send({ errorMessage: "Server Error!" });
  //       console.log(err);
  //     });
  // }
};
