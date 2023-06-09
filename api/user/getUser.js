const Router = require('express');
const { Theater } = require('../../models/theaters');

const router = Router();

router.get('/theaters', async (req, res) => {
  const { address_city, address_zipcode, latitude, longitude } = req.query;

  const result = await Theater.find({
    "location.address.city": address_city,
    "location.address.zipcode": address_zipcode,
    "location.geo.coordinates.0": latitude,
    "location.geo.coordinates.1": longitude,
  });

  res.status(200).send(result);
})

module.exports = router;