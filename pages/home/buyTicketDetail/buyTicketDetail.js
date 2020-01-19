// pages/home/buyTicketDetail/buyTicketDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    line: "",
    geton:0,
    getoff:0,
    getonName: "",
    stationTypeon:"",
    stationOnId :0,
    getonstation:[
      {
        sortNumber : 1,
        stationName : "中海誉城",
        stationType:"洋城一路公交站",
        stationId:123,
        stationTime:"6:40",
        stationRemark:"南苑扶梯大门"
      },
      {
        sortNumber: 2,
        stationName: "爱特城",
        stationType: "去程",
        stationId: 123,
        stationTime: "6:40",
        stationRemark: "云埔一路(中一药业)总站旁，博伟通讯科技公司门口"
      }

    ],
    getoffstation: [
      {
        sortNumber: 1,
        stationName: "华师",
        stationType: "正门",
        stationId: 123,
        stationTime: "7:20",
        stationRemark: ""
      },
      {
        sortNumber: 2,
        stationName: "爱特城",
        stationType: "去程",
        stationId: 123,
        stationTime: "6:40",
        stationRemark: "云埔一路(中一药业)总站旁，博伟通讯科技公司门口"
      }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      line: JSON.parse(options.ticket)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  choose_geton: function (event) {
    this.setData({ 
      geton: event.target.dataset.item.sortNumber,
      getonName: event.target.dataset.item.stationName,
      stationTypeon: event.target.dataset.item.stationType,
      stationOnId: event.target.dataset.item.stationId
    })
    console.log(event.target.dataset.item.sortNumber)
  },

  go :function(){
    wx.navigateTo({
      url: '../../buyticket/buyticket',
    })
    // wx.navigateBack({
      
    // })
  }
})