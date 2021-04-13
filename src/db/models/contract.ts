"use strict";

import { Association, DataTypes, Model } from "sequelize";
import sequelize from "../sequelize";

export class Contract extends Model {
  // public id!: number;
  public outerId!: number;
  public renterId!: number;
  public driverId!: number;
  public carId!: number;
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

  // public readonly outer!: Staff;
  // public readonly renter!: Customer;
  // public readonly driver!: Customer;

  // public readonly car!: Car;

  // public static associations: {
  //   outer: Association<Contract, Staff>;
  //   renter: Association<Contract, Customer>;
  //   driver: Association<Contract, Customer>;
  // car: Association<Contract, Car>;
  // };
}

Contract.init(
  {
    // id: {
    //   type: DataTypes.NUMBER,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    carId: { allowNull: false, type: DataTypes.NUMBER },
    outerId: { allowNull: false, type: DataTypes.NUMBER },
    renterId: { allowNull: false, type: DataTypes.NUMBER },
    driverId: { allowNull: false, type: DataTypes.NUMBER },
    departure: { allowNull: false, type: DataTypes.DATE },
    arrive: { allowNull: false, type: DataTypes.DATE },
    giveLocation: { allowNull: false, type: DataTypes.STRING },
    carCheck: { allowNull: false, type: DataTypes.STRING },
    initKm: { allowNull: false, type: DataTypes.NUMBER },
    fee: { allowNull: false, type: DataTypes.NUMBER },
    feeTable: { allowNull: false, type: DataTypes.STRING },
    remark: { allowNull: false, type: DataTypes.STRING },
    special: { allowNull: false, type: DataTypes.STRING },
    // createdAt: { allowNull: false, type: DataTypes.DATE },
    // updatedAt: { allowNull: false, type: DataTypes.DATE },
  },
  {
    tableName: "contracts",
    sequelize,
  }
);

export default Contract;
