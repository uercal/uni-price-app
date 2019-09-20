<template>
	<view>		
		<form>			
			<view class="cu-bar bg-white solid-bottom">
				<view class="action text-title text-bold">
					<text class="cuIcon-title text-orange"></text>
					分组信息
				</view>				
			</view>
			<view class="cu-form-group">
				<view class="title">分组名称</view>
				<input placeholder="请填写分组名称" name="input" v-model="group_name"></input>
			</view>
			
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action text-bold">
					<text class="cuIcon-title text-orange"></text> 价格比例
				</view>				
			</view>			
			<view class="cu-list menu sm-border card-menu margin-top'">				
				<view class="cu-item">
					<view class="content">						
						<text class="text-black" style="width: 35%;">商品名称</text>
						<text style="width:20%;" class="text-black">原价</text>
						<text style="width:20%;" class="text-black">现价</text>
						<view style="width:20%;display: flex;align-items: center;">
							<text class="text-black">比例</text>
						</view>
					</view>
				</view>
				<view class="cu-item" v-for="(item,index) in goods_price" :key="item.goods_id">
					<view class="content">
						<text class="text-grey" style="width: 35%;">{{item.goods_name}}</text>
						<text style="width:20%;" class="text-grey">{{item.price}}元</text>
						<text style="width:20%;" class="text-grey" v-html="(newPrice[index].price)+'元'"></text>
						<view style="width:20%;display: flex;align-items: center;">
							<input placeholder="比例" name="input" type="digit" v-model="newPrice[index].rate" @input="clearNoNum($event.target,index)"></input>
							<view class="cu-capsule radius">
								<label class='cu-tag'>
									%
								</label>					
							</view>
						</view>						
					</view>					
				</view>				
			</view>		
				
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-blue margin-tb-sm lg" @click="submit">保存</button>
			</view>
									
		</form>
	</view>
</template>

<script>
	
	import { mapState, mapMutations } from 'vuex';
	import Service from '../../service.js'
		
	export default {
		data() {
			return {
				goods_price:[],
				newPrice:[],
				group_name:''
			};
		},
		computed: {
			...mapState(['goods']),			
		},		
		methods: {
			fixed(num){
				let r = num.toFixed(2);
				if(r.split('.')[1]=='00'){
					return r.split('.')[0];
				}else{
					return r;
				}
			},
			submit(){
				let data = {};
				let newPrice = this.newPrice;
				let empty = newPrice.some(e=>!e.rate||e.rate=='');
				if(this.group_name==''){
					Service.showError('分组名称不能为空');
					return false;
				}
				if(empty){
					Service.showError('比例不能为空');
				}else{					
					newPrice.map(e=>{						
						data['goods_id['+e.goods_id+']'] = [e.rate*e.price/100,e.rate];							
					});
					data['group_name'] = this.group_name;
					// 
					Service._post('Member/saveGroup',data,function(res){
						Service.showSuccess('成功',function(){
							uni.navigateBack();
						})
					})
				}
			},	
			tofixNumber(price){
				price = price.toFixed(2);
				let price_arr = price.split('.');
				if(price_arr[1]=='00'){
					price = price_arr[0]
				}
				return price;
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
					_this.newPrice[index].rate = obj.value;
					let _price = _this.goods_price[index].price * obj.value / 100;
					_price = _this.tofixNumber(_price);
					_this.newPrice[index].price = _price;
				},1)	
			}
		},
		
		onShow() {
			let _this = this;
			this.goods_price = this.goods;
			this.goods_price.map(function(e){
				_this.newPrice.push({
					goods_id:e.goods_id,
					price:e.price,
					rate:100
				});
			});
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	
	.content{
		display: flex;align-items: center;justify-content: space-around;
	}
	
	.content{
		font-size: 14px;
	}
	
	.text-grey{
		word-break: break-all;
	}
</style>
