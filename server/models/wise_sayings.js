'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wise_sayings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wise_sayings.init({
    script: DataTypes.STRING,
    talker: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wise_sayings',
  });
  return wise_sayings;
};