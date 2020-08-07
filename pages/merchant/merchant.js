
Page({
  data: {
    
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '商户中心',
    })
  },

  merchant: function () {
    wx.navigateTo({
      url: './merchantdetail/merchantdetail',
    })
  }
})
