<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce">
							<el-col v-if="$check_field('get','ordinary_user') || $check_field('add','ordinary_user') || $check_field('set','ordinary_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="普通用户" prop="ordinary_user">
													<el-select v-if="(form['repair_record_id'] && $check_field('set','ordinary_user')) || (!form['repair_record_id'] && $check_field('add','ordinary_user'))" id="ordinary_user" v-model="form['ordinary_user']" :disabled="disabledObj['ordinary_user_isDisabled']">
							<el-option v-for="o in list_user_ordinary_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','ordinary_user')" id="ordinary_user" v-model="form['ordinary_user']" :disabled="true">
							<el-option v-for="o in list_user_ordinary_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','user_name') || $check_field('add','user_name') || $check_field('set','user_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户姓名" prop="user_name">
												<el-input id="user_name" v-model="form['user_name']" placeholder="请输入用户姓名"
							  v-if="(form['repair_record_id'] && $check_field('set','user_name')) || (!form['repair_record_id'] && $check_field('add','user_name'))" :disabled="disabledObj['user_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_name')">{{form['user_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','user_phone') || $check_field('add','user_phone') || $check_field('set','user_phone')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户电话" prop="user_phone">
												<el-input id="user_phone" v-model="form['user_phone']" placeholder="请输入用户电话"
							  v-if="(form['repair_record_id'] && $check_field('set','user_phone')) || (!form['repair_record_id'] && $check_field('add','user_phone'))" :disabled="disabledObj['user_phone_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_phone')">{{form['user_phone']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','repair_title') || $check_field('add','repair_title') || $check_field('set','repair_title')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="报修标题" prop="repair_title">
												<el-input id="repair_title" v-model="form['repair_title']" placeholder="请输入报修标题"
							  v-if="(form['repair_record_id'] && $check_field('set','repair_title')) || (!form['repair_record_id'] && $check_field('add','repair_title'))" :disabled="disabledObj['repair_title_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','repair_title')">{{form['repair_title']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','repair_address') || $check_field('add','repair_address') || $check_field('set','repair_address')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="报修地址" prop="repair_address">
								<el-input type="textarea" id="repair_address" v-model="form['repair_address']" placeholder="请输入报修地址"
						v-if="(form['repair_record_id'] && $check_field('set','repair_address')) || (!form['repair_record_id'] && $check_field('add','repair_address'))" :disabled="disabledObj['repair_address_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','repair_address')">{{form['repair_address']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','fault_description') || $check_field('add','fault_description') || $check_field('set','fault_description')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="故障描述" prop="fault_description">
								<el-input type="textarea" id="fault_description" v-model="form['fault_description']" placeholder="请输入故障描述"
						v-if="(form['repair_record_id'] && $check_field('set','fault_description')) || (!form['repair_record_id'] && $check_field('add','fault_description'))" :disabled="disabledObj['fault_description_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','fault_description')">{{form['fault_description']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','repair_date') || $check_field('add','repair_date') || $check_field('set','repair_date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="报修日期" prop="repair_date">
								<el-date-picker :disabled="disabledObj['repair_date_isDisabled']" v-if="(form['repair_record_id'] && $check_field('set','repair_date')) || (!form['repair_record_id'] && $check_field('add','repair_date'))" id="repair_date"
						v-model="form['repair_date']" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
					</el-date-picker>
					<div v-else-if="$check_field('get','repair_date')">{{form['repair_date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','maintenance_progress') || $check_field('add','maintenance_progress') || $check_field('set','maintenance_progress')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="维修进度" prop="maintenance_progress">
								<el-select id="maintenance_progress" v-model="form['maintenance_progress']"
						v-if="(form['repair_record_id'] && $check_field('set','maintenance_progress')) || (!form['repair_record_id'] && $check_field('add','maintenance_progress'))">
						<el-option v-for="o in list_maintenance_progress" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','maintenance_progress')">{{form['maintenance_progress']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','progress_description') || $check_field('add','progress_description') || $check_field('set','progress_description')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="进度描述" prop="progress_description">
								<el-input type="textarea" id="progress_description" v-model="form['progress_description']" placeholder="请输入进度描述"
						v-if="(form['repair_record_id'] && $check_field('set','progress_description')) || (!form['repair_record_id'] && $check_field('add','progress_description'))" :disabled="disabledObj['progress_description_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','progress_description')">{{form['progress_description']}}</div>
							</el-form-item>
			</el-col>
						
	
	
		
		
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/repair_record/view','set') || $check_action('/repair_record/view','add') || $check_option('/repair_record/table','examine')">
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
				field: "repair_record_id",
				url_add: "~/api/repair_record/add?",
				url_set: "~/api/repair_record/set?",
				url_get_obj: "~/api/repair_record/get_obj?",
				url_upload: "~/api/repair_record/upload?",

				query: {
					"repair_record_id": 0,
				},

				form: {
								"ordinary_user": 0, // 普通用户
										"user_name":  '', // 用户姓名
										"user_phone":  '', // 用户电话
										"repair_title":  '', // 报修标题
										"repair_address":  '', // 报修地址
										"fault_description":  '', // 故障描述
										"repair_date":  '', // 报修日期
										"maintenance_progress":  '', // 维修进度
										"progress_description":  '', // 进度描述
											"repair_record_id": 0, // ID
													},
				disabledObj:{
								"ordinary_user_isDisabled": false,
										"user_name_isDisabled": false,
										"user_phone_isDisabled": false,
										"repair_title_isDisabled": false,
										"repair_address_isDisabled": false,
										"fault_description_isDisabled": false,
										"repair_date_isDisabled": false,
										"maintenance_progress_isDisabled": false,
										"progress_description_isDisabled": false,
										},

	
					// 用户列表
				list_user_ordinary_user: [],
						
				
				
				
				
				
										// 维修进度选项列表
				list_maintenance_progress: ['待维修','维修中','已完成'],
	
				
			
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
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
									// 获取缓存数据附加
				form = $.db.get("form");
									$.push(this.form ,form);
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
														        if (this.form["repair_date"] && this.form["repair_date"].indexOf("-")===-1){
          this.form["repair_date"] = this.$toTime(parseInt(this.form["repair_date"]),"yyyy-MM-dd")
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

																																				if(json.result.obj["repair_date"]=="0000-00-00"){
				  json.result.obj["repair_date"] = null;
				}
				if(parseInt(json.result.obj["repair_date"]) > 9999){
					json.result.obj["repair_date"] = this.$toTime(parseInt(json.result.obj["repair_date"]),"yyyy-MM-dd")
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
																																																																													if (!param.repair_date){
					return "报修日期不能为空";
				}
																																						return null;
			},

			is_view(){
				// var bl = this.user_group == "管理员";
				var bl = false;

				if(!bl){
					bl = this.$check_action('/repair_record/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/repair_record/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/repair_record/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/repair_record/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/repair_record/view','get');
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
