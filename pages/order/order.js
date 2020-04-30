//order.js

Page({
  data: {
    height: 0,
    address: ['广东省广州市荔湾区黄埔大道55号6-6-6', '辽宁省沈阳市和平区三好街28-2号1-3-1'],
    index: 0,
    nikname: '18866668888',
    shop: '增荔香米专卖店',
    commodity: '【增荔】香软丝苗米10公斤，原价￥86，行动价￥76,包邮',
    price: 76,
    unit: '袋',
    num: 1,
    total: 76,
  },
  onLoad: function () {
    var that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.screenHeight,
          width: res.screenWidth
        });
      }
    });
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  },
  binAddressChange: function (e) {
    this.setData({
      index: e.detail.value,
    })
  },
  plus: function () {
    const num = this.data.num;
    this.setData({
      num: num + 1,
      total: this.data.price * (num + 1),
    })
  },
  minus: function () {
    const num = this.data.num;
    if (num > 1) {
      this.setData({
        num: num - 1,
        total: this.data.price * (num - 1),
      })
    }
  },
  submit: function () {
    wx.showModal({
      title: '温馨提示',
      content: '支付成功',
      showCancel: false,
      success: function(){
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    })
  },
})
