const express = require('express');
const router = express.Router();
const photosCtrl = require('../controller/photos.controller');

router.get('/photos', photosCtrl.getPhotos);
router.post('/photos', photosCtrl.postPhotos);
router.put('/photos', photosCtrl.putPhotos);
router.delete('/photos', photosCtrl.delPhotos);
router.delete('/photo', photosCtrl.deletePhotos);

module.exports = router;