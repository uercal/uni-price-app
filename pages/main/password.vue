<template>
	<view>		
		<form>			
			<view class="cu-bar bg-white solid-bottom">
				<view class="action text-title text-bold">
					<text class="cuIcon-title text-orange"></text>
					密码修改
				</view>				
			</view>
			<view class="cu-form-group">
				<view class="title">旧密码</view>
				<input placeholder="请填写旧密码" type="password" v-model="password"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">新密码</view>
				<input placeholder="请填写新密码" type="password" v-model="new_password"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">确认新密码</view>
				<input placeholder="确认新密码" type="password" v-model="new_password_again"></input>
			</view>

			<view class="padding flex flex-direction">
				<button class="cu-btn bg-blue margin-tb-sm lg" @click="submit">保存</button>
			</view>

		</form>
	</view>
</template>

<script>
		
	import Service from '../../service.js'
	import { mapState } from 'vuex';
	
	export default {
		data() {
			return {			
				// 
				password:'',
				new_password:'',
				new_password_again:'',
				member_id:0
			};
		},
		computed: {			
		},		
		methods: {
			submit(){
				let _this = this;
				if(this.new_password!=this.new_password_again){
					Service.showError('新密码不一致');
				}else{
					Service._post('Member/resetPass',{
						password:_this.password,
						new_password:_this.new_password
					},function(res){
						Service.showSuccess('成功',function(){
							uni.reLaunch({
								url:'/pages/main/main'
							})
						})
					})
				}
				
			}			
		},		
		onLoad() {
			let member = uni.getStorageInfoSync('member');
			this.member_id = member.id;
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
</style>
