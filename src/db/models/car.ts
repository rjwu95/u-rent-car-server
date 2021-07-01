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
    number: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    grade: { type: DataTypes.STRING },
    gear: { type: DataTypes.STRING },
    fuel: { type: DataTypes.STRING },
    distance: { type: DataTypes.STRING },
    remainFuel: {
      type: DataTypes.STRING,
    },
    birth: { type: DataTypes.DATE },
    remark: { type: DataTypes.TEXT },
    createdAt: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "cars",
  }
);

export default Car;
