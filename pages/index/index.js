//index.js
//获取应用实例
var app = getApp();
var host = "https://demo.baogongpo.cn/Applets/";

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[]
  },
  onLoad: function () {
    var $$ = this;
    
    wx.request({
      url: host + 'index.php',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.statusCode != 200) {
          return false;
        }

        $$.setData({
          imgUrls: res.data.images,
          navItems: res.data.navs
        })
      }
    })
  }
    
})
