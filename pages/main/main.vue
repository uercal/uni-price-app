<template>
	<view class="bg-gradual-blue">
		<scroll-view scroll-y class="DrawerPage" :class="modalName == 'viewModal' ? 'show' : ''">
			<view class="cu-bar bg-white solid-bottom">
				<view class="action text-title text-bold">
					<text class="cuIcon-title text-orange"></text>
					商品列表
				</view>
				<view class="action">
					<button v-if="hasLogin" class="cu-btn bg-green shadow" @tap="showModal" data-target="viewModal">个人中心</button>
					<button v-if="!hasLogin" class="cu-btn bg-green shadow" @tap="login">登陆</button>
				</view>
			</view>
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				<view class="cu-item arrow">
					<view class="content">
						<text class="text-grey text-title">商品名称</text>
						<text class="text-grey text-title">价格</text>
					</view>
				</view>
				<view class="cu-item arrow" v-for="(item, index) in goods" :key="index">
					<view class="content">
						<!-- <text class="cuIcon-github text-grey"></text> -->
						<text class="text-grey text-num">{{ item.goods_name }}</text>
						<text class="text-grey text-num">{{ item.price ? item.price + '元' : '未定价' }}</text>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="DrawerClose" :class="modalName == 'viewModal' ? 'show' : ''" @tap="hideModal"><text class="cuIcon-pullright"></text></view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName == 'viewModal' ? 'show' : ''" style="background: #fff;">
			<view class="avatar"><image :src="avatar" mode=""></image></view>
			<view class="info-bonus" v-if="member">
				<text class="type">{{ member.type_text }}</text>
				<text class="name">{{ member.manager }}</text>
			</view>
			<view class="cu-list grid" :class="['col-' + gridCol, gridBorder ? '' : 'no-border']">
				<view class="cu-item" v-for="(item, index) in cuIconList" :key="index" v-if="item.invalid" @click="method(item.method)">
					<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color]">
						<!-- <view class="cu-tag badge" v-if="item.badge != 0">
							<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
						</view> -->
					</view>
					<text>{{ item.name }}</text>
				</view>				
				<!-- <button class="cu-item" open-type="contact" style="width:33.33%;line-height: unset;background: #fff;">
					<view :class="['cuIcon-servicefill', 'text-mauve']"></view>
					<text>客服</text>
				</button> -->
			</view>
		</scroll-view>

		<!--  -->
		<view class="cu-modal" :class="dialogNmae == 'DialogModal1' ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">确认</view>
					<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
				</view>
				<view class="padding-xl text-black">确定退出账号吗</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hidedialog">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="logoutDo">确定</button>
					</view>
				</view>
			</view>
		</view>
		<!--  -->
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	data() {
		return {
			modalName: null,
			dialogNmae: null,
			cuIconList: [
				{
					cuIcon: 'moneybagfill',
					color: 'red',
					badge: 0,
					name: '价格管理',
					method: 'price',
					permission: [0]
				},
				{
					cuIcon: 'group_fill',
					color: 'orange',
					badge: 0,
					name: '分组管理',
					method: 'group',
					permission: [0, 1]
				},
				{
					cuIcon: 'friendadd',
					color: 'yellow',
					badge: 0,
					name: '经销商管理',
					method: 'child',
					permission: [0, 1]
				},
				{
					cuIcon: 'settingsfill',
					color: 'olive',
					badge: 0,
					name: '密码修改',
					method: 'password',
					permission: [0, 1, 2]
				},
				{
					cuIcon: 'exit',
					color: 'grey',
					badge: 0,
					name: '退出',
					method: 'logout',
					permission: [0, 1, 2]
				}
			],
			gridCol: 3,
			gridBorder: false
		};
	},
	computed: mapState(['hasLogin', 'userName', 'goods', 'avatar', 'member', 'type']),

	methods: {
		...mapMutations(['getIndexData']),
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		login() {
			uni.navigateTo({
				url: '/pages/login/login'
			});
		},
		method(m) {
			console.log(m);
			let url = '/pages/main/' + m;
			if (m == 'logout') {
				this.dialogNmae = 'DialogModal1';
			} else {
				uni.navigateTo({
					url: url
				});
			}
		},
		logoutDo() {
			uni.removeStorageSync('token');
			uni.removeStorageSync('member');
			uni.reLaunch({
				url: '/pages/main/main'
			});
		},
		hidedialog() {
			this.dialogNmae = null;
		}		
	},
	onShow() {
		let _this = this;
		this.getIndexData(function(){
			_this.cuIconList.map(e=>{
				e.invalid = e.permission.indexOf(_this.type)!=-1?true:false
			})
		});
	},
	onLoad() {		
		
	}
};
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
	content: '';
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

.cu-item.arrow::before {
	content: '' !important;
}
.cu-list.menu > .cu-item .content {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.cu-list.menu > .cu-item.arrow {
	padding: 0upx 40upx;
}
.text-title {
	font-size: 32upx;
	color: #353535;
}

.text-num {
	font-size: 26upx;
	color: #666666;
}

.avatar {
	height: 120upx;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.avatar > image {
	height: 120upx;
	width: 120upx;
	border-radius: 50%;
}

.info-bonus {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.info-bonus > .type {
	margin-top: 10upx;
	font-size: 14px;
	color: #888888;
}

.info-bonus > .name {
	margin-top: 5upx;
	font-size: 18px;
	color: #333333;
}
</style>
