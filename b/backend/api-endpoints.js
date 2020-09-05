
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Workingg',
        message: 'THE API IS WORKING'
    });
});

var figureController = require('./figureController');

router.route('/figures')
    .get(figureController.index)
    .post(figureController.new);

router.route('/figures/:figure_id')
    .get(figureController.view)
    .patch(figureController.update)
    .put(figureController.update)
    .delete(figureController.delete);

module.exports = router;
