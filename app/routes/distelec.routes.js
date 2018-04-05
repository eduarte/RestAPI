module.exports = function(app) {

    var distElec = require('../controllers/distelec.controller.js');

    // Create a new distElec
    app.post('/distElec', distElec.create);

    // Retrieve all distElec
    app.get('/distElec', distElec.findAll);

    // Retrieve a single distElec with distElecId
    app.get('/distElec/:codeelect', distElec.findOne);

    // Update a distElec with distElecId
    app.put('/distElec/:codeelect', distElec.update);

    // Delete a distElec with distElecId
    app.delete('/distElec/:codeelect', distElec.delete);
}