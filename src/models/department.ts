'use strict';
import {
  Model
} from 'sequelize';

interface DepartmentAttributes {
  Name: string;
  MangerId: number;
  Location: string;
}


module.exports = (sequelize: any, DataTypes:any) => {
  class Department extends Model<DepartmentAttributes> 
  implements DepartmentAttributes {
    Name!: string;
    MangerId!: number;
    Location!: string;
    
    static associate(models: any) {
      Department.hasMany(models.JobHistory);
      Department.hasMany(models.Employee);
  }}
  
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