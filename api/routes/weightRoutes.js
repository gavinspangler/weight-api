'use strict';

module.exports = function(app) {
	var weight = require('../controllers/weightController');

	// weight Routes
	app.route('/weights')
		.get(weight.list_all_weights)
		.post(weight.create_a_weight);

	app.route('/weights/:weightId')
		.get(weight.read_a_weight)
		.put(weight.update_a_weight)
		.delete(weight.delete_a_weight);
};
