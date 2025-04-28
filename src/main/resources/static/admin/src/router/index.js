import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
Vue.use(VueRouter)

const routes = [
    // 主页
    {
        path: '/',
        name: 'index',
        component: index,
        meta: {
            index: 0,
            title: '首页'
        }
    },

    // 登录
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            index: 0,
            title: '登录'
        }
    },

    	
	
    // 忘记密码
    {
        path: '/forgot',
        name: "forgot",
        component: forgot,
        meta: {
            index: 0,
            title: '忘记密码'
        }
    },

    // 修改密码
    {
        path: '/user/password',
        name: "password",
        component: () => import("../views/user/password.vue"),
        meta: {
            index: 0,
            title: '修改密码'
        }
    },

    // 视频播放页
    {
        path: "/media/video",
        name: "video",
        component: () => import('../views/media/video.vue'),
        meta: {
            index: 0,
            title: "视频"
        }
    },

    // 音频播放页
    {
        path: "/media/audio",
        name: "audio",
        component: () => import('../views/media/audio.vue'),
        meta: {
            index: 0,
            title: "音频"
        }
    },

            // 权限路由
        {
            path: '/auth/table',
            name: 'auth_table',
            component: () => import('../views/auth/table.vue'),
            meta: {
                index: 0,
                title: '权限列表'
            }
        },
        {
            path: '/auth/view',
            name: 'auth_view',
            component: () => import('../views/auth/view.vue'),
            meta: {
                index: 0,
                title: '权限详情'
            }
        },
    
    
                // 轮播图路由
        {
            path: '/slides/table',
            name: 'slides_table',
            component: () => import('../views/slides/table.vue'),
            meta: {
                index: 0,
                title: '轮播图列表'
            }
        },
        {
            path: '/slides/view',
            name: 'slides_view',
            component: () => import('../views/slides/view.vue'),
            meta: {
                index: 0,
                title: '轮播图详情'
            }
        },
                    // 文章路由
            {
                path: '/article/table',
                name: 'article_table',
                component: () => import('../views/article/table.vue'),
                meta: {
                    index: 0,
                    title: '社区资讯列表'
                }
            },
            {
                path: '/article/view',
                name: 'article_view',
                component: () => import('../views/article/view.vue'),
                meta: {
                    index: 0,
                    title: '社区资讯详情'
                }
            },

            // 文章分类路由
            {
                path: '/article_type/table',
                name: 'article_type_table',
                component: () => import('../views/article_type/table.vue'),
                meta: {
                    index: 0,
                    title: '社区资讯分类列表'
                }
            },
            {
                path: '/article_type/view',
                name: 'article_type_view',
                component: () => import('../views/article_type/view.vue'),
                meta: {
                    index: 0,
                    title: '社区资讯分类详情'
                }
            },
                            
            // 留言板路由
        {
            path: '/message/table',
            name: 'message_table',
            component: () => import('../views/message/table.vue'),
            meta: {
                index: 0,
                title: '在线留言列表'
            }
        },
        {
            path: '/message/view',
            name: 'message_view',
            component: () => import('../views/message/view.vue'),
            meta: {
                index: 0,
                title: '在线留言详情'
            }
        },
    
    
            // 公告路由
        {
            path: '/notice/table',
            name: 'notice_table',
            component: () => import('../views/notice/table.vue'),
            meta: {
                index: 0,
                title: '通知公告列表'
            }
        },
        {
            path: '/notice/view',
            name: 'notice_view',
            component: () => import('../views/notice/view.vue'),
            meta: {
                index: 0,
                title: '通知公告详情'
            }
        },
            	    
            // 评论路由
        {
            path: '/comment/table',
            name: 'comment_table',
            component: () => import('../views/comment/table.vue'),
            meta: {
                index: 0,
                title: '评论列表'
            }
        },
        {
            path: '/comment/view',
            name: 'comment_view',
            component: () => import('../views/comment/view.vue'),
            meta: {
                index: 0,
                title: '评论详情'
            }
        },
        	            // 普通用户路由
        {
            path: '/ordinary_user/table',
            name: 'ordinary_user_table',
            component: () => import('../views/ordinary_user/table.vue'),
            meta: {
                index: 0,
                title: '普通用户列表'
            }
        },
        {
            path: '/ordinary_user/view',
            name: 'ordinary_user_view',
            component: () => import('../views/ordinary_user/view.vue'),
            meta: {
                index: 0,
                title: '普通用户详情'
            }
        },
						            // 报修类型路由
        {
            path: '/type_of_repair_report/table',
            name: 'type_of_repair_report_table',
            component: () => import('../views/type_of_repair_report/table.vue'),
            meta: {
                index: 0,
                title: '报修类型列表'
            }
        },
        {
            path: '/type_of_repair_report/view',
            name: 'type_of_repair_report_view',
            component: () => import('../views/type_of_repair_report/view.vue'),
            meta: {
                index: 0,
                title: '报修类型详情'
            }
        },
						            // 报修申请路由
        {
            path: '/application_for_repair/table',
            name: 'application_for_repair_table',
            component: () => import('../views/application_for_repair/table.vue'),
            meta: {
                index: 0,
                title: '报修申请列表'
            }
        },
        {
            path: '/application_for_repair/view',
            name: 'application_for_repair_view',
            component: () => import('../views/application_for_repair/view.vue'),
            meta: {
                index: 0,
                title: '报修申请详情'
            }
        },
						            // 报修记录路由
        {
            path: '/repair_record/table',
            name: 'repair_record_table',
            component: () => import('../views/repair_record/table.vue'),
            meta: {
                index: 0,
                title: '报修记录列表'
            }
        },
        {
            path: '/repair_record/view',
            name: 'repair_record_view',
            component: () => import('../views/repair_record/view.vue'),
            meta: {
                index: 0,
                title: '报修记录详情'
            }
        },
						            // 交流论坛路由
        {
            path: '/exchange_forum/table',
            name: 'exchange_forum_table',
            component: () => import('../views/exchange_forum/table.vue'),
            meta: {
                index: 0,
                title: '交流论坛列表'
            }
        },
        {
            path: '/exchange_forum/view',
            name: 'exchange_forum_view',
            component: () => import('../views/exchange_forum/view.vue'),
            meta: {
                index: 0,
                title: '交流论坛详情'
            }
        },
						    	    // 用户路由
    {
        path: '/user/table',
        name: 'user_table',
        component: () => import('../views/user/table.vue'),
        meta: {
            index: 0,
            title: '用户列表'
        }
    },
    {
        path: '/user/view',
        name: 'user_view',
        component: () => import('../views/user/view.vue'),
        meta: {
            index: 0,
            title: '用户详情'
        }
    },
    {
        path: '/user/info',
        name: 'user_info',
        component: () => import('../views/user/info.vue'),
        meta: {
            index: 0,
            title: '个人信息'
        }
    },
    // 用户组路由
    {
        path: '/user_group/table',
        name: 'user_group_table',
        component: () => import('../views/user_group/table.vue'),
        meta: {
            index: 0,
            title: '用户组列表'
        }
    },
    {
        path: '/user_group/view',
        name: 'user_group_view',
        component: () => import('../views/user_group/view.vue'),
        meta: {
            index: 0,
            title: '用户组详情'
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let token = to.query.token;
    if (token) {
        $.db.set("token", token, 120);
    }
    next();
})

router.afterEach((to, from, next) => {
    let title = "一站式社区管理系统-admin";
    document.title = title;
})

export default router
