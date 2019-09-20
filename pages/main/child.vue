<template>
	<view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action text-title">
				<text class="cuIcon-title text-orange"></text>
				{{ barTitle }}
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="addMember">添加成员</button>
			</view>
		</view>
		<scroll-view scroll-y class="indexes" :scroll-with-animation="true" :enable-back-to-top="true">
			<block>
				<view :class="'indexItem-A'" :id="'indexes-A'" :data-index="A" v-for="item in group_list" :key="item.group_id">
					<view class="padding" v-if="item.child_member_list.length!=0">{{item.group_name}}</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item" :class="modalName=='move-box-'+ _item.member_id?'move-cur':''" v-for="(_item,_index) in item.child_member_list" :key="_item.member_id"
						 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + _item.member_id">
							<view class="cu-avatar round lg">{{ _item.manager[0] }}</view>
							<view class="content">
								<view class="text-grey">{{_item.manager}}</view>
								<view class="text-gray text-sm">
									<text class="cuIcon-friend text-red  margin-right-xs"></text> {{_item.username}}</view>
							</view>
							<view class="action">
								<text :class="modalName=='move-box-'+ _item.member_id?'double-arrow-right':'double-arrow-left'"></text>								
							</view>
							<view class="move">
								<view class="bg-grey" @click="editMember(_item.member_id)">修改</view>
								<view class="bg-red" @click="deleteMember(_item)">删除</view>
							</view>
						</view>
					</view>					
				</view>
			</block>
		</scroll-view>
		<!--  -->
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">确认</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					确定删除<span style="color: #E54D42;">{{delete_member.manager}}</span>吗
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="deleteMemberDo(delete_member.member_id)">确定</button>
		
					</view>
				</view>
			</view>
		</view>
		<!--  -->
	</view>
</template>

<script>
	
	import Service from '../../service.js'
	import { mapState, mapMutations } from 'vuex';
	
	export default {
		data() {
			return {				
				modalName: null,
				listTouchStart: 0,
				listTouchDirection: null,
				barTitle:'',
				delete_member:{
					manager:'',
					member_id:0
				}
			};
		},		
		computed:{
			...mapState(['group_list'])
		},
		methods: {			
			...mapMutations(['getGroupData']),
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			// 
			
			
			addMember(){
				uni.navigateTo({
					url:'/pages/member/add'
				})
			},
			
			editMember(member_id){
				uni.navigateTo({
					url:'/pages/member/edit?member_id='+member_id
				})
			},
			
			deleteMember(member){
				this.modalName = 'DialogModal1'
				this.delete_member = member
			},
			deleteMemberDo(member_id){
				let _this = this;
				Service._post('Member/deleteChild',{member_id:member_id},function(res){
					Service.showSuccess('成功',function(){
						_this.modalName = null;
						_this.getGroupData();
					})
				})
			},
			hideModal(e) {
				this.modalName = null
			},
		},
		onShow() {
			let member = uni.getStorageSync('member');
			if(member.type==0){
				this.barTitle = '内部经销商管理';
				uni.setNavigationBarTitle({
					title:'经销商管理'
				})
			}
			if(member.type==1){
				this.barTitle = '外部经销商管理';
				uni.setNavigationBarTitle({
					title:'外部经销商'
				})
			}
			
			// 获取groupList
			this.getGroupData();
		},
	}
</script>

<style>
	page {
		
	}

	.indexes {
		position: relative;
	}

	.indexBar {
		position: fixed;
		right: 0px;
		bottom: 0px;
		padding: 20upx 20upx 20upx 60upx;
		display: flex;
		align-items: center;
	}

	.indexBar .indexBar-box {
		width: 40upx;
		height: auto;
		background: #fff;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 20upx rgba(0, 0, 0, 0.1);
		border-radius: 10upx;
	}

	.indexBar-item {
		flex: 1;
		width: 40upx;
		height: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24upx;
		color: #888;
	}

	movable-view.indexBar-item {
		width: 40upx;
		height: 40upx;
		z-index: 9;
		position: relative;
	}

	movable-view.indexBar-item::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 10upx;
		height: 20upx;
		width: 4upx;
		background-color: #f37b1d;
	}

	.indexToast {
		position: fixed;
		top: 0;
		right: 80upx;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		width: 100upx;
		height: 100upx;
		border-radius: 10upx;
		margin: auto;
		color: #fff;
		line-height: 100upx;
		text-align: center;
		font-size: 48upx;
	}
	
	.double-arrow-right,
	.double-arrow-left{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 40upx;
		height: 40upx;
	}
	
	.double-arrow-right::before{
		content: '';
		width: 20upx;
		height: 20upx;
		border-top: 1px solid #CCCCCC;
		border-right: 1px solid #ccc;
		transform: rotate(45deg);
	}
	
	.double-arrow-right::after{
		content: '';
		width: 20upx;
		height: 20upx;
		border-top: 1px solid #CCCCCC;
		border-right: 1px solid #ccc;
		transform: rotate(45deg);
	}
	
	
	.double-arrow-left::before{
		content: '';
		width: 20upx;
		height: 20upx;
		border-top: 1px solid #CCCCCC;
		border-left: 1px solid #ccc;
		transform: rotate(-45deg);
	}
	
	.double-arrow-left::after{
		content: '';
		width: 20upx;
		height: 20upx;
		border-top: 1px solid #CCCCCC;
		border-left: 1px solid #ccc;
		transform: rotate(-45deg);
	}
	
	
</style>
