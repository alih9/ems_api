'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class JobHistory extends sequelize_1.Model {
        static associate(models) {
            JobHistory.belongsTo(models.Department);
            JobHistory.belongsTo(models.Job);
            JobHistory.belongsTo(models.Employee);
        }
    }
    JobHistory.init({
        EmployeeId: DataTypes.INTEGER,
        StartDate: DataTypes.DATE,
        EndDate: DataTypes.DATE,
        JobId: DataTypes.INTEGER,
        DepartmentId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'JobHistory',
    });
    return JobHistory;
};
//# sourceMappingURL=jobhistory.js.map