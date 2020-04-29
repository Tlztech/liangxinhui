
Page({
  data: {
   detail_val: 3,
   incomealls: false,
   become: 0, //成为达人
   invite: 0, //邀请达人
   withdraw: 0,//立即提现
   value: '',
   code_if:'', //  邀请码输入判断
   password: '', //密码
   repassword: '',//确认密码
   pass_if: '', //密码if
   //收益
   list:[
    {'id': 1, 'shop_pic': '/images/food/1.jpeg', 'name': '绍辉大虾1', 'x_price': 288, 'y_price': 899, 'quantity': 1, 'prize': 12, 'z_price': 30, 'status': 2, 'user_img': '/images/food/4.jpeg', 'user_name': '飞翔的小鸟'},
    {'id': 2, 'shop_pic': '/images/food/2.jpeg', 'name': '绍辉大虾11', 'x_price': 288, 'y_price': 899, 'quantity': 10, 'prize': 12, 'z_price': 30, 'status': 2, 'user_img': '/images/food/4.jpeg', 'user_name': '飞翔的小鸟'},
    {'id': 3, 'shop_pic': '/images/food/2.jpeg', 'name': '绍辉大虾11', 'x_price': 288, 'y_price': 899, 'quantity': 3, 'prize': 12, 'z_price': 30, 'status': 1, 'user_img': '/images/food/4.jpeg', 'user_name': '飞翔的小鸟'},
    {'id': 4, 'shop_pic': '/images/food/2.jpeg', 'name': '绍辉大虾11', 'x_price': 288, 'y_price': 899, 'quantity': 1, 'prize': 12, 'z_price': 30, 'status': 1, 'user_img': '/images/food/4.jpeg', 'user_name': '飞翔的小鸟'},
   ],
  talent_obj:{
     'id':3302, 'user_img': '/images/photo1.png', 'user_name': 'Butt-file', 'z_price': 43, 'talent_age': '1年', 'talent': 0, 'code': 88888888, 'oncode': 66666666
    },
  //下线贡献
  contribution:[
    {'id':10, 'user_img': '/images/photo3.png', 'user_name': '二月花开', 'z_price': 43, 'talent_age': '1年'},
    {'id':11, 'user_img': '/images/photo2.png', 'user_name': '二月花开', 'z_price': 43, 'talent_age': '1年'}
  ],
  //收入
  income:{
    'user_id': 3302, 'adds': 140, 'd_price': 50, 'kt_price': 35.7
  }
  },
  onLoad: function (e) {
    wx.setNavigationBarTitle({
      title: '达人中心',
    })
  },
  
  all: function(e){
    this.setData({
      detail_val: e.currentTarget.dataset.val,
    })
  },
  // 收益
  goincomealls: function(e){
    wx.navigateTo({
      url: '/pages/income/income',
    })
  },
  // 贡献
  gocontribution: function(e){
    wx.navigateTo({
      url: '/pages/contribution/contribution',
    })
  },
  //成为达人
  becometalent: function (e) {
    this.setData({
      become: 1
    })
  },
  //input邀请码过滤
  handleInput(e) {
    let value = this.validateNumber(e.detail.value)
    this.setData({
      value
    })
  },
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  //下一步
  nextgo: function(e){
    console.log(e)
    if(this.data.become == 1){
      this.setData({
        become: 2
      })
      return;
    }
    if(this.data.become == 2){
      if(this.data.value == 88888888){
        this.setData({
          code_if: "",
          become: 3
        })
        return;
      }else{
        this.setData({
          code_if: "输入错误"
        })
      }
    }
    if(this.data.become == 3){
      if(this.data.password == this.data.repassword ){
        this.setData({
          become: 4
        })
        return;
      }else{
        this.setData({
          pass_if: "输入不一致"
        })
      }
      
    }
    if(this.data.become == 4){
      this.setData({
        ["talent_obj.talent"]: 1,
        become: 0
      })
    }
  },
  //取消
  backs: function(e){
    this.setData({
      become: 0,
      invite: 0,
      withdraw: 0
    })
  },
  // 邀请达人
  // 弹出框
  invitetalent: function(e){
    this.setData({
      invite: 1
    })
  },
  //立即邀请
  goinvite: function(e){
    this.setData({
      invite: 2
    })
  },
  //立即提现弹出框
  withdrawalert: function(e){
    this.setData({
      withdraw: 1
    })
  },
  //立即提现
  gowithdraw: function(e){

  }

})
