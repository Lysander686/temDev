// pages/mine/frequentPassenger/addFrequentPassenger/addFrequentPassenger.js
import { $wuxForm } from '../../../../miniprogram_npm/wux-weapp/index'
// '/miniprogram_npm/wux-weapp/index'

// var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    isDefaultPassenger: true,
    ticketTypeOptions: ['成人', '儿童(1.5米以下)'],
    aPassenger: {
      ticketType: '成人',
      isDefaultPassenger: false,
      name: '',
      cellphone: '',
      idcard: ''
    }
  },
  onPopupSelectChange(e) {
    let aPassenger = this.data.aPassenger
    aPassenger.ticketType = e.detail.value
    console.info(aPassenger)
    console.info(e.detail.value)

    this.setData({ aPassenger: aPassenger })
    // this.setData({
    //   ticketType: e.detail.value
    // })

  },
  formSubmit() {
    // console.log('Default Form Submit \n', e.detail.value)
    // this.setData({
    //   aPassenger: {ticketType:e.detail.value}
    // })
    // console.log({ $wuxForm() })
    // const{ticketType, }
    try {
      // this.aPassenger = $wuxForm()
      let { getFieldsValue } = $wuxForm()
      let value = getFieldsValue()
      this.data.aPassenger = value
      console.log(this.data.aPassenger)
    } catch (error) {
      console.error(error);
      console.log("form data assignment error")
    }

    console.info(1111)
    wx.navigateTo({
      url: '../frequentPassenger',
      success: (res) => {
        console.info(222)
      },
      fail: (res) => { console.info(res)},
      complete: () => { }
    });

  },
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
