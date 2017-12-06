"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Order = new Schema({
  id: { type: Number, unique: true },
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  products: Array
}, { versionKey: false });


var Product = new Schema({
  id: { type: Number, unique: true },
  name: String,
  price: Number,
  image: String,
  category: String,
  description: String,
  features: Array
}, { versionKey: false });

mongoose.model("Order", Order);
mongoose.model("Product", Product);

mongoose.Promise = global.Promise;

// TODO: Modifier le connect string par le votre!
mongoose.connect("mongodb://userTP4:TP4user@ds013172.mlab.com:13172/online-shop", { useMongoClient: true });
