'use strict';

var mongoose = require('mongoose'),
  Weight = mongoose.model('Weights');



exports.list_all_weights = function(req, res) {
  Weight.find({}, function(err, weight) {
    if (err)
      res.send(err);
    res.json(weight);
  });
};


exports.create_a_weight = function(req, res) {
  var new_weight = new Weight(req.body);
  new_weight.save(function(err, weight) {
    if (err)
      res.send(err);
    res.json(weight);
  });
};

exports.read_a_weight = function(req, res) {
  Weight.findById(req.params.weightId, function(err, weight) {
    if (err)
      res.send(err);
    res.json(weight);
  });
};

exports.update_a_weight = function(req, res) {
  Weight.findOneAndUpdate({_id:req.params.weightId}, req.body, {new: true}, function(err, weight) {
    if (err)
      res.send(err);
    res.json(weight);
  });
};
// Weight.remove({}).exec(function(){});
exports.delete_a_weight = function(req, res) {

  Weight.remove({
    _id: req.params.weightId
  }, function(err, weight) {
    if (err)
      res.send(err);
    res.json({ message: 'Weight successfully deleted' });
  });
};
