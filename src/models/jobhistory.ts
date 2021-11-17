'use strict';
import {
  Model
} from 'sequelize';



    interface JobHistoryAttributes {
    EmployeeId: number,
    StartDate: Date,
    EndDate: Date,
    JobId: number,
    DepartmentId: number,  
    }
    
    
    module.exports = (sequelize: any, DataTypes:any) => {
      class JobHistory extends Model<JobHistoryAttributes> 
      implements JobHistoryAttributes {
      
        EmployeeId!: number;
        StartDate!: Date;
        EndDate!: Date;
        JobId!: number;
        DepartmentId!: number;        


    static associate(models:any) {
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



   
