
Page({
  data: {
    "height": '0rpx',
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '商户中心',
    })
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
  // 店铺位置定位
  dwaddress: function(){

  },
})
