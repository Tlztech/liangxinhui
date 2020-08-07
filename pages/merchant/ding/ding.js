
Page({
  data: {
    list: [true, false, false]
  },
  check: function (e) {
    var id = e.currentTarget.id;
    var list = this.data.list;
    for(var i=0;i<list.length;i++){
      if(i == id){
        list[i] = true;
      }else{
        list[i] = false;
      }
    }
    this.setData({
      list: list
    })
  },
  dingdetail: function (e) {
    wx.navigateTo({
      url: '../dingdetail/dingdetail',
    })
  }
})
