<template>
	<view class="bg-gradual-blue">
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
			<view class="cu-bar bg-white solid-bottom">
				<view class="action text-title">
					<text class="cuIcon-title text-orange"></text>
					分组管理
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow" @tap="addGroup">添加分组</button>
				</view>
			</view>
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				<view class="cu-item arrow" v-for="(item,index) in group_list" :key="index" @click="editGroup(item.group_id)">
					<view class="content">
						<text class="cuIcon-group_fill text-grey"></text>
						<text class="text-grey">{{ item.group_name }}</text>
					</view>
				</view>
			</view>					
		</scroll-view>		
	</view>
</template>

<script>
	
	import Service from '../../service.js'
	import { mapState, mapMutations } from 'vuex';
	
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState(['group_list'])
		},
		methods: {
			...mapMutations(['getGroupData']),
			addGroup(){
				uni.navigateTo({
					url:'/pages/main/group_add'
				})
			},
			// getGroup(){
			// 	let _this = this;
			// 	Service._post('Member/getGroupList',{},function(res){
			// 		_this.group_list = res.data
			// 	});
			// },
			editGroup(group_id){
				uni.navigateTo({
					url:'/pages/main/group_edit?group_id='+group_id
				})
			}
		},
		onShow() {
			this.getGroupData();
		}
	}
</script>

<style>
	page {
		background-image: var(--gradualBlue);
		width: 100vw;
		overflow: hidden;
	}

	.DrawerPage {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
	}

	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}

	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
	}

	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}

	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
	}

	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}

	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}

	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}

	.DrawerPage .nav {
		flex: 1;
	}

	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}

	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}

	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
	}
</style>
