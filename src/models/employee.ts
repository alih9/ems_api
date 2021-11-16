'use strict';
import {
  Model, ModelStatic
} from 'sequelize';


interface EmployeeAttributes {
  Name: string,
    email: string,
    Phone: string,
    HireDate: Date,
    Salary: number,
    Commission: number,
    ManagerId: number,
    DepartmentId: number,
    JobId: number
}


module.exports = (sequelize:any, DataTypes:any) => {
  class Employee extends Model<EmployeeAttributes> 
  implements EmployeeAttributes {
    Name!: string;
    email!: string;
    Phone!: string;
    HireDate!: Date;
    Salary!: number;
    Commission!: number;
    ManagerId!: number;
    DepartmentId!: number;
    JobId!: number;


    static associate(models:any) {
    Employee.hasMany(models.JobHistory);
    Employee.belongsTo(models.Job);
    Employee.belongsTo(models.Department);

    }
  };
  Employee.init({
    Name: DataTypes.STRING,
    email: DataTypes.STRING,
    Phone: DataTypes.STRING,
    HireDate: DataTypes.DATE,
    Salary: DataTypes.INTEGER,
    Commission: DataTypes.INTEGER,
    ManagerId: DataTypes.INTEGER,
    DepartmentId: DataTypes.INTEGER,
    JobId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};

