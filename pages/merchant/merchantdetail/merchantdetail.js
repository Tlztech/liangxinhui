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
    showNavi: [true, false, false , false],
    // showNavi: [false, false, false, false, true],
    swipers0: ['1.jpg', '2.jpg', '3.jpg'],
    swipers1: ['2.jpg', '3.jpg', '1.jpg'],
    //下拉框
    select: false,
    area:0,
    region: ['辽宁省', '沈阳市', '铁西区'],
    //底部菜单
    sel:1,
    showList: [true, false, false, false],
    fields: ['time','adverse','pride','money','star'],
    //商品列表
    list:[
      { 'title': '【增荔】香软丝苗米 2 kg装', 'area': '沈阳和平区', 'time': 12345, 'sale': 28, 'pride': 5, 'star': 4, 'price': 85, 'old': 108, 'money': '1.2', 'adverse': 320,'img': '/images/mi1.jpg'},
    ],
    //招聘列表
    restaurants: [
      { 'title': '广州大酒家', 'area': '和平区', 'city': '沈阳', 'want': 5, 'message': '本科以上学历，踏实肯干，有进取精神，有相关工作经验者优先。', 'image': 'test1.jpg', 'adverse': 320, 'position': '服务员', 'school': '高中', 'long': '经验不限', 'money': '3-5K' },
      { 'title': '番禺酒店', 'area': '沈河区', 'city': '沈阳', 'want': 5, 'message': '本科以上学历，踏实肯干，有进取精神，有相关工作经验者优先。', 'image': 'test1.jpg', 'adverse': 320, 'position': '经理', 'school': '本科', 'long': '3到5年', 'money': '10-20K' },
    ],
    //商品列表
    trainings: [
      { 'id': 1, 'title': '西式快餐汉堡培训', 'city': '沈阳', 'type': '面点', 'price': 85, 'old': 108, 'money': '30', 'level': '中级', 'image': 'trainning1.png' },
      { 'id': 2, 'title': '正宗川味水煮鱼培训', 'city': '成都', 'type': '川菜', 'price': 888, 'old': 998, 'money': '60', 'level': '高级', 'image': 'trainning1.png' },
      { 'id': 3, 'title': '中华小吃地方风味培训', 'city': '天津', 'type': '小吃', 'price': 85, 'old': 108, 'money': '30', 'level': '中级', 'image': 'trainning1.png' },
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
    wx.setNavigationBarTitle({
      title: '商户中心',
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
    const id = parseInt(e.currentTarget.id);
    var showNavi = this.data.showNavi;

    for (var i=0; i<showNavi.length; i++) {
      if (i == id) {
        showNavi[i] = true;
      } else {
        showNavi[i] = false;
      }
    }

    this.setData({
      sel: id + 1,
      showNavi: showNavi,
      showList: [true, false, false, false, false],
    })
    this.orderList(this.data.fields[0]);
  },

  trim:function(str) { 
    return str.replace(/(^\s*)|(\s*$)/g, ""); 
  },

  // 下拉框
  bindShowMsg(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
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
  resume: function (e) {
    wx.navigateTo({
      url: '/pages/resume/resume',
    })
  },
  recruit: function (e) {
    wx.navigateTo({
      url: '/pages/recruit/recruit',
    })
  },
  restaurant: function (e) {
    const id = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/restaurant/restaurant?id='+id,
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
  //发布广告
  adverseadd: function (e) {
    wx.navigateTo({
      url: '../adverseadd/adverseadd'
    })
  },
  adversedetail: function (e) {
    const id = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/adversedetail/adversedetail?id=' + id,
    })
  },
  ding: function () {
    wx.navigateTo({
      url: '../ding/ding',
    })
  },
  che: function () {
    wx.navigateTo({
      url: '../che/che',
    })
  },
  goadd: function () {
    wx.navigateTo({
      url: '../merchantadd' + this.data.sel + '/merchantadd' + this.data.sel ,
    })
  },
  //培训详情
  gocateringtrainingProductdetails: function(e){
    const id = e.currentTarget.dataset.val
    wx.navigateTo({
      url: '/pages/cateringtrainingProductdetails/cateringtrainingProductdetails?id=' + id,
    })
  }
})
