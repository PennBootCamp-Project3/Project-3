const Auth = require('../models/Auths');

module.exports = {
    
	create: function(req, res) {
		// Auth.create(req.body)
		// 	.then(newAuth => res.json(newAuth))
        // 	.catch(err => res.status(422).json(err));
        
        Auth.create(req.body)
        .then(res.json("Order Accepted"))
    }
    // ,
    // findById: function(req, res) {
	// 	Auth.findById(req.params.id)
	// 		.then(auth => res.json(auth))
	// 		.catch(err => res.status(422).json(err));
	// },
	// update: function(req, res) {
	// 	Auth.findOneAndUpdate({ _id: req.params.id }, req.body)
	// 		.then(auth => res.json(auth))
	// 		.catch(err => res.status(422).json(err));
	// },
	// remove: function(req, res) {
	// 	Auth.findById({ _id: req.params.id })
	// 		.then(auth => book.remove())
	// 		.then(allAuths => res.json(allAuths))
	// 		.catch(err => res.status(422).json(err));
	// }
}; 