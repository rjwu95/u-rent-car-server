"use strict";

import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize";

export class Customer extends Model {
  public id!: number;
  public name!: string;
  public birthday!: number;
  public backId!: string;
  public hp!: number;
  public address!: string;
  public detailAddress!: string;
  public license!: number;
  public licenseType!: string;
  public licenseDate!: Date;
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
    backId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    hp: {
      allowNull: false,
      type: DataTypes.NUMBER,
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
      type: DataTypes.NUMBER,
    },
    licenseType: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    licenseDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "customers",
  }
);

export default Customer;
