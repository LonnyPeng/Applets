//index.js
//获取应用实例
var app = getApp();
var host = "https://demo.baogongpo.cn/Applets/";

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

    Page({
      data: {
        imgUrls: res.data,
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        navItems:[
          {
            name:'堂食',
            url:'dishes'
          },
          {
            name:'外卖',
            url:'take',
            isSplot:true
          },
          {
            name:'外带',
            url:'out'
          },
          {
            name:'订单',
            url:'bill'
          },
          {
            name:'帐单',
            url:'bill',
            isSplot:true
          },
          {
            name:'报表',
            url:'bill'
          }
        ]
      },
      onLoad: function () {
      }
        
    })
  }
})

