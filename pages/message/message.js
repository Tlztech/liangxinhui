
Page({
  data: {
    message: [
      { 'id': 1, 'name': '老胖串店', 'time': '11:03', 'connect_text': '新品上市', 'head_pic': '/images/food/3.jpeg'},
      { 'id': 2, 'name': '申记串道', 'time': '13:44', 'connect_text': '折扣特价', 'head_pic': '/images/food/1.jpeg'},
      { 'id': 3, 'name': '老家铁锅炖', 'time': '14:14', 'connect_text': '折扣特价，限时一天', 'head_pic': '/images/food/2.jpeg'},
      { 'id': 4, 'name': '海底捞火锅', 'time': '14:55', 'connect_text': '折扣特价，限时一天', 'head_pic': '/images/food/5.jpeg'},
      ],
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '消息',
    })
  }
})
