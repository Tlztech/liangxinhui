
Page({
  data: {
    date: '2017-08-08',
    date2: '2018-08-08',
  },
  onLoad: function () {
    
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindDateChange2: function (e) {
    this.setData({
      date2: e.detail.value
    })
  },
  submit: function () {
    wx.navigateBack({
      
    })
  }
})
