
Page({
  data: {
    id:'',
    starImages: [],
    list:
      { 'brand': '大米', 'title': '【增荔】香软丝苗米 2 kg装', 'expiration_date': '2020年5月20日', 'area': '沈阳和平区', 'star': 4, 'phone': 13912345678, 'introduction': '不建议放在潮湿地区保存', 'yprice': 288, 'xprice': '188', 'zprice': 30, 'limited':100,'buy': 3000, 'praise': 3404, 'promote': 3233, 'pic': '/images/food/5.jpeg', 'pic1': '/images/food/1.jpeg',  'pic2': '/images/food/2.jpeg',  'pic3': '/images/food/3.jpeg'},
    commects: [
      { 'id': 1, 'head_pic': '/images/photo1.png', 'eval_level_img':'/images/1587454552350.jpg', 'connect_text': '好吃，下次还来'},
      { 'id': 2, 'head_pic': '/images/photo2.png', 'eval_level_img':'/images/1587454552350.jpg', 'connect_text': '很棒，味道不错'},
      { 'id': 3, 'head_pic': '/images/photo3.png', 'eval_level_img':'/images/1587454552350.jpg', 'connect_text': '包装满意，味道很香'},
    ],
    commects_num: ['3000'],

    bottomlist: [
      {
        "text": "首页",
        'id': 1,
        'sign': "index",
        "iconPath": "/images/tabbarpic/index.png",
        "selectedIconPath": "/images/tabbarpic/index-on.png",
        dot: true
      },
      {
        "text": "收藏",
        'id': 2,
        'sign': "collect",
        "iconPath": "/images/tabbarpic/shoucang.png",
        "selectedIconPath": "/images/tabbarpic/shoucang-on.png",
      },
      {
        "text": "分享",
        'id': 3,
        'sign': "share",
        "iconPath": "/images/tabbarpic/fenxiang.png",
        "selectedIconPath": "/images/tabbarpic/fenxiang-on.png",
      },
      {
        "text": "购买",
        "id": 4,
        'sign': "buy",
        "iconPath": "/images/tabbarpic/goumai.png",
        "selectedIconPath": "/images/tabbarpic/goumai-on.png",
      }
    ]
  },

  tabChange(e) {
    console.log('tab change', e)
    if(e.detail.item.sign == "index"){
      wx.navigateBack({
        url: '/pages/index/index',
      })
    }
    if(e.detail.item.sign == "share"){
      wx.navigateTo({
        url: '/pages/share/share',
      })
    }
    if (e.detail.item.sign == "buy") {
      wx.navigateTo({
        url: '/pages/order/order',
      })
    }
  },
    
  onLoad: function (e) {
    if (e && e.id) {
      this.setData({
        id:e.id ? e.id : e,
      })
    }
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
    //星级
    const star = this.data.list.star;

    var starImages = [];
    for (var j = 0; j < 5; j++) {
      if (j < star) {
        starImages[j] = true;
      } else {
        starImages[j] = false;
      }
    }
    this.setData({
      starImages:starImages,
    })

  },
  lookcommentalls: function(e){
    wx.navigateTo({
      url: '/pages/lookcommects/lookcommects',
    })
  },
})
