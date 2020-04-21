//adverse.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //底部菜单
    showList: [true, false, false, false, false],
    fields: ['time','adverse','pride','money','star'],
    //商品列表
    list:[
      { 'title': '【增荔】香软丝苗米 2 kg装', 'area': '沈阳和平区', 'time': 12345, 'sale': 28, 'pride': 5, 'star': 4, 'price': 85, 'old': 108, 'money': '1.2', 'adverse': 320},
      { 'title': '【增荔】香软丝苗米 5 kg装', 'area': '沈阳和平区', 'time': 12346, 'sale': 107, 'pride': 12, 'star': 3, 'price': 85, 'old': 108, 'money': '2.3', 'adverse': 120 },
      { 'title':'【增荔】香软丝苗米 10 kg装', 'area':'沈阳和平区', 'time':12347, 'sale': 157, 'pride':12, 'star':18, 'price': 85, 'old':108, 'money': '0.8', 'adverse': 100}
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

    wx.setNavigationBarTitle({
      title: '今日必推',
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
  }
})
