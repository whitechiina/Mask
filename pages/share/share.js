// pages/share.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  // data: {
  //   posterConfig: posterConfig
  // },

  onLoad: function() {
    let successPic = app.globalData.successPic
      ? app.globalData.successPic
      //头像
      : "";
    console.log(successPic);
    const posterConfig = {
      width: 750,
      height: 1334,
      backgroundColor: "#fff",
      debug: false,
      pixelRatio: 1,
      blocks: [
        {
          width: 690,
          height: 690,
          x: 30,
          y: 183,
          borderWidth: 2,
          borderColor: "#00b918",
          borderRadius: 20
        }
      ],
      texts: [
        {
          x: 360,
          y: 1100,
          baseLine: "top",
          text: "长按识别小程序码",
          fontSize: 38,
          color: "#080808"
        },
        {
          x: 360,
          y: 1158,
          baseLine: "top",
          text: "一起戴上口罩",
          fontSize: 28,
          color: "#929292"
        }
      ],
      images: [
        {
          width: 634,
          height: 634,
          x: 59,
          y: 210,
          url: successPic
        },
        {
          width: 220,
          height: 220,
          x: 92,
          y: 1020,
          url: "https://tva1.sinaimg.cn/large/006tNbRwly1gbc6mhrorkj305k05kmyh.jpg"
        }
      ]
    };
    this.setData({ posterConfig: posterConfig });
  },

  onPosterSuccess(e) {
    const { detail } = e;
    wx.previewImage({
      current: detail,
      urls: [detail]
    });
  },
  onPosterFail(err) {
    console.error(err);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    let successPic = app.globalData.successPic
      ? app.globalData.successPic
      : "";
    return {
      title: "一起来为头像带上口罩吧！",
      imageUrl: successPic,
      path: "/pages/index/index",
      success: function(res) {}
    };
  }
});
