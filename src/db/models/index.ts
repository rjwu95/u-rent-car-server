import Car from "./car";
import Contract from "./contract";
Car.hasOne(Contract, {
  sourceKey: "id",
});

Contract.belongsTo(Car, {
  targetKey: "id",
});
export { Car, Contract };
