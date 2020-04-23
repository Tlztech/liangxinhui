
Page({
  data: {
    id:'',
    list:
      { 'brand': '大米', 'title': '【增荔】香软丝苗米 2 kg装', 'expiration_date': '2020年5月20日', 'area': '沈阳和平区', 'star': 4, 'phone': 13912345678, 'introduction': '奥ID和嫂ID哈死的还是大海哦点好的哈啥大事', 'yprice': 288, 'xprice': '188', 'zprice': 30, 'limited':100,'buy': 3000, 'praise': 3404, 'promote': 3233, 'pic': '/images/food/5.jpeg', 'pic1': '/images/food/1.jpeg',  'pic2': '/images/food/2.jpeg',  'pic3': '/images/food/3.jpeg'},
    commects: [
      { 'id': 1, 'head_pic': '/images/food/6.jpeg', 'eval_level_img':'/images/1587454552350.jpg', 'connect_text': '1话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话'},
      { 'id': 2, 'head_pic': '/images/food/6.jpeg', 'eval_level_img':'/images/1587454552350.jpg', 'connect_text': '2话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话'},
      { 'id': 3, 'head_pic': '/images/food/6.jpeg', 'eval_level_img':'/images/1587454552350.jpg', 'connect_text': '3话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话好好说有话'},
    ],
    commects_num: ['3000'],

    bottomlist: [
      {
        "text": "首页",
        'id': 1,
        // "iconPath": "/page/weui/images/tabbar_icon_chat_default.png",
        // "selectedIconPath": "/page/weui/images/tabbar_icon_chat_active.png",
        dot: true
      },
      {
        "text": "收藏",
        'id': 2,
        // "iconPath": "/page/weui/images/tabbar_icon_setting_default.png",
        // "selectedIconPath": "/page/weui/images/tabbar_icon_setting_active.png",
        badge: 'New'
      },
      {
        "text": "分享",
        'id': 3,
        // "iconPath": "/page/weui/images/tabbar_icon_setting_default.png",
        // "selectedIconPath": "/page/weui/images/tabbar_icon_setting_active.png",
        badge: 'Go'
      },
      {
        "text": "购买",
        // "iconPath": "/page/weui/images/tabbar_icon_setting_default.png",
        // "selectedIconPath": "/page/weui/images/tabbar_icon_setting_active.png",
        badge: '¥'
      }
    ]
  },

  tabChange(e) {
    console.log('tab change', e)
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
  },
  lookcommentalls: function(e){
    wx.navigateTo({
      url: '/pages/lookcommects/lookcommects',
    })
  },
})
