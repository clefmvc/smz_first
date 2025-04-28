<template>
	<el-main class="bg edit_wrap comtable_e">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce"> 
							<el-col v-if="$check_field('get','ordinary_user') || $check_field('add','ordinary_user') || $check_field('set','ordinary_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="普通用户" prop="ordinary_user">
																					<div v-if="user_group !== '管理员'">
							{{ get_user_session_ordinary_user(form['ordinary_user']) }}
							<el-select v-if="(form['application_for_repair_id'] && $check_field('set','ordinary_user')) || (!form['application_for_repair_id'] && $check_field('add','ordinary_user'))" id="ordinary_user" v-model="form['ordinary_user']" :disabled="disabledObj['ordinary_user_isDisabled']">
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
							  v-if="(form['application_for_repair_id'] && $check_field('set','user_name')) || (!form['application_for_repair_id'] && $check_field('add','user_name'))" :disabled="disabledObj['user_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_name')">{{form['user_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','user_phone') || $check_field('add','user_phone') || $check_field('set','user_phone')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="用户电话" prop="user_phone">
															<el-input id="user_phone" v-model="form['user_phone']" placeholder="请输入用户电话"
							  v-if="(form['application_for_repair_id'] && $check_field('set','user_phone')) || (!form['application_for_repair_id'] && $check_field('add','user_phone'))" :disabled="disabledObj['user_phone_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_phone')">{{form['user_phone']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','repair_title') || $check_field('add','repair_title') || $check_field('set','repair_title')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="报修标题" prop="repair_title">
															<el-input id="repair_title" v-model="form['repair_title']" placeholder="请输入报修标题"
							  v-if="(form['application_for_repair_id'] && $check_field('set','repair_title')) || (!form['application_for_repair_id'] && $check_field('add','repair_title'))" :disabled="disabledObj['repair_title_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','repair_title')">{{form['repair_title']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','type_of_repair_report') || $check_field('add','type_of_repair_report') || $check_field('set','type_of_repair_report')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="报修类型" prop="type_of_repair_report">
											<el-select id="type_of_repair_report" v-model="form['type_of_repair_report']"						v-if="(form['application_for_repair_id'] && $check_field('set','type_of_repair_report')) || (!form['application_for_repair_id'] && $check_field('add','type_of_repair_report'))">
						<el-option v-for="o in list_type_of_repair_report" :key="o['type_of_repair_report']" :label="o['type_of_repair_report']"
							:value="o['type_of_repair_report']">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','type_of_repair_report')">{{form['type_of_repair_report']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','number_of_repair_reports') || $check_field('add','number_of_repair_reports') || $check_field('set','number_of_repair_reports')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="报修次数" prop="number_of_repair_reports">
											<el-select id="number_of_repair_reports" v-model="form['number_of_repair_reports']"
						v-if="(form['application_for_repair_id'] && $check_field('set','number_of_repair_reports')) || (!form['application_for_repair_id'] && $check_field('add','number_of_repair_reports'))">
						<el-option v-for="o in list_number_of_repair_reports" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','number_of_repair_reports')">{{form['number_of_repair_reports']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','repair_picture') || $check_field('add','repair_picture') || $check_field('set','repair_picture')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="报修图片" prop="repair_picture">
											<el-upload :disabled="disabledObj['repair_picture_isDisabled']" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_repair_picture"
						:show-file-list="false" v-if="(form['application_for_repair_id'] && $check_field('set','repair_picture')) || (!form['application_for_repair_id'] && $check_field('add','repair_picture'))">
						<img id="repair_picture" v-if="form['repair_picture']" :src="$fullUrl(form['repair_picture'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','repair_picture')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['repair_picture'])" :preview-src-list="[$fullUrl(form['repair_picture'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','repair_address') || $check_field('add','repair_address') || $check_field('set','repair_address')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="报修地址" prop="repair_address">
											<el-input type="textarea" id="repair_address" v-model="form['repair_address']" placeholder="请输入报修地址"
						v-if="(form['application_for_repair_id'] && $check_field('set','repair_address')) || (!form['application_for_repair_id'] && $check_field('add','repair_address'))" :disabled="disabledObj['repair_address_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','repair_address')">{{form['repair_address']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','fault_description') || $check_field('add','fault_description') || $check_field('set','fault_description')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="故障描述" prop="fault_description">
											<el-input type="textarea" id="fault_description" v-model="form['fault_description']" placeholder="请输入故障描述"
						v-if="(form['application_for_repair_id'] && $check_field('set','fault_description')) || (!form['application_for_repair_id'] && $check_field('add','fault_description'))" :disabled="disabledObj['fault_description_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','fault_description')">{{form['fault_description']}}</div>
							</el-form-item>
			</el-col>
								<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核状态" prop="examine_state">
					<el-select id="examine_state" v-model="form['examine_state']"
						v-if="(form['examine_state'] && $check_examine()) || (!form['examine_state'] && $check_examine())" :disabled="true">
						<el-option key="未审核" label="未审核" value="未审核"></el-option>
						<el-option key="已通过" label="已通过" value="已通过"></el-option>
						<el-option key="未通过" label="未通过" value="未通过"></el-option>
					</el-select>
					<div v-else>{{form["examine_state"]}}</div>
				</el-form-item>
			</el-col>
					<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核回复" prop="examine_reply">
					<el-input id="examine_reply" v-model="form['examine_reply']" placeholder="请输入审核回复"
						v-if="(form['examine_reply'] && $check_examine()) || (!form['examine_reply'] && $check_examine())" :disabled="true"></el-input>
					<div v-else>{{form["examine_reply"]}}</div>
				</el-form-item>
			</el-col>
	
	
	
		
		
						<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp" v-if="!form['source_user_id'] && 1 > 0">
			  <el-form-item label="维修记录限次">
				<el-input id="limit_times" v-model="form['repair_record_limit_times']" placeholder="维修记录限制次数，0为不限"
						  v-if="$check_option('/application_for_repair/view','can_limits')"
				></el-input>
				<div v-else-if="$check_action('/application_for_repair/view','get')" v-html="form['repair_record_limit_times']"></div>
			  </el-form-item>
			</el-col>
			
	
	
		
		
	
		</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/application_for_repair/view','set') || $check_action('/application_for_repair/view','add') || $check_option('/application_for_repair/table','examine')">
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
				field: "application_for_repair_id",
				url_add: "~/api/application_for_repair/add?",
				url_set: "~/api/application_for_repair/set?",
				url_get_obj: "~/api/application_for_repair/get_obj?",
				url_upload: "~/api/application_for_repair/upload?",

				query: {
					"application_for_repair_id": 0,
				},

				form: {
								"ordinary_user": 0, // 普通用户
										"user_name":  '', // 用户姓名
										"user_phone":  '', // 用户电话
										"repair_title":  '', // 报修标题
										"type_of_repair_report":  '', // 报修类型
										"number_of_repair_reports":  '', // 报修次数
										"repair_picture":  '', // 报修图片
										"repair_address":  '', // 报修地址
										"fault_description":  '', // 故障描述
									"examine_state": "未审核",
							"examine_reply": "",
							"application_for_repair_id": 0, // ID
													"repair_record_limit_times": 1, // 维修记录限制次数
												},
				disabledObj:{
								"ordinary_user_isDisabled": false,
										"user_name_isDisabled": false,
										"user_phone_isDisabled": false,
										"repair_title_isDisabled": false,
										"type_of_repair_report_isDisabled": false,
										"number_of_repair_reports_isDisabled": false,
										"repair_picture_isDisabled": false,
										"repair_address_isDisabled": false,
										"fault_description_isDisabled": false,
										},

	
					// 用户列表
				list_user_ordinary_user: [],
						// 用户组
				group_user_ordinary_user: "",
					
			
			
									// 报修类型选项列表
				list_type_of_repair_report: [""],
	
									// 报修次数选项列表
				list_number_of_repair_reports: ['1'],
	
			
			
			
		
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
							this.form["ordinary_user"] = this.user.user_id;
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
			 * 获取报修类型列表
			 */
			
						async get_list_type_of_repair_report() {
				var json = await this.$get("~/api/type_of_repair_report/get_list?");
				if(json.result && json.result.list){
					this.list_type_of_repair_report = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
								
			
	
						/**
			 * 上传报修图片
			 * @param {Object} param 图片参数
			 */
			upload_repair_picture(param){
									this.uploadFile(param.file, "repair_picture");
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
																						$.db.del("form");

				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){
																																													

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
					
																																																																																																									return null;
			},

			is_view(){
				// var bl = this.user_group == "管理员";
				var bl = false;

				if(!bl){
					bl = this.$check_action('/application_for_repair/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/application_for_repair/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/application_for_repair/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/application_for_repair/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/application_for_repair/view','get');
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
													this.get_list_type_of_repair_report();
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
