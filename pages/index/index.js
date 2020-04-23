//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    inputShowed: false,
    inputVal: '',
    showNavi: [true, false, false, false, false],
    swipers0: ['1.jpg', '2.jpg', '3.jpg'],
    swipers1: ['4.jpg', '5.jpg', '6.jpg'],
    //下拉框
    select: false,
    area:0,
    areas:[
      { 'id': 1, 'name': '和平区' },
      { 'id': 2, 'name': '沈河区' },
      { 'id': 3, 'name': '皇姑区' },
      { 'id': 4, 'name': '大东区' },
      { 'id': 5, 'name': '铁西区' },
    ],
    //底部菜单
    showList: [true, false, false, false, false],
    fields: ['time','adverse','pride','money','star'],
    //商品列表
    list:[
      { 'title': '【增荔】香软丝苗米 2 kg装', 'area': '沈阳和平区', 'time': 12345, 'sale': 28, 'pride': 5, 'star': 4, 'price': 85, 'old': 108, 'money': '1.2', 'adverse': 320},
      { 'title': '【增荔】香软丝苗米 5 kg装', 'area': '沈阳和平区', 'time': 12346, 'sale': 107, 'pride': 12, 'star': 3, 'price': 85, 'old': 108, 'money': '2.3', 'adverse': 120 },
      { 'title':'【增荔】香软丝苗米 10 kg装', 'area':'沈阳和平区', 'time':12347, 'sale': 157, 'pride':12, 'star':18, 'price': 85, 'old':108, 'money': '0.8', 'adverse': 100}
    ],
    //招聘列表
    restaurants: [
      { 'title': '广州大酒家', 'area': '和平区', 'city': '沈阳', 'want': 5, 'message': '本科以上学历，踏实肯干，有进取精神，有相关工作经验者优先。', 'image': 'test1.jpg', 'adverse': 320, 'position': '服务员', 'school': '高中', 'long': '经验不限', 'money': '3-5K' },
      { 'title': '番禺酒店', 'area': '沈河区', 'city': '沈阳', 'want': 5, 'message': '本科以上学历，踏实肯干，有进取精神，有相关工作经验者优先。', 'image': 'test2.jpg', 'adverse': 320, 'position': '经理', 'school': '本科', 'long': '3到5年', 'money': '10-20K' },
      { 'title': '广州大酒家', 'area': '和平区', 'city': '沈阳', 'want': 5, 'message': '本科以上学历，踏实肯干，有进取精神，有相关工作经验者优先。', 'image': 'test3.jpg', 'adverse': 320, 'position': '面点师', 'school': '高中', 'long': '1到2年', 'money': '5K以上' },
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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

    //星级
    let list = this.data.list;
    for (var i=0; i<list.length; i++) {
      var star = list[i].star;
      var starImages = [];
      for (var j = 0; j < 5; j++) {
        if (j < star) {
          starImages[j] = true;
        } else {
          starImages[j] = false;
        }
      }
      list[i].starImages = starImages;
    }

    this.setData({
      list:list
    })
  },
  inputTyping:function(e) {
    this.setData({
      inputVal:this.trim(e.detail.value),
    })
  },

  clearInput: function (e) {
    this.setData({
      inputShowed: false,
    },()=>{
      this.setData({
        inputVal: '',
      })
    })
  },

  doScan: function (e) {
    wx.scanCode({
      success:function(res){
        console.log(res)
      }
    })
  },

  showNavi: function (e) {
    const id = e.currentTarget.id;
    var showNavi = this.data.showNavi;

    for (var i=0; i<showNavi.length; i++) {
      if (i == id) {
        showNavi[i] = true;
      } else {
        showNavi[i] = false;
      }
    }

    this.setData({
      showNavi: showNavi,
      showList: [true, false, false, false, false],
    })
    this.orderList(this.data.fields[0]);
  },

  trim:function(str) { 
    return str.replace(/(^\s*)|(\s*$)/g, ""); 
  },

  // 下拉框
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var id = e.currentTarget.id
    this.setData({
      area: id,
      select: false
    })
  },

  // 底部菜单
  showList: function (e) {
    const id = e.currentTarget.id;
    var showList = this.data.showList;

    for (var i = 0; i < showList.length; i++) {
      if (i == id) {
        showList[i] = true;
      } else {
        showList[i] = false;
      }
    }

    this.setData({
      showList: showList,
    })
    this.orderList(this.data.fields[id]);
  },

  orderList: function (field) {
    var list = this.data.list;

    for (var i = 1; i < list.length; i++) {
      for (var j = 0; j < list.length - i; j++) {
        if (list[j][field] < list[j + 1][field]) {
          var tmp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = tmp;
        }
      }
    }

    this.setData({
      list: list,
    })
  },
  goAdverse: function (e) {
    wx.navigateTo({
      url: '/pages/adverse/adverse',
    })
  },
  goDetail: function (e) {
    const id = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },
  //转发
  onShareAppMessage: function () {
    return {
      title: '转发',
      path: '/pages/index/index',
      success: function (res) { }
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //搜索
  goSearch: function(e){
    wx.navigateTo({
      url: '../search/search'
    })
  },
})
