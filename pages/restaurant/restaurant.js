//restaurant.js

Page({
  data: {
    id: 0,
    restaurant: {
      'title': '大堂经理', 'date': '今天', 'salary': '10-20K', 'person': '3人', 'school': '大专', 'year': '2-3年', 'position': '辽宁省沈阳市和平区三好街28-2号1-3-1', 'others': ['周末双休', '带薪年假', '五险一金', '绩效奖金'], 'points': ['擅长做粤菜和川菜,并且学做过炒式西餐', '擅长做粤菜和川菜,并且学做过炒式西餐', '擅长做粤菜和川菜,并且学做过炒式西餐', '擅长做粤菜和川菜,并且学做过炒式西餐', '擅长做粤菜和川菜,并且学做过炒式西餐', '擅长做粤菜和川菜,并且学做过炒式西餐', '擅长做粤菜和川菜,并且学做过炒式西餐', '擅长做粤菜和川菜,并且学做过炒式西餐'], 'wants': ['大专以上学历，具有良好的沟通表达能力。', '大专以上学历，具有良好的沟通表达能力。', '大专以上学历，具有良好的沟通表达能力。', '大专以上学历，具有良好的沟通表达能力。', '大专以上学历，具有良好的沟通表达能力。'], 'message': { 'title': '广州大酒店', 'jingying': '餐饮住宿', 'guimo': '200人以上', 'xingzhi': '国营' }, 'gongshang': ['公司全称：广州市广州大酒店餐饮有限公司', '成立时间：1980年01月01日', '注册资本：1000万人民币', '法人代表：张三']},
    bottomlist: [
      {
        "text": "首页",
        'id': 1,
        "iconPath": "/images/tabbarpic/index.png",
        "selectedIconPath": "/images/tabbarpic/index-on.png",
        dot: true
      },
      {
        "text": "收藏",
        'id': 2,
        "iconPath": "/images/tabbarpic/shoucang.png",
        "selectedIconPath": "/images/tabbarpic/shoucang-on.png",
      },
      {
        "text": "分享",
        'id': 3,
        "iconPath": "/images/tabbarpic/fenxiang.png",
        "selectedIconPath": "/images/tabbarpic/fenxiang-on.png",
      },
      {
        "text": "购买",
        "iconPath": "/images/tabbarpic/goumai.png",
        "selectedIconPath": "/images/tabbarpic/goumai-on.png",
      }
    ]
  },
  onLoad: function (e) {
    if (e && e.id) {
      this.setData({
        id: e.id,
      })
    }
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
