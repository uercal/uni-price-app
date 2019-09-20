<template>
	<view>		
		<view class="cu-bar bg-white solid-bottom">
			<view class="action text-title">
				<text class="cuIcon-title text-orange"></text>
				商品列表
			</view>			
		</view>
		<form>			
			<view :class="index==0?'cu-form-group margin-top':'cu-form-group'" v-for="(item,index) in admin_data" :key="item.goods_id">
				<view class="title">{{item.goods_name}}</view>
				<view class="" style="width:30%;display:flex;justify-content:flex-end;">
					<input placeholder="输入价格" type="digit" v-model="item.price" @input="clearNoNum($event.target,index)"></input>
					<view class="cu-capsule radius">
						<label class='cu-tag bg-blue'>
							元
						</label>					
					</view>
				</view>				
			</view>					
			
			<view class="padding flex flex-direction">				
				<button class="cu-btn bg-green margin-tb-sm lg" @click="submit">保存</button>
			</view>
			
		</form>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';	
	import Service from '../../service.js';
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			...mapState(['admin_data']),
			
		},
		methods: {
			...mapMutations(['getPriceData']),			
			submit(){
				let data = {};
				let list = this.admin_data;					
				let empty = list.some(e=>e.price==''||!e.price);				
				if(empty){
					Service.showError('价格不能为空')
				}else{					
					list.map(e=>{
						data['goods_id['+e.goods_id+']'] = e.price;
					});
					console.log(data);
					Service._post('Member/changeAdata',data,function(res){
						if(res.code==1){
							Service.showSuccess('保存成功',function(){
								uni.redirectTo({
									url: '/pages/main/main'
								});
							});
						}
					})
				}				
			},
			clearNoNum(obj,index){							
				//先把非数字的都替换掉，除了数字和.			
				obj.value = obj.value.replace(/[^\d.]/g,"");
				//保证只有出现一个.而没有多个.			
				obj.value = obj.value.replace(/\.{2,}/g,".");			
				//必须保证第一个为数字而不是.			
				obj.value = obj.value.replace(/^\./g,"");			
				//保证.只出现一次，而不能出现两次以上			
				obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");			
				//只能输入两个小数			
				obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');			
				// 
				let _this = this;
				setTimeout(()=>{
					_this.admin_data[index].price = obj.value;
				},1)
				
			}
		},		
		onLoad() {
			this.getPriceData();
		}	
	};
	
</script>

<style>
	
	.cu-form-group input{
		width: 140upx;
		text-align: left;
	}
	
	
</style>
