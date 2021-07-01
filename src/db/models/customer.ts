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
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.NUMBER,
    },
    hp: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    detailAddress: {
      type: DataTypes.STRING,
    },
    license: {
      type: DataTypes.STRING,
    },
    licenseType: {
      type: DataTypes.NUMBER,
    },
    licenseDate: {
      type: DataTypes.DATE,
    },
    postcode: {
      type: DataTypes.STRING,
    },
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
    modelName: "customers",
  }
);

export default Customer;
