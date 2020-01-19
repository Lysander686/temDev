// pages/mine/uptown/uptown.js
import { $wuxDialog } from '../../../miniprogram_npm/wux-weapp/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uptownsSource:[],
    uptowns: [
      { uptownId: 1, uptownName: "亚运城天誉", isHot: "是" },
      { uptownId: 2, uptownName: "实地常春藤", isHot: "是" },
      { uptownId: 3, uptownName: "万科山景城", isHot: "是" },
      { uptownId: 4, uptownName: "万科里享家", isHot: "是" },
      { uptownId: 5, uptownName: "珠江嘉园", isHot: "是" },
      { uptownId: 6, uptownName: "珠江帝景", isHot: "是" },
      { uptownId: 6, uptownName: "万科金色梦想", isHot: "是" },
      { uptownId: 6, uptownName: "岭南林语", isHot: "是" },
      { uptownId: 6, uptownName: "岭南雅筑", isHot: "是" },
      { uptownId: 6, uptownName: "中海誉城", isHot: "是" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ uptownsSource: this.data.uptowns.map(a => a) })

  },
  onSearch(e) {
    console.info(e.detail.value)
    let searchText = e.detail.value
    let dd = this.data.uptownsSource.map(a => a)
    console.log("dd: ", dd)

    this.setData({
      uptowns: dd.filter((a) => {
        return a.uptownName.includes(searchText)
      })
    })
  },
  // ddd(e){
  //   console.info(e.target.dataset.uptownId)
  // },
  alert() {
    $wuxDialog().alert({
      resetOnClose: true,
      // title: '入住小区成功',
      content: '入住小区成功',
      confirmText: '知道了',
      onConfirm(e) {
        console.log(e)
        wx.switchTab({
          url: '/pages/mine/mine'
        })
      },
    })
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

  }
})
