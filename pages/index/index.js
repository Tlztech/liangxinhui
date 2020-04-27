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
    // showNavi: [false, false, false, false, true],
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
      { 'title': '番禺酒店', 'area': '沈河区', 'city': '沈阳', 'want': 5, 'message': '本科以上学历，踏实肯干，有进取精神，有相关工作经验者优先。', 'image': 'test1.jpg', 'adverse': 320, 'position': '经理', 'school': '本科', 'long': '3到5年', 'money': '10-20K' },
      { 'title': '广州大酒家', 'area': '和平区', 'city': '沈阳', 'want': 5, 'message': '本科以上学历，踏实肯干，有进取精神，有相关工作经验者优先。', 'image': 'test1.jpg', 'adverse': 320, 'position': '面点师', 'school': '高中', 'long': '1到2年', 'money': '5K以上' },
    ],
    //商品列表
    trainings: [
      { 'title': '西式快餐汉堡培训', 'city': '沈阳', 'type': '面点', 'price': 85, 'old': 108, 'money': '30', 'level': '中级', 'image': 'trainning1.png' },
      { 'title': '正宗川味水煮鱼培训', 'city': '成都', 'type': '川菜', 'price': 888, 'old': 998, 'money': '60', 'level': '高级', 'image': 'trainning1.png' },
      { 'title': '中华小吃地方风味培训', 'city': '天津', 'type': '小吃', 'price': 85, 'old': 108, 'money': '30', 'level': '中级', 'image': 'trainning1.png' },
      { 'title': '正宗烤全羊培训', 'city': '蒙古', 'type': '烧烤', 'price': 3888, 'old': 5888, 'money': '300', 'level': '特级', 'image': 'trainning1.png' },
      { 'title': '食尚香专业厨师培训', 'city': '广州', 'type': '粤菜', 'price': 480, 'old': 608, 'money': '30', 'level': '中级', 'image': 'trainning1.png' },
    ],
    //广而告之
    advertisings: [
      { 'title': '人气韩式烧烤店转让', 'city': '沈阳', 'heart': 85, 'name': '奔跑的老牛', 'photo': 'photo1.png', 'image': 'advertising1.png', 'message': '现有300瓶闹事韩式烧烤店铺急转，附带内部所有设备，有愿者电话联系，详情面议，价格面议' },
      { 'title': '饭店全套厨具转让', 'city': '广州', 'heart': 120, 'name': '飞翔小鸟', 'photo': 'photo2.png', 'image': 'advertising1.png', 'message': '八成新饭店厨具，原价8万现半价转让，有意者请联系。' },
      { 'title': '求购二手烤箱10台', 'city': '成都', 'heart': 185, 'name': '樱桃小丸子', 'photo': 'photo3.png', 'image': 'advertising1.png', 'message': '因饭店规模扩大，求购二手烤箱10台，要九成新，价格好说。有意者请联系。' },
      { 'title': '门面求租', 'city': '天津', 'heart': 35, 'name': '二月花开', 'photo': 'photo2.png', 'image': 'advertising1.png', 'message': '现有高桥路门面出租，面积500平，地处闹市，价格便宜。有意者联系。' },
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
