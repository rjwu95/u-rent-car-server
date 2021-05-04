"use strict";

import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize";

class Car extends Model {
  public id!: number;
  public number!: string;
  public status!: string;
  public name!: string;
  public grade!: string;
  public gear!: string;
  public fuel!: string;
  public distance!: string;
  public remainFuel!: string;
  public birth!: Date;
  public remark!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Car.init(
  {
    // id: {
    //   type: DataTypes.NUMBER,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    number: { allowNull: false, type: DataTypes.STRING },
    status: { allowNull: false, type: DataTypes.STRING },
    name: { allowNull: false, type: DataTypes.STRING },
    grade: { allowNull: false, type: DataTypes.STRING },
    gear: { allowNull: false, type: DataTypes.STRING },
    fuel: { allowNull: false, type: DataTypes.STRING },
    distance: { allowNull: false, type: DataTypes.STRING },
    remainFuel: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    birth: { allowNull: false, type: DataTypes.DATE },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "cars",
  }
);

export default Car;
