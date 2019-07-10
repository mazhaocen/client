let mongoose = require('mongoose')
class model {
  constructor(klass, chartName, data) {

  }
  create(klass, chartName, data) {
    let schema = mongoose.Schema(klass)  // mongoose.Schema 创建个 Schema
    let Model = mongoose.model(chartName, schema) //chartName 表名
    // return new model(data)
    return Model.create(data)
  }
  add() {

  }
}
// let modelFn = (klass, chartName, data) => {
//   let schema = mongoose.Schema(klass)  // mongoose.Schema 创建个 Schema
//   let model = mongoose.model(chartName, schema) //chartName 表名
//   return new model(data)
// }

module.exports = model
