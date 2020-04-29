// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history_seas: {
      1:'牛',
      2:'猪肉',
      3:'鸡肉',
    },
    search_data:[
      { "id": 132, "name": '六二家牛骨头', 'x_price': 162, "y_price": 262, 'connect': "162抢购[六二家牛骨头三人餐]", "checked": false },
      { "id": 133, "name": '火锅', 'x_price': 399, "y_price": 699, 'connect': "399抢购[六三人餐]", "checked": false },
      { "id": 134, "name": '猪肉包子铺', 'x_price': 20, "y_price": 56, 'connect': "20抢购[单人餐]", "checked": false },
      { "id": 135, "name": '铁锅炖', 'x_price': 388, "y_price": 488, 'connect': "388抢购[三人餐]", "checked": false },
    ],
    view_show: 'block',
    showsearch: false,
    show_searchdata: false,
    search_Input: '',
    total: 0,
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
    this.checksearch(e,this.data.search_Input)
  },
  /**
   * show search
   */
  showsearch: function (e) {
    this.setData({
      showsearch: true
    })
  },
  /**
   * 搜索商品
   */
  checksearch: function (e,search_Input = '') {
    if(e.detail.value == undefined && search_Input){
      this.showsearch()
    }
    let value = e.detail.value != undefined ? e.detail.value.trim() : search_Input;
    console.log(search_Input)
    console.log(value)
    let length = this.data.search_data.length;
    let datas = this.data.search_data;
    if(value && value != ''){
      for(var i = 0;i<length;i++){
        if(datas[i].connect.indexOf(value) != -1){
          datas[i].checked = true;
          this.data.total = this.data.total + 1
          this.setData({
            total: this.data.total,
            search_data: datas
          })
        }
      }
    }else{
      for(var i = 0;i<length;i++){
        if(datas[i].connect.indexOf(value) != -1){
          datas[i].checked = false;
        }
      }
      this.setData({
        search_data: datas,
        show_searchdata: false,
        total: 0
      })
    }
    if(this.data.total > 0){
      this.setData({
        show_searchdata: true
      })
    }
  },
  /**
   * 后退按钮
   */
  backshow: function (e){
    this.setData({
      showsearch: false,
      show_searchdata: false,
      total: 0,
      search_Input: ''
    })
  },
  //前往商品页面
  gotodetails: function(e){

  }
})