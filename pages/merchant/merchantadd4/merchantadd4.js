
Page({
  data: {
    date: '2017-08-08',
  },
  onLoad: function () {
    
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  submit: function () {
    wx.navigateBack({
      
    })
  }
})
