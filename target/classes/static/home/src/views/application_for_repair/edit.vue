<template>
	<div class="diy_edit page_application_for_repair" id="application_for_repair_edit">
		<div class='warp'>
			<div class='container'>
				<div class='row diy_edit_content_box'>
						<div v-if="$check_field('set','ordinary_user') || $check_field('add','ordinary_user') || $check_field('get','ordinary_user')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								普通用户:
							</span>
						</div>
						<div class="diy_field diy_down">
							<select id="form_ordinary_user" :disabled="disabledObj['ordinary_user_isDisabled']" v-model="form['ordinary_user']" v-if="(form['ordinary_user'] && $check_field('set','ordinary_user')) || (!form['ordinary_user'] && $check_field('add','ordinary_user'))" >
								<option v-for="o in list_user_ordinary_user" :value="o['user_id']">
									{{o['nickname'] + '-' + o['username']}}
								</option>
							</select>
							<span v-else-if="$check_field('get','ordinary_user')">{{ get_user_info("ordinary_user", form['ordinary_user']) }}</span>
						</div>
					</div>
							<div v-if="$check_field('set','user_name') || $check_field('add','user_name') || $check_field('get','user_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								用户姓名:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_user_name" v-model="form['user_name']" placeholder="请输入用户姓名" v-if="(form['user_name'] && $check_field('set','user_name')) || (!form['user_name'] && $check_field('add','user_name'))"  :disabled="disabledObj['user_name_isDisabled']"/>
							<span v-else-if="$check_field('get','user_name')">{{ form['user_name'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','user_phone') || $check_field('add','user_phone') || $check_field('get','user_phone')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								用户电话:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_user_phone" v-model="form['user_phone']" placeholder="请输入用户电话" v-if="(form['user_phone'] && $check_field('set','user_phone')) || (!form['user_phone'] && $check_field('add','user_phone'))"  :disabled="disabledObj['user_phone_isDisabled']"/>
							<span v-else-if="$check_field('get','user_phone')">{{ form['user_phone'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','repair_title') || $check_field('add','repair_title') || $check_field('get','repair_title')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								报修标题:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_repair_title" v-model="form['repair_title']" placeholder="请输入报修标题" v-if="(form['repair_title'] && $check_field('set','repair_title')) || (!form['repair_title'] && $check_field('add','repair_title'))"  :disabled="disabledObj['repair_title_isDisabled']"/>
							<span v-else-if="$check_field('get','repair_title')">{{ form['repair_title'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','type_of_repair_report') || $check_field('add','type_of_repair_report') || $check_field('get','type_of_repair_report')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								报修类型:
							</span>
						</div>
								<!-- 选项 -->
						<div class="diy_field diy_down">
							<select id="form_type_of_repair_report" v-model="form['type_of_repair_report']" v-if="(form['type_of_repair_report'] && $check_field('set','type_of_repair_report')) || (!form['type_of_repair_report'] && $check_field('add','type_of_repair_report'))" >
								<option v-for="o in list_type_of_repair_report" :value="o['type_of_repair_report']">
									{{ o['type_of_repair_report'] }}
								</option>
							</select>
							<span v-else-if="$check_field('get','type_of_repair_report')">{{ form['type_of_repair_report'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','number_of_repair_reports') || $check_field('add','number_of_repair_reports') || $check_field('get','number_of_repair_reports')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								报修次数:
							</span>
						</div>
								<!-- 选项 -->
						<div class="diy_field diy_down">
							<select id="form_number_of_repair_reports" v-model="form['number_of_repair_reports']" v-if="(form['number_of_repair_reports'] && $check_field('set','number_of_repair_reports')) || (!form['number_of_repair_reports'] && $check_field('add','number_of_repair_reports'))" >
								<option v-for="o in list_number_of_repair_reports" :value="o">
									{{o}}
								</option>
							</select>
							<span v-else-if="$check_field('get','number_of_repair_reports')">{{ form['number_of_repair_reports'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','repair_picture') || $check_field('add','repair_picture') || $check_field('get','repair_picture')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								报修图片:
							</span>
						</div>
								<!-- 图片 -->
						<input type="file" :disabled="disabledObj['repair_picture_isDisabled']" style="display: none;" id="form_img_repair_picture" title="repair_picture" @change="change_file($event.target.files,'repair_picture')"/>
						<!-- 修改权限 -->
						<div class="diy_field diy_img" v-if="form['repair_picture'] && $check_field('set','repair_picture')">
							<label for="form_img_repair_picture">
								<img :src="$fullUrl(form['repair_picture'])" />
							</label>
						</div>
						<!-- 添加权限 -->
						<div class="diy_field diy_img" v-else-if="!form['repair_picture'] && $check_field('add','repair_picture')">
							<label for="form_img_repair_picture">
								<div class="btn_add_img">
									<span>+</span>
								</div>
							</label>
						</div>
						<!-- 查询权限 -->
						<div class="diy_field diy_img" v-else-if="$check_field('get','repair_picture')">
							<img :src="$fullUrl(form['repair_picture'])" />
						</div>
							</div>
							<div v-if="$check_field('set','repair_address') || $check_field('add','repair_address') || $check_field('get','repair_address')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								报修地址:
							</span>
						</div>
								<!-- 多文本 -->
						<div class="diy_field diy_desc">
							<textarea id="form_repair_address" v-model="form['repair_address']" v-if="(form['repair_address'] && $check_field('set','repair_address')) || (!form['repair_address'] && $check_field('add','repair_address'))" :disabled="disabledObj['repair_address_isDisabled']" />
							<span v-else-if="$check_field('get','repair_address')">{{ form['repair_address'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','fault_description') || $check_field('add','fault_description') || $check_field('get','fault_description')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								故障描述:
							</span>
						</div>
								<!-- 多文本 -->
						<div class="diy_field diy_desc">
							<textarea id="form_fault_description" v-model="form['fault_description']" v-if="(form['fault_description'] && $check_field('set','fault_description')) || (!form['fault_description'] && $check_field('add','fault_description'))" :disabled="disabledObj['fault_description_isDisabled']" />
							<span v-else-if="$check_field('get','fault_description')">{{ form['fault_description'] }}</span>
						</div>
							</div>
	


					<div v-if="$check_examine()" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								审核状态:
							</span>
						</div>
						<div class="diy_field diy_select" v-if="$check_action('/application_for_repair/edit','examine')">
							<!--<span> {{ form['examine_state'] }} </span>-->
							<select v-model="form['examine_state']">
								<option value="未审核">
									未审核
								</option>
								<option value="已通过">
									已通过
								</option>
								<option value="未通过">
									未通过
								</option>
							</select>
						</div>
						<div class="diy_field diy_text" v-else>
							<span>
								{{ form['examine_state'] }}
							</span>
						</div>
					</div>
					<div v-if="$check_examine()" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								审核回复:
							</span>
						</div>
						<div class="diy_field diy_desc" v-if="$check_action('/application_for_repair/edit','examine')">
							<textarea v-model="form['examine_reply']"></textarea>
						</div>
						<div class="diy_field diy_text" v-else>
							<span>
								{{ form['examine_reply'] }}
							</span>
						</div>
					</div>


				</div>
				<div class="diy_edit_submit_box row">
					<div class="col-12">
						<div class="btn_box">
							<button class="btn_submit" @click="submit()">提交</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mixin from "@/mixins/page.js";
	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				url_get_obj: "~/api/application_for_repair/get_obj?",
				url_add: "~/api/application_for_repair/add?",
				url_set: "~/api/application_for_repair/set?",

				// 登录权限
				oauth: {
					"signIn": true,
					"user_group": []
				},

				// 查询条件
				query: {
						"ordinary_user": 0,
							"user_name": "",
							"user_phone": "",
							"repair_title": "",
							"type_of_repair_report": "",
							"number_of_repair_reports": "",
							"repair_picture": "",
							"repair_address": "",
							"fault_description": "",
						"application_for_repair_id": 0,
				},

				obj: {
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
					"application_for_repair_id": 0,
				},

				// 表单字段
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
					"application_for_repair_id": 0,
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
																		// 报修类型选项列表
				list_type_of_repair_report: [""],
										// 报修次数选项列表
				list_number_of_repair_reports: ['1'],
												
				// ID字段
				field: "application_for_repair_id",

			}
		},
		methods: {
																																																																														formatDateValue(value) {
		  const date = new Date(value);
		  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
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
					async get_user_session_ordinary_user(){
				var _this = this;
				var json = await this.$get("~/api/user_group/get_obj?name=普通用户");
				if(json.result && json.result.obj){
					var source_table = json.result.obj.source_table;
					var user_id = _this.$store.state.user.user_id;
					if (user_id){
						var url = "~/api/"+source_table+"/get_obj?"
						this.$get(url, {"user_id":_this.$store.state.user.user_id}, function(res) {
							if (res.result && res.result.obj) {
								var arr = []
								for (let key in res.result.obj) {
									arr.push(key)
								}
								var arrForm = []
								for (let key in _this.form) {
									arrForm.push(key)
								}
								_this.form["ordinary_user"] = user_id
								_this.disabledObj['ordinary_user' + '_isDisabled'] = true
								for (var i=0;i<arr.length;i++){
                  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
                    for (var j = 0; j < arrForm.length; j++) {
                      if (arr[i] === arrForm[j]) {
                        if (arr[i] !== "ordinary_user") {
                          _this.form[arrForm[j]] = res.result.obj[arr[i]]
                          _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                          break;
                        }
                      }
                    }
                  }
								}
							}
						});
					}
				}
				else if(json.error){
					console.error(json.error);
				}
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
							
				
				
				
				
		  		get_user_info(name,id){
				var obj = null;
  				  if (name == 'ordinary_user'){
					  obj = this.list_user_ordinary_user.getObj({"user_id":id});
				  }
                  				var ret = "";
				if(obj){
				  ret = obj.nickname+"-"+obj.username;
				}
				return ret;
			},
			/**
			 * 修改文件
			 * @param { Object } files 上传文件对象
			 * @param { String } str 表单的属性名
			 */
			change_file(files, str) {
				var form = new FormData();
				form.append("file", files[0]);
				this.$post("~/api/application_for_repair/upload?", form, (res) => {
					if (res.result) {
						this.form[str] = res.result.url;
					} else if (res.error) {
						this.$toast(res.error.message);
					}
				});
			},
			
			/**
			 * 修改文件
			 * @param { Object } files 上传文件对象
			 * @param { String } str 表单的属性名
			 */
			change_file_multiple(files, str) {
				let _this = this;
				var form = new FormData();
				for (var i = 0; i < files.length; i++) {
					form.set("file", files[i]);
					_this.$post("~/api/application_for_repair/upload?", form, (res) => {
						if (res.result) {
							if (_this.form[str].length > 0) {
								_this.form[str].push(res.result.url);
							} else {
								_this.form[str] = [res.result.url];
							}
						} else if (res.error) {
							_this.$toast(res.error.message);
						}
					});
				}
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_before(param){
				var form = $.db.get("form");
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
        //   this.obj = $.push(this.obj ,form);
				// 	this.form = $.push(this.form ,form);
				// }
				// var arr = []
				// for (let key in form) {
				// 	arr.push(key)
				// }
				// for (var i=0;i<arr.length;i++){
				// 	this.disabledObj[arr[i] + '_isDisabled'] = true
				// }
        if (form) {
          var arr = []
          for (let key in form) {
            arr.push(key)
          }
          var arrForm = []
          for (let key in this.form) {
            arrForm.push(key)
          }
          for (var i=0;i<arr.length;i++){
            if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arrForm[j] === arr[i]) {
                  this.form[arrForm[j]] = form[arr[i]]
                  this.obj[arrForm[j]] = form[arr[i]]
                  this.disabledObj[arrForm[j] + '_isDisabled'] = true
                  break;
                }
              }
			  if(arr[i] === "source_table"){
			  	this.form['source_table'] = form[arr[i]]
			  }
			  if(arr[i] === "source_id"){
			  	this.form['source_id'] = form[arr[i]]
			  }
			  if(arr[i] === "source_user_id"){
			  	this.form['source_user_id'] = form[arr[i]]
			  }
            }
          }
        }
																											
        $.db.del("form");
				return param;
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json ,func){
				// var form = $.db.get("form");
				// var obj = Object.assign({} ,form ,this.obj);
				// if (obj) {
        //   delete(obj.examine_state)
        //   delete(obj.examine_reply)
				// 	this.obj = $.push(this.obj ,obj);
				// }
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
				// 	this.form = $.push(this.form ,form);
				// }

				if(func){
					func(json);
				}
			},

		},
		created() {
					this.get_user_session_ordinary_user();
					this.get_list_user_ordinary_user();
														this.get_list_type_of_repair_report();
																	},
	}
</script>

<style>
	.diy_compute{
		line-height: 40px;
	}
	.diy_field.diy_img_multiple{
		margin: 0;
	}
	.diy_field.diy_img_multiple div{
		float: left;
		position: relative;
		margin: 0 10px 10px 0;
	}
	.diy_field.diy_img_multiple img{
		height: 100px;
		width: auto;
	}
	.diy_field.diy_img_multiple span{
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
