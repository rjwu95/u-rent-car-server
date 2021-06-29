"use strict";

import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize";

class Customer extends Model {
  public id!: number;
  public name!: string;
  public birthday!: number;
  public hp!: string;
  public address!: string;
  public detailAddress!: string;
  public license!: number;
  public licenseType!: string;
  public licenseDate!: Date;
  public postcode!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Customer.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    birthday: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    hp: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    detailAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    license: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    licenseType: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    licenseDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    postcode: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "customers",
  }
);

export default Customer;
