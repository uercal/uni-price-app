<template>
	<view>	
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">用户名</view>
				<input placeholder="填写用户名" v-model="username" disabled="true"></input>
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
				<button class="cu-btn bg-green margin-tb-sm lg" @click="submit">保存</button>
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
				member_id:0,
				username:'',
				password:'',
				manager:'',
				group_id:'',
				group_index:-1,
				origin_data:{}
			};
		},
		computed:{
			...mapState(['group_list'])			
		},
		methods: {
			...mapMutations(['getGroupData']),
			PickerChange(e) {
				let index = e.detail.value
				this.group_index = index;
				this.group_id = this.group_list[index].group_id;
				console.log(this.group_id);
			},
			getMemberInfo(member_id){
				
				let _this = this;
				Service._post('Member/getChild',{member_id:member_id},function(res){
					let data = res.data;
					_this.origin_data = data;
					_this.manager = data.detail.manager;
					_this.username = data.detail.username;
					// _this.password = data.detail.password;
					_this.password = '#origin#';
					_this.group_id = data.group_id;
					// 
					_this.group_list.find((e,i)=>{
						if(e.group_id==_this.group_id){
							_this.group_index = i;
						}
					});
				})
			},
			submit(){
				if(this.username==this.origin_data.detail.username&&this.password=='#origin#'&&this.manager==this.origin_data.detail.manager&&this.group_id==this.origin_data.group_id){
					Service.showError('并未作出任何修改')
					return false;
				}else{
					if(this.password.length<6){
						Service.showError('密码不能低于6位数')
					}else{
						let data = {
							member_id:this.member_id,
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
		onLoad(option) {
			this.getGroupData();
			this.member_id = option.member_id;	
			this.getMemberInfo(this.member_id);
		}		
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
