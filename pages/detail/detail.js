
Page({
  data: {
    id:'',
  },
  onLoad: function (e) {
    if (e && e.id) {
      this.setData({
        id:e.id,
      })
    }
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
  }
})
