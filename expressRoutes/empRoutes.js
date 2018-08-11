// coinRoutes.js

var express = require('express');
var app = express();
var empRoutes = express.Router();

// Require Item model in our routes module
var Employee = require('../models/Employee');

// Defined store route
empRoutes.route('/add').post(function (req, res) {
  var employee = new Employee(req.body);
  employee.save()
    .then(item => {
    res.status(200).json({'Employee': 'Employee added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
empRoutes.route('/').get(function (req, res) {
   Employee.find(function (err, employees){
    if(err){
      console.log(err);
    }
    else {
      res.json(employees);
    }
  });
});

// Defined edit route
empRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Employee.findById(id, function (err, employee){
      res.json(employee);
  });
});

//  Defined update route
empRoutes.route('/update/:id').post(function (req, res) {
   Employee.findById(req.params.id, function(err, emp) {
    if (!emp)
      return next(new Error('Could not load Document'));
    else {
        emp.name = req.body.name;
        emp.role = req.body.role;

        emp.save().then(emp => {
            res.json('Employee Update complete');
        })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
empRoutes.route('/delete/:id').get(function (req, res) {
   Employee.findByIdAndRemove({_id: req.params.id}, function(err, emp){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = empRoutes;