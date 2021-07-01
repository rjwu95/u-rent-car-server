"use strict";

import { Association, DataTypes, Model } from "sequelize";
import sequelize from "../sequelize";
import Car from "./car";
import Customer from "./customer";
import Staff from "./staff";

class Contract extends Model {
  public id!: number;
  public carId!: number;
  public outerId!: number;
  public renterId!: number;
  public driverId!: number;
  public departure!: Date;
  public arrive!: Date;
  public giveLocation!: string;
  public carCheck!: string;
  public initKm!: number;
  public fee!: number;
  public feeTable!: string;
  public remark!: string;
  public special!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public readonly outer!: Staff;
  public readonly renter!: Customer;
  public readonly driver!: Customer;
  public readonly car!: Car;

  public static associations: {
    outer: Association<Contract, Staff>;
    renter: Association<Contract, Customer>;
    driver: Association<Contract, Customer>;
    car: Association<Contract, Car>;
  };
}

Contract.init(
  {
    // id: {
    //   type: DataTypes.NUMBER,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    carId: { type: DataTypes.NUMBER },
    outerId: { type: DataTypes.NUMBER },
    renterId: { type: DataTypes.NUMBER },
    driverId: { type: DataTypes.NUMBER },
    departure: { type: DataTypes.DATE },
    arrive: { type: DataTypes.DATE },
    giveLocation: { type: DataTypes.STRING },
    carCheck: { type: DataTypes.STRING },
    initKm: { type: DataTypes.NUMBER },
    fee: { type: DataTypes.NUMBER },
    feeTable: { type: DataTypes.STRING },
    remark: { type: DataTypes.STRING },
    special: { type: DataTypes.STRING },
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
    modelName: "contracts",
    sequelize,
  }
);

export default Contract;
