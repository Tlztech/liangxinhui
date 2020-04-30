// pages/forgetpass/forgetpass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "foegetpass": 0,
    "renew": '重发短信',
    "height": '0rpx',
    "hidden": false,
    "phone": "19912340000",
    "newphone": "",
    "code": "0000"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //手机隐藏中间四位
    var newphone = this.geTel(this.data.phone)
    this.setData({
      newphone: newphone
    })

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
  //动态获取主体高度，换算出想要的view高度
  onReady: function(){
    var that = this
    //获取系统信息
    wx.getSystemInfo({
      success: (res) => {
        var newheight = Number((res.windowHeight-100)*2)
        //计算主体部分高度，单位为px
        that.setData({
          height:newheight+'rpx'
        })
      },
    })
  },
  //重发短信
  restart: function(e){
    var time_num = 59
    var retime = setInterval(() => {
      if(time_num > 0){
        this.setData({
          renew: time_num,
          hidden: true
        })
        time_num = time_num - 1
      }else{
        clearInterval(retime);
        this.setData({
          renew: '重新发送',
          hidden: false
        })
      }
      this.setData({
        foegetpass: 1,
      })
    }, 1000);
    
  },
  //手机号中间四位隐藏
  geTel: function (tel){
      return tel.substring(0, 3)+"****"+tel.substr(tel.length-4);
  }
})