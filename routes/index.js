
const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlLocations = require('../controllers/locations');

router.get('/', ctrlMain.index);

router.get(
  '/location/:locationid',
  ctrlLocations.locationInfo
);

router.route('/location/:locationid/review/new')
  .get(ctrlLocations.addReview)
  .post(ctrlLocations.doAddReview);

module.exports = router;
