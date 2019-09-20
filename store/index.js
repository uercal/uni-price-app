import Vue from 'vue'
import Vuex from 'vuex'
import Service from '../service.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		// 商品数据
		goods:[],
		// member
		avatar:'',
		member:null,
		type:null,// 0 供应商 1 内部经销 2外部经销商
		// 
		admin_data:[],
		// 
		group_list:[],
    },
    mutations: {
        login(state, data) {            
			console.log(data);
			Service._post('index/login',data,function(res){
				uni.setStorageSync('token',res.data.token);
				state.hasLogin = true;
				Service.showSuccess('登陆成功',function(){
					uni.reLaunch({
						url:'/pages/main/main'
					})
				});
			})			           
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		getIndexData(state,callback){			
			Service._get('index/index',{},function(res){
				if(res.data){
					state.goods = res.data.goods;	
					state.hasLogin = res.data.has_login==1?true:false;
					if(res.data.member){
						uni.setStorageSync('member',res.data.member);						
						state.member = res.data.member;
						state.type = res.data.member.type;
						if(!state.avatar){
							uni.login({
							  provider: 'weixin',
							  success: function (loginRes) {
								uni.getUserInfo({
									success:function(res){
										console.log(res)
										state.avatar = res.userInfo.avatarUrl;
									},
									fail:function(){
										state.avatar = '/static/tabbar/about.png';
									},
									complete:function(){
										
									}
								})
							  }
							});
						}
					}
					callback && callback();
				}
			})
		},
		getPriceData(state){
			Service._post('index/getAdminPrice',{},function(res){
				let data = res.data.data;
				state.admin_data = data;				
			})
		},
		getGroupData(state){			
			Service._post('Member/getGroupList',{},function(res){				
				state.group_list = res.data;				
			});
		}		
    }
})

export default store
