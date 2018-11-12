
const fs = require('fs')
const path = require('path')



module.exports = class Product {
  constructor(title) {
    this.title = title
  }

  save() {
    const storagePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

    fs.readFile(storagePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this)

      fs.writeFile(storagePath, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }

  static fetchAll(cb) {
    const storagePath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
    
    fs.readFile(storagePath, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    })
  }

}