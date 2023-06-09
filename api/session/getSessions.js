const { Session } = require('../../models/sessions');
const Router = require('express');

const router = Router();

router.get('/sessions', async (req, res) => {
  const { userId } = req.query;

  const searchFilters = userId ? { user_id: userId } : {};

  const result = await Session.find(searchFilters);

  res.status(200).send(result);
});

module.exports = router;