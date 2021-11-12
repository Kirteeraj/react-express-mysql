const db = require("../models");
const Application = db.application;
const Op = db.Sequelize.Op;

// Create and Save a new Application
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }

  // Create a Application
  const application = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.phone,
    education_qualification: req.body.education_qualification,
    reseach_projects: req.body.reseach_projects,
    research_publications: req.body.research_publications,
    consultancy_works: req.body.consultancy_works,
    phd_guided: req.body.phd_guided,
    mtech_guided: req.body.mtech_guided,
    btech_guided: req.body.btech_guided,
    fees_details: req.body.fees_details,
    any_remarks: req.body.any_remarks,
  };

  // Save Application in the database
  Application.create(application)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Application from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Application.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Applications."
      });
    });
};

// Find a single Application with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Application.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Application with id=" + id
      });
    });
};

// Update a Application by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Application.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Application was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Application with id=${id}. Maybe Application was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Application with id=" + id
      });
    });
};

// Delete a Application with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Application.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Application was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Application with id=${id}. Maybe Application was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Application with id=" + id
      });
    });
};

// Delete all Applications from the database.
exports.deleteAll = (req, res) => {
  Application.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Applications were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Applications."
      });
    });
};

// find all published Applications
exports.findAllPublished = (req, res) => {
  Application.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Applications."
      });
    });
};
