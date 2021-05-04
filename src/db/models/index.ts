import Car from "./car";
import Contract from "./contract";
import Customer from "./customer";
import Staff from "./staff";
Car.hasOne(Contract, {
  as: "contracts",
  foreignKey: "carId",
});
Staff.hasOne(Contract, { as: "contracts", foreignKey: "outerId" });
Customer.hasOne(Contract, { as: "contracts", foreignKey: "renterId" });
Customer.hasOne(Contract, { as: "contracts", foreignKey: "driverId" });

Contract.belongsTo(Car, {
  as: "car",
  foreignKey: "carId",
});
Contract.belongsTo(Staff, {
  as: "staffs",
  foreignKey: "outerId",
});
Contract.belongsTo(Customer, {
  as: "customers",
  foreignKey: "renterId",
});
Contract.belongsTo(Customer, {
  as: "customers",
  foreignKey: "driverId",
});

export { Car, Contract, Customer, Staff };
