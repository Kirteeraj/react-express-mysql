module.exports = (sequelize, Sequelize) => {
  const Application = sequelize.define("application", {
    name: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    education_qualification: {
      type: Sequelize.STRING,
    },
    research_projects: {
      type: Sequelize.STRING,
    },
    research_publications: {
      type: Sequelize.STRING,
    },
    consultancy_works: {
      type: Sequelize.STRING,
    },
    phd_guided: {
      type: Sequelize.STRING,
    },
    mtech_guided: {
      type: Sequelize.STRING,
    },
    btech_guided: {
      type: Sequelize.STRING,
    },
    fees_details: {
      type: Sequelize.STRING,
    },
    any_remarks: {
      type: Sequelize.STRING,
    },
  });

  return Application;
};
