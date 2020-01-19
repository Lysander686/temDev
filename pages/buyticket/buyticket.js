import {
  $wuxDialog
} from '../../miniprogram_npm/wux-weapp/index'

// pages/buyticket/buyticket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card: {
      lineName: "岗顶线",
      lineTime: "17:30"
    },
    getonName: "万科金色梦想",
    getoffName: "岗顶(c出口)",
    currentData: [{
        passengerName: "张三",
        passengerDefault: "",
        passengerType: "成人",
        passengerIdCard: "440825555"
      },
      {
        passengerName: "张三",
        passengerDefault: "",
        passengerType: "成人",
        passengerIdCard: "440825555"
      }
    ],
    all: "20",
    geton: "",
    getOnOff: "",
    stationOnId: "",
    stationOffId: "",
    ticketNumber: "",
    lineBusId: "",
    busId: 1,
    passengerId: "",
    userId: "",
    visible1: false,
    visible2: false,
  },
  // //返回
  // onClick: function() {
  //   wx.navigateBack({
      
  //   })
  // },
  //添加乘客
  addPassenger: function() {
    wx.navigateTo({
      url: '../home/home'
    });
  },
  //删除乘客
  deletePassenger: function(event) {
    let e = event.target.dataset.index
    // const hideDialog = $wuxDialog().open({
    //   resetOnClose: true,
    //   title: '',
    //   content: '是否删除乘客',
    //   buttons: [{
    //       text: '取消',
    //     },
    //     {
    //       text: '确定',
    //       type: 'primary',
    //       onTap(e) {
    //         console.log(e)
    //         this.data.array.splice(e, 1)
    //         this.setData({
    //           currentData: this.data.array
    //         })
    //       },
    //     },
    //   ],
    // })
    $wuxDialog().confirm({
      e: event.target.dataset.index,
      resetOnClose: true,
      closable: false,
      title: '',
      content: '是否删除乘客',
      onConfirm(e) {
        console.log(e)
        this.data.currentData.splice(e, 1)
        this.setData({
          currentData: this.data.currentData
        })
      },
      onCancel(e) {
        console.log('谢谢你不吃之恩！')
      },
    })

  },
  //确认购票
  confirmPay: function() {

  },

  //购票须知
  showPopup: function() {
    wx.navigateTo({
      url:'./ticketinfo/ticketinfo',
      fail:res=>{
        console.info(res)
      }
    })
  },
  showPopup2: function() {
    wx.navigateTo({
      url: './userinfo/userinfo',
      fail: res => {
        console.info(res)
      }
    })
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


})