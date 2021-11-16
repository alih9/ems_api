'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Job extends sequelize_1.Model {
        static associate(models) {
            Job.hasMany(models.JobHistory);
            Job.hasMany(models.Employee);
        }
    }
    ;
    Job.init({
        Title: DataTypes.STRING,
        MinSalary: DataTypes.INTEGER,
        MaxSalary: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Job',
    });
    return Job;
};
//# sourceMappingURL=job.js.map