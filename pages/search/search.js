// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history_seas: {
      1:'牛肉',
      2:'猪肉',
      3:'鸡肉',
    },
    view_show: 'block',
    search_Input: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  /**
   * 搜索
   */
  search: function () {

  },

  /**
   * 清空历史搜索
   */
  delete_history: function  ()  {
    this.setData({
      history_seas: [],
      view_show: 'none'
    })
  },
  
  /**
   * 点击历史时，让搜索框出现点击的值
   */
  setsearchInput: function (e) {
    this.setData({
      search_Input:e.currentTarget.dataset.val
    })
  }
})