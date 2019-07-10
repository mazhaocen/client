
let demo = async (ctx, next) => {
  ctx.response.body = {
    code:1,
    data:'成功',
    msg:'请求成功'
  }
}

module.exports = {
  'POST-/users/demo': demo,
}
// signIn () {
//   console.log(123);
//   this.$http.post('/users/signIn', {
//     userName: '12332',
//     password: 222232
//   }).then(res => {
//     console.log(res);
//   })
// }
