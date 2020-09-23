'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      queryInterface.createTable('users',{
          id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
          },
          name:{
            type:Sequelize.STRING,
            allowNull:false,
          },
          email:{
            type:Sequelize.STRING,
            allowNull:false,
          },
          created_at:{
            type:Sequelize.DATE,
            allowNull:false,
          },
          update_at:{
            type:Sequelize.DATE,
            allowNull:false,
          },

      });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  }
};
