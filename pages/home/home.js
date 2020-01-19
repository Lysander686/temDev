// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uptownName: "万科金色梦想",
    uptownPeople: 5743,
    time: 1,
    direction: 1,
    car:[
      {
        lineDestination:"万科",
        lineName:"岗顶线",
        lineMoney:"10.00",
        lineOrigin:"起点",
        lineTime:["7:00","8:00"]
      },
      {
        lineDestination: "万科",
        lineName: "岗顶线",
        lineMoney: "10.00",
        lineOrigin: "起点",
        lineTime: ["7:00", "8:00"]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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


  /**
   * 
   * 小区，城际选择框方法
   * 
   */
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      current: e.detail.key,
    })
  },
  // onTabsChange(e) {
  //   console.log('onTabsChange', e)
  //   const {
  //     key
  //   } = e.detail
  //   const index = this.data.tabs.map((n) => n.key).indexOf(key)

  //   this.setData({
  //     key,
  //     index,
  //   })
  // },
  // onSwiperChange(e) {
  //   console.log('onSwiperChange', e)
  //   const {
  //     current: index,
  //     source
  //   } = e.detail
  //   const {
  //     key
  //   } = this.data.tabs[index]

  //   if (!!source) {
  //     this.setData({
  //       key,
  //       index,
  //     })
  //   }
  // },
  clicktime1:function() {
    this.setData({ time : 1})
    if (this.direction == 1) {
      this.currentData = this.carObj;
    }
    if (this.direction == 2) {
      this.currentData = this.carObj2;
    }
  },
  clicktime2:function() {
    this.setData({ time: 2 })
    if (this.direction == 1) {
      this.currentData = this.carObj3;
    }
    if (this.direction == 2) {
      this.currentData = this.carObj4;
    }
  },
  clickdirection1() {
    this.setData({ direction : 1})
    if (this.time == 1) {
      this.currentData = this.carObj;
    }
    if (this.time == 2) {
      this.currentData = this.carObj3;
    }
  },
  clickdirection2() {
    this.setData({ direction: 2 })
    if (this.time == 1) {
      this.currentData = this.carObj2;
    }
    if (this.time == 2) {
      this.currentData = this.carObj4;
    }
  },
  buyTicket: function (e) {
    var params = {
      lineDate: e.target.dataset.item.lineDate,
      lineDestination: e.target.dataset.item.lineDestination,
      lineDirection: e.target.dataset.item.lineDirection,
      lineId: e.target.dataset.item.lineId,
      lineMoney: e.target.dataset.item.lineMoney,
      lineName: e.target.dataset.item.lineName,
      lineOrigin: e.target.dataset.item.lineOrigin,
      lineTime: e.target.dataset.it,
      uptownId: e.target.dataset.item.uptownId
    }
    var ticket = JSON.stringify(params);
    wx.navigateTo({
      url: './buyTicketDetail/buyTicketDetail?ticket=' + ticket,
    })
  }
})