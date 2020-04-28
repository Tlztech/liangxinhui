//resume.js
const util = require('../../utils/util.js')

Page({
  data: {
    user: { 'title': '广州大酒店股份有限公司', 'name': '张三', 'phone': '024-37865095', 'price': '28.4', 'adress': '辽宁省沈阳市和平区三好街28-2号1-3-1', 'content': '有良好工作态度，能和睦的同他人相处。可以积极做到服从上级安排，比较喜欢创新和学习新鲜事物，希望能有机会和各大团体机构学习。', 'images': ['/images/advertising1.png', '/images/er.jpg', '/images/test1.jpg', '/images/trainning1.png', '/images/food/1.jpeg'], },
    canSub: true,
    
  },

  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
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
    const count = that.data.user && that.data.user.images ? that.data.user.images.length : 0;
    var user = that.data.user;

    wx.chooseImage({
      count: 8 - count,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        //res.tempFilePaths 返回图片本地文件路径列表
        user.images = user.images.concat(res.tempFilePaths);
        that.setData({
          user: user
        })
      }
    })
  },

  imageChange: function (e) {
    var that = this;
    const id = e.currentTarget.id;
    const count = that.data.user && that.data.user.images ? that.data.user.images.length : 0;
    var user = that.data.user;

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        //res.tempFilePaths 返回图片本地文件路径列表
        user.images[id] = res.tempFilePaths[0];
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
      content: '消息发布成功！',
      showCancel: false,
      success: function(){
        wx.navigateBack();
      }
    })
    
  },
})
