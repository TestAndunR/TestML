let AWS = require('aws-sdk');
const ml = new AWS.MachineLearning();
exports.handler = function (event, context, callback) {

	ml.predict({
		MLModelId: 'ml-DYPsae14K89',
		PredictEndpoint: 'https://realtime.machinelearning.us-east-1.amazonaws.com',
		Record: {
			age: '32',
			job: 'services',
			marital: 'single'
		}
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});



	callback(null, 'Successfully executed');
}