var dis = require('../models/Distelec.model.js');

exports.create = function(req, res) {
       if(!req.body.content) {
        return res.status(400).send({message: "Electoral District can not be empty"});
    }

    var Distelec = new dis({codeElect: req.body.codeElect, provincia: req.body.provincia, canton: req.body.canton, distrito: req.body.distrito});

    dis.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Note."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {

     dis.find(function(err, dist){
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving Distelecs."});
        } else {
            console.log(dist)
            res.send(dist);
        }
    });
};

exports.findOne = function(req, res) {
    dis.findOne({'codeelect' : req.params.codeelect }, function(err, note) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Distelec not found with CodeElect " + req.params.codeElect});                
            }
            return res.status(500).send({message: "Error retrieving Distelec with CodeElect " + req.params.codeElect});
        } 

        if(!note) {
            return res.status(404).send({message: "Distelec not found with CodeElect " + req.params.codeElect});            
        }

        res.send(note);
    });

};

exports.update = function(req, res) {
    // Update a Distelec identified by the DistelecId in the request

};

exports.delete = function(req, res) {
    // Delete a Distelec with the specified noteId in the request

};