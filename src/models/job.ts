'use strict';
import {
  Model
} from 'sequelize';




    interface JobAttributes {
      Title: string;
      MinSalary: number;
      MaxSalary: number;
    }
    
    
    module.exports = (sequelize: any, DataTypes:any) => {
      class Job extends Model<JobAttributes> 
      implements JobAttributes {
        Title!: string;
        MinSalary!: number;
        MaxSalary!: number;
        


    static associate(models:any) {
      Job.hasMany(models.JobHistory);
      Job.hasMany(models.Employee);
    
    }
  };
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