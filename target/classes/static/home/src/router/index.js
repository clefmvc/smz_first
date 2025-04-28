import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue'
import login from '../views/account/login.vue';
Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name: 'index',
		component: index
	},
	// 登录
	{
		path: '/account/login',
		name: 'login',
		component: login
	},
	// 忘记密码
	{
		path: '/account/forgot',
		name: 'forgot',
		component: () => import('../views/account/forgot.vue')
	},
	// 注册账号
	{
		path: '/account/register',
		name: 'register',
		component: () => import('../views/account/register.vue')
	},
		// 媒体图片
	{
		path: '/media/image',
		name: 'media_image',
		component: () => import('../views/media/image.vue')
	},
	// 音乐
	{
		path: '/media/music',
		name: 'media_music',
		component: () => import('../views/media/music.vue')
	},
	// 媒体视频
	{
		path: '/media/video',
		name: 'media_video',
		component: () => import('../views/media/video.vue')
	},
	// 媒体视频
	{
		path: '/user_center/index',
		name: 'user_center_index',
		component: () => import('../views/user_center/index.vue')
	},
	// 文章路由
	{
		path: '/article/list',
		name: 'article_list',
		component: () => import('../views/article/list.vue')
	},
	{
		path: '/article/details',
		name: 'article_details',
		component: () => import('../views/article/details.vue')
	},
	// 浏览网站
	// 收藏路由
	{
		path: '/user/collect',
		name: 'collect_list',
		component: () => import('../views/user/collect.vue')
	},


	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue')
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue')
	},

	


	 // 留言路由
	 {
	 	path: '/message/list',
	 	name: 'message_list',
	 	component: () => import('../views/message/list.vue')
	 },
	 {
		path: '/message/edit',
		name: 'message_edit',
		component: () => import('../views/message/edit.vue')
	 },
	// 留言板路由
	{
		path: '/message/table',
		name: 'message_table',
		component: () => import('../views/message/table.vue')
	},
	{
		path: '/message/view',
		name: 'message_view',
		component: () => import('../views/message/view.vue')
	},

	// 公告路由
	{
		path: '/notice/list',
		name: 'notice_list',
		component: () => import('../views/notice/list.vue')
	},
	{
		path: '/notice/details',
		name: 'notice_details',
		component: () => import('../views/notice/details.vue')
	},
	// 天气预报
	{
		path: '/web/index',
		name: 'web_index',
		component: () => import('../views/web/index.vue')
	},
	// 普通用户表格路由
	{
		path: '/ordinary_user/table',
		name: '/ordinary_user_table',
		component: () => import('../views/ordinary_user/table.vue')
	},
	// 普通用户详情路由
	{
		path: '/ordinary_user/view',
		name: '/ordinary_user_view',
		component: () => import('../views/ordinary_user/view.vue')
	},
	
	
		
		
		
	// 报修类型表格路由
	{
		path: '/type_of_repair_report/table',
		name: '/type_of_repair_report_table',
		component: () => import('../views/type_of_repair_report/table.vue')
	},
	// 报修类型详情路由
	{
		path: '/type_of_repair_report/view',
		name: '/type_of_repair_report_view',
		component: () => import('../views/type_of_repair_report/view.vue')
	},
	
	
		
		
		
	// 报修申请表格路由
	{
		path: '/application_for_repair/table',
		name: '/application_for_repair_table',
		component: () => import('../views/application_for_repair/table.vue')
	},
	// 报修申请详情路由
	{
		path: '/application_for_repair/view',
		name: '/application_for_repair_view',
		component: () => import('../views/application_for_repair/view.vue')
	},
		// 报修申请添加路由
	{
		path: '/application_for_repair/edit',
		name: '/application_for_repair_edit',
		component: () => import('../views/application_for_repair/edit.vue')
	},
	
	
		
		
		
	// 报修记录表格路由
	{
		path: '/repair_record/table',
		name: '/repair_record_table',
		component: () => import('../views/repair_record/table.vue')
	},
	// 报修记录详情路由
	{
		path: '/repair_record/view',
		name: '/repair_record_view',
		component: () => import('../views/repair_record/view.vue')
	},
	
	
		
		
		
	// 交流论坛表格路由
	{
		path: '/exchange_forum/table',
		name: '/exchange_forum_table',
		component: () => import('../views/exchange_forum/table.vue')
	},
	// 交流论坛详情路由
	{
		path: '/exchange_forum/view',
		name: '/exchange_forum_view',
		component: () => import('../views/exchange_forum/view.vue')
	},
	
		// 交流论坛列表路由
	{
		path: '/exchange_forum/list',
		name: '/exchange_forum_list',
		component: () => import('../views/exchange_forum/list.vue')
	},
	
		// 交流论坛详情路由
	{
		path: '/exchange_forum/details',
		name: '/exchange_forum_details',
		component: () => import('../views/exchange_forum/details.vue')
	},
		
		
		

	// 用户路由
	{
		path: '/user/index',
		name: 'user_index',
		component: () => import('../views/user/index.vue')
	},
	// 基本信息
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue')
	},
	// 找回密码
	{
		path: '/user/password',
		name: 'user_password',
		component: () => import('../views/user/password.vue')
	},

	// 搜索
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/index.vue')
	},
	// 局部搜索
	{
		path: '/search/details',
		name: 'search_details',
		component: () => import('../views/search/details.vue')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

router.afterEach((to, from, next) => {
	let title = "一站式社区管理系统-home";
	document.title = title;
	document.logo = "一站式社区管理系统"
})

export default router
