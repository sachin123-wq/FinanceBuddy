var express = require('express');
var router = express.Router();
const {
  getAllDomains,
  getDomain,
  createDomain,
  getLearningPathOfSpecific
} = require('../controllers/domain');

router.get('/', getAllDomains);
router.get('/:domainId', getDomain);
router.post('/', createDomain);
router.get('/:domainId/learningPath', getLearningPathOfSpecific);

module.exports = router;
