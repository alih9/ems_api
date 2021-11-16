'use strict';
import {
  Model
} from 'sequelize';



    interface JobHistoryAttributes {
    EmpID: number,
    StartDate: Date,
    EndDate: Date,
    JobId: number,
    DepId: number,  
    }
    
    
    module.exports = (sequelize: any, DataTypes:any) => {
      class JobHistory extends Model<JobHistoryAttributes> 
      implements JobHistoryAttributes {
      
        EmpID!: number;
        StartDate!: Date;
        EndDate!: Date;
        JobId!: number;
        DepId!: number;        


    static associate(models:any) {
      JobHistory.belongsTo(models.Department);
      JobHistory.belongsTo(models.Job);
      JobHistory.belongsTo(models.Employee);

    }
  }
  JobHistory.init({
    EmpID: DataTypes.INTEGER,
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
    JobId: DataTypes.INTEGER,
    DepId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobHistory',
  });
  return JobHistory;
};