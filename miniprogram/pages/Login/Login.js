// miniprogram/pages/Login/Login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['Administrator', 'Engineer'],
    index: 0,
    isAd: false
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  login: function(e){
    console.log(this.data.index)
    // wx.switchTab({
    //   url: '../status/status',
    // })
  }
})