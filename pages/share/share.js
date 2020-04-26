// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {
      'id': 1,
      'big_img': "/images/food/4.jpeg",
      'small_img1': "/images/food/5.jpeg",
      'small_img2': "/images/food/6.jpeg",
      'title': "[增荔] 苗米，活动优惠，好吃不贵！！！",
      'connect': "营养健康，绿色食品，无农药，纯绿色天然！"
    },
    bottomlist: [
      {
        "text": "好友分享",
        'id': 5,
        'sign': "hyshare",
        "iconPath": "/images/tabbarpic/haoyoushare.png",
        "selectedIconPath": "/images/tabbarpic/haoyoushare.png",
        dot: true
      },
      {
        "text": "群分享",
        'id': 6,
        'sign': "qunshare",
        "iconPath": "/images/tabbarpic/wxshare.png",
        "selectedIconPath": "/images/tabbarpic/wxshare.png",
      }
    ],
  },

  tabChange(e) {
    console.log('tab change', e)
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

  }
})