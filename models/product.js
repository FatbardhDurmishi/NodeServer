const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;

//!BEFORE SEQUELIZE
// const db = require("../util/database");

// const Cart = require("./cart");

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO products (title,price,description,imageUrl) VALUES(?,?,?,?)",
//       [this.title, this.price, this.description, this.imageUrl]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute("SELECT * FROM products");
//   }

//   static findById(id) {
//     return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
//   }
// };

//!USING FILES
// const fs = require("fs");
// const path = require("path");

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   "data",
//   "products.json"
// );

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       if (fileContent.length > 0) {
//         return cb(JSON.parse(fileContent));
//       }
//       cb([]);
//     }
//   });
// };

// save() {
//   getProductsFromFile((products) => {
//     if (this.id) {
//       const existingProductIndex = products.findIndex(
//         (prod) => prod.id == this.id
//       );
//       const updatedProducts = [...products];
//       updatedProducts[existingProductIndex] = this;
//       fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//         console.log(err);
//       });
//     } else {
//       this.id = Math.random().toString();

//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), (err) => {
//         console.log(err);
//       });
//     }
//   });
// }

// static deleteById(id) {
//   getProductsFromFile((products) => {
//     const product = products.find((prod) => prod.id === id);
//     const updatedProducts = products.filter((product) => product.id !== id);
//     fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//       if (!err) {
//         Cart.deleteProduct(id, product.price);
//       }
//     });
//   });
// }

// static fetchAll(cb) {
//   getProductsFromFile(cb);
// }

// static findById(id, cb) {
//   getProductsFromFile((products) => {
//     const product = products.find((product) => product.id === id);
//     cb(product);
//   });
// }
