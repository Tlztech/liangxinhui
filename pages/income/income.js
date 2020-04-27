
Page({
  data: {
   detail_val: 3,
   talent: 1,
   incomealls: false,
   list:[
    {'id': 1, 'shop_pic': '/images/food/1.jpeg', 'name': '绍辉大虾1', 'x_price': 288, 'y_price': 899, 'quantity': 1, 'prize': 12, 'z_price': 30, 'status': 2, 'user_img': '/images/food/4.jpeg', 'user_name': '飞翔的小鸟'},
    {'id': 2, 'shop_pic': '/images/food/2.jpeg', 'name': '绍辉大虾11', 'x_price': 288, 'y_price': 899, 'quantity': 10, 'prize': 12, 'z_price': 30, 'status': 2, 'user_img': '/images/food/4.jpeg', 'user_name': '飞翔的小鸟'},
    {'id': 3, 'shop_pic': '/images/food/2.jpeg', 'name': '绍辉大虾11', 'x_price': 288, 'y_price': 899, 'quantity': 3, 'prize': 12, 'z_price': 30, 'status': 1, 'user_img': '/images/food/4.jpeg', 'user_name': '飞翔的小鸟'},
    {'id': 4, 'shop_pic': '/images/food/2.jpeg', 'name': '绍辉大虾11', 'x_price': 288, 'y_price': 899, 'quantity': 1, 'prize': 12, 'z_price': 30, 'status': 1, 'user_img': '/images/food/4.jpeg', 'user_name': '飞翔的小鸟'},
    ],   //  status： 1 == 已到账  2 == 未到账
  talent_obj:{
     'id':3302, 'user_img': '/images/photo1.png', 'user_name': 'Butt-file', 'z_price': 43, 'talent_age': '1年', 'talent': 1
    },
  contribution:[
    {'id':10, 'user_img': '/images/photo3.png', 'user_name': '二月花开', 'z_price': 43, 'talent_age': '1年'},
    {'id':11, 'user_img': '/images/photo2.png', 'user_name': '二月花开', 'z_price': 43, 'talent_age': '1年'}
  ],
  income:{
    'user_id': 3302, 'adds': 140, 'd_price': 50, 'kt_price': 35.7
  }
  },
  onLoad: function (e) {
    wx.setNavigationBarTitle({
      title: '收益明细',
    })
  },

  all: function(e){
    this.setData({
      detail_val: e.currentTarget.dataset.val,
    })
    console.log(this.data.detail_val)
    console.log(e.currentTarget.dataset.val)
  },

  goincomealls: function(e){
    wx.navigateTo({
      url: '/pages/income/income',
    })
  },
  gocontribution: function(e){
    wx.navigateTo({
      url: '/pages/contribution/contribution',
    })
  }



})
