import Car from "./car";
import Contract from "./contract";
import Customer from "./customer";
import Staff from "./staff";
Car.hasOne(Contract, {
  as: "contracts",
  foreignKey: "carId",
});
Staff.hasOne(Contract, { as: "contracts", foreignKey: "outerId" });
Customer.hasOne(Contract, { as: "renter", foreignKey: "renterId" });
Customer.hasOne(Contract, { as: "driver", foreignKey: "driverId" });

Contract.belongsTo(Car, {
  as: "car",
  foreignKey: "carId",
});
Contract.belongsTo(Staff, {
  as: "outer",
  foreignKey: "outerId",
});
Contract.belongsTo(Customer, {
  as: "renter",
  foreignKey: "renterId",
});
Contract.belongsTo(Customer, {
  as: "driver",
  foreignKey: "driverId",
});

export { Car, Contract, Customer, Staff };
