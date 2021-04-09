const { Domain } = require('../models/post/model');
const LearningPath = require('../models/learningPath');

exports.getAllDomains = async (req, res) => {
  const domains = await Domain.find({});

  if (!domains) {
    return res.status(400).json({
      error: 'No Domain is found'
    });
  }
  res.json(domains);
};

exports.getDomain = async (req, res) => {
  const { domainId } = req.params;

  if (!domainId) {
    return res.status(422).json({
      error: 'missing domainId'
    });
  }

  const domain = await Domain.findOne({
    _id: domainId
  });

  if (!domain) {
    return res.status(400).json({
      error: 'No Domain Found'
    });
  }
  return res.json(domain);
};

exports.createDomain = async (req, res) => {
  const domain = req.body;

  const _session = new Domain(domain);
  const result = await _session.save();

  res.send(result);
};

exports.getLearningPathOfSpecific = async (req, res) => {
  const { domainId } = req.params;
  const result = await LearningPath.find({ domain: domainId });

  if (!result) {
    return res.status(400).json({
      error: 'No Learning Path is found!!!'
    });
  }

  res.send(result);
};
