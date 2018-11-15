var app = getApp();

Page({
	data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[],
		dishesList:[],
		dishes:[]
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},1000)
	},
	selectNav (event) {
		this.loadingChange();

		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜品
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let flag = true;
		let	cart = this.data.cart;
		
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
				}
			})
		}
		if(flag) cart.push(dish);
		this.setData({
			cartTotal:cart.length
		})
		this.setStatus(dish)
	},
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}
		
		this.setData({
			dishesList:this.data.dishesList
		})
	},
	onLoad () {
		this.loadingChange();
		var $$ = this;
		
		wx.request({
		  url: app.service.host + 'dishes.php',
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
		      navList: res.data.navList,
		      dishesList: res.data.dishesList
		    })
		  }
		})
	}
})