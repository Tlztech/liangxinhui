//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  
    navIdx:0, 
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      nav_val:'123',
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    //初始获取定位权限
    wx.authorize({
     scope: 'scope.userLocation',
     success: (res) => {
      console.log('成功',res)
     },
    })
  },
  openMap:function(e){
    var that = this
    wx.getSetting({
     success(res){
     //这里判断是否有地位权限
      if (!res.authSetting['scope.userLocation']) {
      wx.showModal({
       title: '提示',
       content: '请求获取位置权限',
       success:function(res){
       if(res.confirm==false){
        return false;
       }
       wx.openSetting({
        success(res) {
        //如果再次拒绝则返回页面并提示
        if (!res.authSetting['scope.userLocation']) {
         wx.showToast({
         title: '此功能需获取位置信息，请重新设置',
         duration: 3000,
         icon: 'none'
         })
        } else {
         //允许授权，调用地图
         that.chooseMap()
        }
        }
       })
       }
      }) 
      } else {
      //如果有定位权限，调用地图
      that.chooseMap()
      }
     }
    })
    },
   
    chooseMap(){
    var that = this
    wx.chooseLocation({
     success: function (res) {
     that.setData({
      address: res.address,
      latitude: res.latitude,
      longitude: res.longitude
     })
     },
     fail: function (res) {
     console.log(res)
     }
    })
    },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //前往搜索页
  gotosearch: function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  
  // 导航
  nav:function(e){ //设置选项卡选中索引
    // this.setData({
    //   navIdx: e.currentTarget.dataset.index,
    // })
    wx.navigateTo({
      url: '../food/food',
    })
  },
})
