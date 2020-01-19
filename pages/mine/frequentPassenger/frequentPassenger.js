// pages/mine/frequentPassenger/frequentPassenger.js
Page({

  /**
   * Page initial data
   */
  data: {
    frequentPassengers: [{
      name: "Foo",
      Id: "442",
    }, {

    }]
  },
  addFrequentPassenger() {
    wx.navigateTo({
      url: './addFrequentPassenger/addFrequentPassenger',
      success: () => {

      },
      fail: () => { },
      complete: () => { }
    });
  },
  // my defined function
  onClick(e) {
    console.log('onClick', e)
    if (e.detail.type === 'right') {
      wx.showModal({
        title: 'Thank you for your support!',
        showCancel: !1,
      })
    }
  },
  onClickLeft() {

  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    try {
      // request backend data
      this.data.frequentPassengers = requestBackendData(baseurl + "frequentPassengers");
    } catch (error) {
      console.info(error)
      console.log(this.data.frequentPassengers)
    }
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
