//index.js
//获取应用实例
var app = getApp();

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
      url: app.service.host + 'index.php',
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
