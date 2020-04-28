// pages/cateringtrainingProductdetails/cateringtrainingProductdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{
      "id": 333, "name": '西式快餐汉堡培训(广州)', 'category': '面店',
      "level": '中级', "address": '广州', "time": '两周',
      "x_price": 188, 'y_price': 289, 'z_price': 30,
      'title_img': '/images/trainning1.png', 'watch1': '/images/food/2.jpeg','watch2': '/images/food/3.jpeg','watch3': '/images/food/4.jpeg',
      'course': "简单易学，丰富多样化",
      'sign_up': "无经验，新手，想学的就来报名吧"
    },
    commects: [
      { 'id': 1, 'head_pic': '/images/food/1.jpeg', 'eval_level_img':'/images/1587454552350.jpg', 'connect_text': '简单易学'},
      { 'id': 2, 'head_pic': '/images/food/2.jpeg', 'eval_level_img':'/images/1587454552350.jpg', 'connect_text': '教的认真，很棒'},
      { 'id': 3, 'head_pic': '/images/food/4.jpeg', 'eval_level_img':'/images/1587454552350.jpg', 'connect_text': '简单易学，教的认真，很棒'},
    ],
    commects_num: ['331'],
    bottomlist: [
      {
        "text": "首页",
        'id': 1,
        'sign': "index",
        "iconPath": "/images/tabbarpic/index.png",
        "selectedIconPath": "/images/tabbarpic/index-on.png",
        dot: true
      },
      {
        "text": "收藏",
        'id': 2,
        'sign': "collect",
        "iconPath": "/images/tabbarpic/shoucang.png",
        "selectedIconPath": "/images/tabbarpic/shoucang-on.png",
      },
      {
        "text": "分享",
        'id': 3,
        'sign': "share",
        "iconPath": "/images/tabbarpic/fenxiang.png",
        "selectedIconPath": "/images/tabbarpic/fenxiang-on.png",
      },
      {
        "text": "报名",
        "id": 4,
        'sign': "signup",
        "iconPath": "/images/tabbarpic/baoming.png",
        "selectedIconPath": "/images/tabbarpic/baoming.png",
      }
    ]
  },
  tabChange(e) {
    console.log('tab change', e)
    if(e.detail.item.sign == "index"){
      wx.navigateBack({
        url: '/pages/index/index',
      })
    }
    if(e.detail.item.sign == "share"){
      wx.navigateTo({
        url: '/pages/share/share',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  lookcommentalls: function(e){
    wx.navigateTo({
      url: '/pages/lookcommects/lookcommects',
    })
  },
})