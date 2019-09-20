// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';
const API_URL = 'https://price.yugu.fun/index.php?s=/api/';


const getUsers = function() {
	let ret = '';
	ret = uni.getStorageSync(USERS_KEY);
	if (!ret) {
		ret = '[]';
	}
	return JSON.parse(ret);
}

const addUser = function(userInfo) {
	let users = getUsers();
	users.push({
		account: userInfo.account,
		password: userInfo.password
	});
	uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

const _get = function(url, data, success, fail, complete, check_login = false) {
	uni.showLoading();
	// 构造请求参数
	data = data || {};
	// 构造get请求
	let request = function() {
		data.token = uni.getStorageSync('token') ? uni.getStorageSync('token') : 0;
		uni.request({
			url: API_URL + url,
			header: {
				'content-type': 'application/json'
			},
			data: data,
			success: function(res) {
				if (res.statusCode !== 200 || typeof res.data !== 'object') {
					console.log(res);
					showError('网络请求出错');
					return false;
				}
				if (res.data.code === -1) {
					// 登录态失效, 重新登录
					uni.hideNavigationBarLoading();
					doLogin();
				} else if (res.data.code === 0) {
					showError(res.data.msg);
					return false;
				} else {
					success && success(res.data);
				}
			},
			fail: function(res) {
				// console.log(res);
				showError(res.errMsg, function() {
					fail && fail(res);
				});
			},
			complete: function(res) {
				uni.hideLoading();
				uni.hideNavigationBarLoading();
				complete && complete(res);
			},
		});
	};
	// 判断是否需要验证登录
	check_login ? doLogin(request) : request();
}

const _post = function(url, data, success, fail, complete) {
	uni.showNavigationBarLoading();
	data.token = wx.getStorageSync('token');
	wx.request({
		url: API_URL + url,
		header: {
			'content-type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
		data: data,
		success: function(res) {
			if (res.statusCode !== 200 || typeof res.data !== 'object') {
				showError('网络请求出错');
				return false;
			}
			if (res.data.code === -1) {
				// 登录态失效, 重新登录
				doLogin(function() {
					_post(url, data, success, fail);
				});
				return false;
			} else if (res.data.code === 0) {
				showError(res.data.msg, function() {
					fail && fail(res);
				});
				return false;
			}
			success && success(res.data);
		},
		fail: function(res) {
			// console.log(res);
			showError(res.errMsg, function() {
				fail && fail(res);
			});
		},
		complete: function(res) {
			uni.hideLoading();
			uni.hideNavigationBarLoading();
			complete && complete(res);
		}
	});
}

const showSuccess = function(msg, callback) {
	uni.showToast({
		title: msg,
		icon: 'success',
		success: function() {
			callback && (setTimeout(function() {
				callback();
			}, 1500));
		}
	});
}


const showError = function(msg, callback) {
	uni.showModal({
		title: '友情提示',
		content: msg,
		showCancel: false,
		success: function(res) {
			callback && (setTimeout(function() {
				callback();
			}, 1500));
		}
	});
	uni.hideLoading();
}


const doLogin = function(callback) {
	// 保存当前页面
	let pages = getCurrentPages();
	if (pages.length) {
		let currentPage = pages[pages.length - 1];
		"pages/login/login" != currentPage.route &&
			wx.setStorageSync("currentPage", currentPage);
	}
	// 跳转授权页面
	uni.navigateTo({
		url: "/pages/login/login"
	});
}



const toDecimal2 = function(x) {
	var f = parseFloat(x)
	if (isNaN(f)) {
		return false
	}
	var f = Math.round(x * 100) / 100
	var s = f.toString()
	var rs = s.indexOf('.')
	if (rs < 0) {
		rs = s.length
		s += '.'
	}
	while (s.length <= rs + 2) {
		s += '0'
	}
	return s
}








export default {
	getUsers,
	addUser,
	_post,
	_get,
	showSuccess,
	showError,
	doLogin,
	toDecimal2
}
