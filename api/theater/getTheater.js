const Router = require('express');
const { Theater } = require('../../models/theaters');

const router = Router();

router.get('/theaters/:theaterId', async (req, res) => {
  const { theaterId } = req.params;

  const result = await Theater.findOne({ theaterId });

  res.status(200).send(result);
})

module.exports = router;