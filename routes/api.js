const express = require('express');
const router = express.Router();
const locations = {
  '1': { _id: '1', name: '스타벅스 안양DT점', address: '경기도 안양시', rating: 4.5 },
  '2': { _id: '2', name: 'Loc8r 테스트 장소', address: '경기도 안성시', rating: 4.0 }
};
router.get('/locations/:locationid', (req, res) => {
  const location = locations[req.params.locationid];
  if (!location) return res.status(404).json({ message: 'location not found' });
  res.json(location);
});
module.exports = router;
