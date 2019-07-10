let modelFn = require('../common/createModel')

let model = new modelFn()
let signIn = async (ctx, next) => {
  try {
    let klass = {
      userName: String,
      password: String
    }
    let res = await model.create(klass, 'User', ctx.request.body)
    // let res = await user.save()
    ctx.response.body = {
      code: 1,
      data:res.userName,
      msg:'成功'
    }
    console.log(res);
  } catch (e) {
    ctx.response.body = e
  }
}
let login  = async (ctx, next) => {
  ctx.response.body = {
    code:1,
    data:'成功',
    msg:'请求成功'
  }
}
module.exports = {
  'POST-/users/login': login,
  'POST-/users/signIn': signIn,
}
