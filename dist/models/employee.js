'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Employee extends sequelize_1.Model {
        static associate(models) {
            Employee.hasMany(models.JobHistory);
            Employee.belongsTo(models.Job);
            Employee.belongsTo(models.Department);
        }
    }
    ;
    Employee.init({
        Name: DataTypes.STRING,
        email: DataTypes.STRING,
        Phone: DataTypes.STRING,
        HireDate: DataTypes.DATE,
        Salary: DataTypes.INTEGER,
        Commission: DataTypes.INTEGER,
        ManagerId: DataTypes.INTEGER,
        DepId: DataTypes.INTEGER,
        JobId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Employee',
    });
    return Employee;
};
//# sourceMappingURL=employee.js.map