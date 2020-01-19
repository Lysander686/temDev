// pages/ticket/ticket.js

Page({
  data: {
    current: 'tab1',
    //   tab1:'sdfsdf',
    // tab3: 'xxxxx',
    tabs: [{
        key: 'tab1',
        title: 'Tab 1',
        content: 'Content of tab 1',
      },
      {
        key: 'tab2',
        title: 'Tab 2',
        content: 'Content of tab 2',
      },
      {
        key: 'tab3',
        title: 'Tab 3',
        content: 'Content of tab 3',
      },
    ],
    currentDataToday: [{
        date: ["2020-01-13"],
        time: "15:30",
        ticketNumbers: 2,
        createTime: "2019-12-06 11:23:06",
        origin: "岭南雅筑/金色梦想/中海誉城去程", //车次起点
        getOn: "中海誉城去程(羊城一路公交站)", //上车站点
        destination: "华师", //车次终点
        getOff: "体育西路(公交总站)", //下车站点
        passenger: [{
          passengerName: "张三",
          passengerType: "成人",
          passengerIdCard: "xxxx"
        }],
      },
      {
        date: ["2020-01-13"],
        time: "15:30",
        ticketNumbers: 2,
        createTime: "2019-12-06 11:23:06",
        origin: "岭南雅筑/金色梦想/中海誉城去程", //车次起点
        getOn: "中海誉城去程(羊城一路公交站)", //上车站点
        destination: "华师", //车次终点
        getOff: "体育西路(公交总站)", //下车站点
        passenger: [{
          passengerName: "张三",
          passengerType: "成人",
          passengerIdCard: "xxxx"
        }],
      },
      {
        date: ["2020-01-13"],
        time: "15:30",
        ticketNumbers: 2,
        createTime: "2019-12-06 11:23:06",
        origin: "岭南雅筑/金色梦想/中海誉城去程", //车次起点
        getOn: "中海誉城去程(羊城一路公交站)", //上车站点
        destination: "华师", //车次终点
        getOff: "体育西路(公交总站)", //下车站点
        passenger: [
          {
            passengerName: "张三",
            passengerType: "成人",
            passengerIdCard: "xxxx"
          }
        ],
      },
      {
        date: ["2020-01-13"],
        time: "15:30",
        ticketNumbers: 2,
        createTime: "2019-12-06 11:23:06",
        origin: "岭南雅筑/金色梦想/中海誉城去程", //车次起点
        getOn: "中海誉城去程(羊城一路公交站)", //上车站点
        destination: "华师", //车次终点
        getOff: "体育西路(公交总站)", //下车站点
        passenger: [
          {
            passengerName: "张三",
            passengerType: "成人",
            passengerIdCard: "xxxx"
          }
        ],
      }
    ],
    payment: "未支付",
    cancel: "取消"
  },
  change: function(e) {
    console.info(e.detail.key)
    this.setData({
      current: e.detail.key
    })
  },
})

// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })