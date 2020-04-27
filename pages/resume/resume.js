//resume.js
const util = require('../../utils/util.js')

Page({
  data: {
    user: { 'resume': '3年厨师经验求面点师职位', 'name': '张三', 'sex': '男', 'age': '23', 'education': '大专', 'experience': '3年', 'phone': '0416-27634539', 'adress': '辽宁省沈阳市和平区三好街28-2号1-3-1', 'position': '辽宁省沈阳市铁西区', 'jineng': '有良好工作态度，能和睦的同他人相处。可以积极做到服从上级安排，比较喜欢创新和学习新鲜事物，希望能有机会和各大团体机构学习。', 'gongzuo': '积极认真,有进去心!有良好的团体合作意识和积极的工作的活力！', 'jiaoyu': 'XX-02 XX-10 XX.10.15    陕西汉中厨师学院      厨师      二级资格证书', 'jieshao': '希望在广州附近工作!希望可以近期找到一份厨房的工作,本人擅长做粤菜和川菜,并且学做过炒式西餐。希望有诚意者尽快和本人联系!', 'pass1': '', 'pass2': '', 'pass3': ''},
    canSub: true,
  },

  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

    wx.setNavigationBarTitle({
      title: '编辑简历',
    })
  },
  setValue: function (e) {
    const value = e.detail.value;
    const id = e.currentTarget.id;
    var user = this.data.user;
    user[id] = value;

    this.setData({
      user: user,
    })
  },
  trimValue: function (e) {
    const id = e.currentTarget.id;
    var user = this.data.user;
    user[id] = user[id].trim();

    this.setData({
      user: user,
    })
  },
  
  imageUpload: function (e) {
    var that = this;
    const id = e.currentTarget.id;
    var user = that.data.user;

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        //res.tempFilePaths 返回图片本地文件路径列表
        user[id] = res.tempFilePaths;
        that.setData({
          user: user
        })
      }
    })
  },
  submit: function () {
    var user = this.data.user;
    for (var index in user) {
      console.log(user[index]);
    }

    wx.showModal({
      title: '温馨提示',
      content: '提交成功！审核结果将于3日后发送到您的微信提醒，请注意查收！',
      showCancel: false,
      success: function(){
        wx.navigateBack();
      }
    })
    
  },
})
