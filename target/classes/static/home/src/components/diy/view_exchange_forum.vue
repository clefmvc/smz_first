<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce">
							<el-col v-if="$check_field('get','ordinary_user') || $check_field('add','ordinary_user') || $check_field('set','ordinary_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="普通用户" prop="ordinary_user">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_ordinary_user(form['ordinary_user']) }}
							<el-select v-if="(form['exchange_forum_id'] && $check_field('set','ordinary_user')) || (!form['exchange_forum_id'] && $check_field('add','ordinary_user'))" id="ordinary_user" v-model="form['ordinary_user']" :disabled="disabledObj['ordinary_user_isDisabled']">
								<el-option v-for="o in list_user_ordinary_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','ordinary_user')" id="ordinary_user" v-model="form['ordinary_user']" :disabled="true">
								<el-option v-for="o in list_user_ordinary_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="ordinary_user" v-model="form['ordinary_user']" :disabled="disabledObj['ordinary_user_isDisabled']">
							<el-option v-for="o in list_user_ordinary_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','user_name') || $check_field('add','user_name') || $check_field('set','user_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户姓名" prop="user_name">
												<el-input id="user_name" v-model="form['user_name']" placeholder="请输入用户姓名"
							  v-if="(form['exchange_forum_id'] && $check_field('set','user_name')) || (!form['exchange_forum_id'] && $check_field('add','user_name'))" :disabled="disabledObj['user_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_name')">{{form['user_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','user_phone') || $check_field('add','user_phone') || $check_field('set','user_phone')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户电话" prop="user_phone">
												<el-input id="user_phone" v-model="form['user_phone']" placeholder="请输入用户电话"
							  v-if="(form['exchange_forum_id'] && $check_field('set','user_phone')) || (!form['exchange_forum_id'] && $check_field('add','user_phone'))" :disabled="disabledObj['user_phone_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_phone')">{{form['user_phone']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','user_gender') || $check_field('add','user_gender') || $check_field('set','user_gender')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户性别" prop="user_gender">
												<el-input id="user_gender" v-model="form['user_gender']" placeholder="请输入用户性别"
							  v-if="(form['exchange_forum_id'] && $check_field('set','user_gender')) || (!form['exchange_forum_id'] && $check_field('add','user_gender'))" :disabled="disabledObj['user_gender_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_gender')">{{form['user_gender']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','forum_title') || $check_field('add','forum_title') || $check_field('set','forum_title')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="论坛标题" prop="forum_title">
												<el-input id="forum_title" v-model="form['forum_title']" placeholder="请输入论坛标题"
							  v-if="(form['exchange_forum_id'] && $check_field('set','forum_title')) || (!form['exchange_forum_id'] && $check_field('add','forum_title'))" :disabled="disabledObj['forum_title_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','forum_title')">{{form['forum_title']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','type_of_communication') || $check_field('add','type_of_communication') || $check_field('set','type_of_communication')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="交流类型" prop="type_of_communication">
								<el-select id="type_of_communication" v-model="form['type_of_communication']"
						v-if="(form['exchange_forum_id'] && $check_field('set','type_of_communication')) || (!form['exchange_forum_id'] && $check_field('add','type_of_communication'))">
						<el-option v-for="o in list_type_of_communication" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','type_of_communication')">{{form['type_of_communication']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','release_date') || $check_field('add','release_date') || $check_field('set','release_date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="发布日期" prop="release_date">
								<el-date-picker :disabled="disabledObj['release_date_isDisabled']" v-if="(form['exchange_forum_id'] && $check_field('set','release_date')) || (!form['exchange_forum_id'] && $check_field('add','release_date'))" id="release_date"
						v-model="form['release_date']" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
					</el-date-picker>
					<div v-else-if="$check_field('get','release_date')">{{form['release_date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','cover_image') || $check_field('add','cover_image') || $check_field('set','cover_image')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="封面图片" prop="cover_image">
								<el-upload :disabled="disabledObj['cover_image_isDisabled']" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_cover_image"
						:show-file-list="false" v-if="(form['exchange_forum_id'] && $check_field('set','cover_image')) || (!form['exchange_forum_id'] && $check_field('add','cover_image'))">
						<img id="cover_image" v-if="form['cover_image']" :src="$fullUrl(form['cover_image'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','cover_image')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['cover_image'])" :preview-src-list="[$fullUrl(form['cover_image'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','content_details') || $check_field('add','content_details') || $check_field('set','content_details')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="内容详情" prop="content_details">
								<el-input type="textarea" id="content_details" v-model="form['content_details']" placeholder="请输入内容详情"
						v-if="(form['exchange_forum_id'] && $check_field('set','content_details')) || (!form['exchange_forum_id'] && $check_field('add','content_details'))" :disabled="disabledObj['content_details_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','content_details')">{{form['content_details']}}</div>
							</el-form-item>
			</el-col>
						
	
	
		
		
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/exchange_forum/view','set') || $check_action('/exchange_forum/view','add') || $check_option('/exchange_forum/table','examine')">
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
				<el-form-item v-else>
					<el-button @click="cancel()">返回</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "exchange_forum_id",
				url_add: "~/api/exchange_forum/add?",
				url_set: "~/api/exchange_forum/set?",
				url_get_obj: "~/api/exchange_forum/get_obj?",
				url_upload: "~/api/exchange_forum/upload?",

				query: {
					"exchange_forum_id": 0,
				},

				form: {
								"ordinary_user": 0, // 普通用户
										"user_name":  '', // 用户姓名
										"user_phone":  '', // 用户电话
										"user_gender":  '', // 用户性别
										"forum_title":  '', // 论坛标题
										"type_of_communication":  '', // 交流类型
										"release_date":  '', // 发布日期
										"cover_image":  '', // 封面图片
										"content_details":  '', // 内容详情
											"exchange_forum_id": 0, // ID
													},
				disabledObj:{
								"ordinary_user_isDisabled": false,
										"user_name_isDisabled": false,
										"user_phone_isDisabled": false,
										"user_gender_isDisabled": false,
										"forum_title_isDisabled": false,
										"type_of_communication_isDisabled": false,
										"release_date_isDisabled": false,
										"cover_image_isDisabled": false,
										"content_details_isDisabled": false,
										},

	
					// 用户列表
				list_user_ordinary_user: [],
						// 用户组
				group_user_ordinary_user: "",
						
				
				
				
										// 交流类型选项列表
				list_type_of_communication: ['聊天','其他'],
	
				
				
				
			
			}
		},
		methods: {

	
	
				/**
			 * 获取普通用户用户列表
			 */
			async get_list_user_ordinary_user() {
                var json = await this.$get("~/api/user/get_list?user_group=普通用户");
                if(json.result && json.result.list){
                    this.list_user_ordinary_user = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					/**
			 * 获取普通用户用户组
			 */
			async get_group_user_ordinary_user() {
							this.form["ordinary_user"] = this.$store.state.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=普通用户");
				if(json.result && json.result.obj){
					this.group_user_ordinary_user = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_ordinary_user(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_ordinary_user.source_table+"/get_obj?"
				this.$get(url, user_id, function(res) {
					if (res.result && res.result.obj) {
						var arr = []
						for (let key in res.result.obj) {
							arr.push(key)
						}
						var arrForm = []
									for (let key in _this.form) {
							arrForm.push(key)
						}
												_this.form["ordinary_user"] = id
									_this.disabledObj['ordinary_user' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "ordinary_user") {
			                      _this.form[arrForm[j]] = res.result.obj[arr[i]]
			                      _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								  break;
								} else {
								  _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								}
							  }
							}
						  }
						}
					}
				});
			},
					get_user_ordinary_user(id){
				var obj = this.list_user_ordinary_user.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
			
	
			
	
			
	
			
	
						/**
			 * 上传封面图片
			 * @param {Object} param 图片参数
			 */
			upload_cover_image(param){
									this.uploadFile(param.file, "cover_image");
								},
	
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
												if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
								this.form[key] = form[dbKey]
							}
							if(dbKey === "source_table"){
								this.form['source_table'] = form[dbKey];
							}
							if(dbKey === "source_id"){
								this.form['source_id'] = form[dbKey];
							}
							if(dbKey === "source_user_id"){
								this.form['source_user_id'] = form[dbKey];
							}
						})
					})
				}
														        if (this.form["release_date"] && this.form["release_date"].indexOf("-")===-1){
          this.form["release_date"] = this.$toTime(parseInt(this.form["release_date"]),"yyyy-MM-dd")
        }
									$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){

																																				if(json.result.obj["release_date"]=="0000-00-00"){
				  json.result.obj["release_date"] = null;
				}
				if(parseInt(json.result.obj["release_date"]) > 9999){
					json.result.obj["release_date"] = this.$toTime(parseInt(json.result.obj["release_date"]),"yyyy-MM-dd")
				}
														

			},

																																																																					async submit(param, func){
				if (!param) {
					param = this.form;
				}
								var pm = this.events("submit_before", Object.assign({}, param)) || param;
				var msg = await this.events("submit_check", pm);
				var ret;
				if (msg) {
					this.$toast(msg, 'danger');
				} else {
																																																																							ret = this.events("submit_main", pm, func);
				}
				return ret;
			},
			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
						submit_check(param) {
																																																																													if (!param.release_date){
					return "发布日期不能为空";
				}
																																						return null;
			},

			is_view(){
				// var bl = this.user_group == "管理员";
				var bl = false;

				if(!bl){
					bl = this.$check_action('/exchange_forum/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/exchange_forum/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/exchange_forum/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/exchange_forum/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/exchange_forum/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
					this.get_list_user_ordinary_user();
					this.get_group_user_ordinary_user();
																					},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	
	.img_multiple{
		overflow: hidden;
	}
	.img_multiple .img_block{
		float: left;
		margin-right: 5px;
		margin-bottom: 5px;
		position: relative;
	}
	.img_multiple .img_block img{
		height: 100px;
		width: auto;
	}
	.img_multiple .img_del{
		position: absolute;
		top: 5px;
		right: 5px;
		width: 20px;
		height: 20px;
		background: #0000008a;
		color: #fff;
		line-height: 20px;
		text-align: center;
		border-radius: 100%;
		cursor: pointer;
	}




</style>
