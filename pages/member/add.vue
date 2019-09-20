<template>
	<view>	
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">用户名</view>
				<input placeholder="填写用户名" v-model="username"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">密码</view>
				<input placeholder="填写密码" type="password" v-model="password"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">联系人</view>
				<input placeholder="填写联系人" v-model="manager"></input>
			</view>						
			
			<view class="cu-form-group">
				<view class="title">分组选择</view>
				<picker @change="PickerChange" :value="group_index" :range="group_list" range-key="group_name">
					<view class="picker text-grey" style="text-align: left;">
						{{group_index>-1?group_list[group_index].group_name:'请选择分组'}}
					</view>
				</picker>
			</view>
			
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-green margin-tb-sm lg" :disabled="!valid" @click="submit">保存</button>
			</view>					
		</form>
	</view>
</template>

<script>
	
	import Service from '../../service.js'
	
	import { mapState,mapMutations } from 'vuex'
	
	export default {
		data() {
			return {
				username:'',
				password:'',
				manager:'',
				group_id:'',
				group_index:-1,
			};
		},
		computed:{
			...mapState(['group_list']),
			valid(){
				if(this.username==''||this.password==''||this.manager==''||this.group_id==''){
					return false;
				}else{
					return true;
				}
			}
		},
		methods: {
			...mapMutations(['getGroupData']),
			PickerChange(e) {
				let index = e.detail.value
				this.group_index = index;
				this.group_id = this.group_list[index].group_id;
				console.log(this.group_id);
			},
			submit(){
				if(this.username==''||this.password==''||this.manager==''||this.group_id==''){
					return false;
				}else{
					if(this.password.length<6){
						Service.showError('密码不能低于6位数')
					}else{
						let data = {
							username:this.username,
							password:this.password,
							manager:this.manager,
							group_id:this.group_id
						};
						Service._post('Member/addChild',data,function(res){
							Service.showSuccess('成功',function(){
								uni.navigateBack();
							})
						})
					}
				}
			}
		},
		onLoad() {
			this.getGroupData();
		}		
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
