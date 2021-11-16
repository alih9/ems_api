'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Department extends sequelize_1.Model {
        static associate(models) {
            Department.hasMany(models.JobHistory);
            Department.hasMany(models.Employee);
        }
    }
    Department.init({
        Name: DataTypes.STRING,
        MangerId: DataTypes.INTEGER,
        Location: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Department',
    });
    return Department;
};
//# sourceMappingURL=department.js.map