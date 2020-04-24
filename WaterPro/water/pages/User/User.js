// pages/User/User.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 推荐 - 反馈 - 联系 - 关于
    ds:[
        {icon:"/images/58_58.png",txt:"关于海那边1",arrow:"/images/arrow_left.png"},
        {icon:"/images/58_58.png",txt:"关于海那边2",arrow:"/images/arrow_left.png"},
        {icon:"/images/58_58.png",txt:"关于海那边3",arrow:"/images/arrow_left.png"},
        ],
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

  taptonext:function(e){
    console.log(e.currentTarget.dataset.model)
    var f = e.currentTarget.dataset.model
    var url = ""
    if (f.txt == "关于海那边1") {
      url = "/pages/Recommand/Recommand"
    }else if (f.txt == "关于海那边2") {
      url = "/pages/Feedback/Feedback"
    }else if (f.txt == "关于海那边3") {
      url = "/pages/About/About"
    }

    wx.navigateTo({
      url: url,
    })
  },

})