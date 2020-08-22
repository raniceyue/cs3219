Figure = require('./figureModel');

exports.new = function (request, response) {
	var figure = new Figure();
	figure.name = request.body.name ? request.body.name : figure.name;
	figure.brand = request.body.brand;
	figure.price = request.body.price;
	figure.toSell = request.body.toSell;
	
	figure.save(function (err) {
		if (err) {
			response.json(err);
		}
		response.json({
						message: 'New figure added',
						data: figure
					});
	});
};

exports.index = function (request, response) {
	Figure.get(function (err, figures) {
			if (err) {
					response.json({
							status: "error",
							message: err,
					});
			}
			response.json({
					status: "success",
					message: "U got all ur figures mang",
					data: figures
			});
	});
};

exports.view = function (request, response) {
    Figure.findById(request.params.figure_id, function (err, figure) {
        if (err)
            response.send(err);
        response.json({
            message: 'Figure details loading..',
            data: figure
        });
    });
};

// Handle update figure info
exports.update = function (request, response) {
Figure.findById(request.params.figure_id, function (err, figure) {
        if (err)
            response.send(err);

		figure.name = request.body.name ? request.body.name : figure.name;
        figure.brand = request.body.brand;
        figure.price = request.body.price;
        figure.toSell = request.body.toSell;
// save the figure and check for errors
        figure.save(function (err) {
            if (err)
                response.json(err);
            response.json({
                message: 'Figure Info updated',
                data: figure
            });
        });
    });
};
// Handle delete figure
exports.delete = function (request, response) {
    Figure.remove({
        _id: request.params.figure_id
    }, function (err, figure) {
        if (err)
            response.send(err);

	response.json({
            status: "success",
            message: 'Figure deleted'
        });
    });
};

