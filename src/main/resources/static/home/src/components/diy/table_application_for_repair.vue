<template>
  <el-main class="bg table_wrap">
    <el-form label-position="right" :model="query" class="form p_4" label-width="120">
      <el-row class="rows row1">

          
                                                                                              <el-col :xs="24" :sm="24" :lg="8" class="el_form_search_wrap">
                      <el-form-item label="用户姓名">
                                                      <el-input v-model="query.user_name"></el-input>
                                                </el-form-item>
                    </el-col>
                                                                                                      <el-col :xs="24" :sm="24" :lg="8" class="el_form_search_wrap">
                      <el-form-item label="报修标题">
                                                      <el-input v-model="query.repair_title"></el-input>
                                                </el-form-item>
                    </el-col>
                                                                                                                                                                                                                            <el-col :xs="24" :sm="24" :lg="8" class="el_form_search_wrap">
            <el-form-item label="审核状态">
              <el-select v-model="query.examine_state">
                <el-option value="">全部</el-option>
                <el-option value="未审核">未审核</el-option>
                <el-option value="已通过">已通过</el-option>
                <el-option value="未通过">未通过</el-option>
              </el-select>
            </el-form-item>
          </el-col>
                      </el-row>
      <el-row class="rows row2">
      	<el-col :xs="24" :sm="24" :lg="24" class="search_btn_wrap search_btns">
         <el-col :xs="24" :sm="10" :lg="8" class="search_btn_1 search_btn_wrap_1 btns">
                              <el-button type="primary" @click="search()" class="search_btn_find">查询</el-button>
                <el-button @click="reset()" style="margin-right: 74px;" class="search_btn_reset">重置</el-button>
                                                      <el-button v-if="$check_action('/application_for_repair/table','add') || $check_action('/application_for_repair/view','add')" @click="$router.push('./view?')" class="add">添加</el-button>
            <el-button v-if="$check_action('/application_for_repair/table','del') || $check_action('/application_for_repair/view','del')" class="search_btn_del" type="danger" @click="delInfo()">删除</el-button>
                        </el-col>
       
        </el-col>
      </el-row>
    </el-form>
	    <el-table :data="list" @selection-change="selectionChange" @sort-change="$sortChange" style="width: 100%" id="dataTable">
	                <el-table-column fixed type="selection" tooltip-effect="dark" width="55">
            </el-table-column>
                                                  <el-table-column prop="ordinary_user" @sort-change="$sortChange" label="普通用户"                                v-if="$check_field('get','ordinary_user')" min-width="200">
                                      <template slot-scope="scope">
                      {{ get_user_ordinary_user(scope.row['ordinary_user']) }}
                    </template>
                                </el-table-column>
                                              <el-table-column prop="user_name" @sort-change="$sortChange" label="用户姓名"                                v-if="$check_field('get','user_name')" min-width="200">
                                </el-table-column>
                                              <el-table-column prop="user_phone" @sort-change="$sortChange" label="用户电话"                                v-if="$check_field('get','user_phone')" min-width="200">
                                </el-table-column>
                                              <el-table-column prop="repair_title" @sort-change="$sortChange" label="报修标题"                                v-if="$check_field('get','repair_title')" min-width="200">
                                </el-table-column>
                                              <el-table-column prop="type_of_repair_report" @sort-change="$sortChange" label="报修类型"                                v-if="$check_field('get','type_of_repair_report')" min-width="200">
                                </el-table-column>
                                              <el-table-column prop="number_of_repair_reports" @sort-change="$sortChange" label="报修次数"                                v-if="$check_field('get','number_of_repair_reports')" min-width="200">
                                </el-table-column>
                                              <el-table-column prop="repair_picture" @sort-change="$sortChange" label="报修图片"                                v-if="$check_field('get','repair_picture')" min-width="200">
                                      <template slot-scope="scope">
                      <el-image style="width: 100px; height: 100px" :src="$fullUrl(scope.row['repair_picture'])"
                                :preview-src-list="[$fullUrl(scope.row['repair_picture'])]">
                        <div slot="error" class="image-slot">
                          <img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
                        </div>
                      </el-image>
                    </template>
				                </el-table-column>
                                              <el-table-column prop="repair_address" @sort-change="$sortChange" label="报修地址"                                v-if="$check_field('get','repair_address')" min-width="200">
                                </el-table-column>
                                              <el-table-column prop="fault_description" @sort-change="$sortChange" label="故障描述"                                v-if="$check_field('get','fault_description')" min-width="200">
                                </el-table-column>
                    				                  <el-table-column label="审核状态" prop="examine_state">
          </el-table-column>
        
                  <el-table-column label="审核回复" prop="examine_reply">
          </el-table-column>
        
                
      <el-table-column sortable prop="create_time" label="创建时间" min-width="200">
        <template slot-scope="scope">
          {{ $toTime(scope.row["create_time"],"yyyy-MM-dd hh:mm:ss") }}
        </template>
      </el-table-column>

      <el-table-column sortable prop="update_time" label="更新时间" min-width="200">
        <template slot-scope="scope">
          {{ $toTime(scope.row["update_time"],"yyyy-MM-dd hh:mm:ss") }}
        </template>
      </el-table-column>

        
        
        
        
        

                <el-table-column fixed="right" label="操作" min-width="120" v-if="$check_action('/application_for_repair/table','set') || $check_action('/application_for_repair/view','set') || $check_action('/application_for_repair/view','get')
												|| $check_action('/repair_record/table','add') || $check_action('/repair_record/view','add')
											 ">
        

      <template slot-scope="scope">
        <router-link class="el-button el-button--small is-plain el-button--success" style="margin: 5px !important;"
                     v-if="$check_action('/application_for_repair/table','set') || $check_action('/application_for_repair/view','set') || $check_action('/application_for_repair/view','get')"
                                 :to="'./view?' + field + '=' + scope.row[field]"
                                 size="small">
          <span>详情</span>
        </router-link>
                                        <!--跨表按钮-->
                  										<el-button class="el-button el-button--small is-plain el-button--default" style="margin: 5px !important;" size="small"  @click="to_table(scope.row,'/repair_record/view')" v-if="($check_action('/repair_record/table','add') || $check_action('/repair_record/view','add')) && scope.row['examine_state'] == '已通过' && !scope.row['repair_record_limit']">
					  <span>维修记录</span>
					</el-button>
					                                                                                  		  		  		  	<el-button class="el-button el-button--small is-plain el-button--default" style="margin: 5px !important;" size="small" @click="changeSigning(scope.row, scope.$index)" v-if="$check_option('/application_for_repair/table', 'examine')">
		  		<span>审核</span>
		  	</el-button>
		        </template>
    </el-table-column>

    </el-table>

    <!-- 分页器 -->
    <div class="mt text_center">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="query.page" :page-sizes="[7, 10, 30, 100]" :page-size="query.size"
                     layout="total, sizes, prev, pager, next, jumper" :total="count">
      </el-pagination>
    </div>
    <!-- /分页器 -->
		<el-dialog title="审核" :visible.sync="dialogVisible" width="30%" :show-close="true" :before-close="handleClose">
			<el-form ref="verifyForm" :rules="rules" :model="verifyItem">
				<el-form-item label="审核状态" prop="radio">
					<el-radio-group v-model="verifyItem.examine_state" style="margin-top: 9px;">
						<el-radio label="已通过" value="已通过"></el-radio>
						<el-radio label="未通过" value="已通过"></el-radio>
					</el-radio-group>
				</el-form-item>
								<el-form-item label="审核回复" prop="reply">
					<el-input type="textarea" placeholder="请填写审核回复" v-model="verifyItem.examine_reply"></el-input>
				</el-form-item>
							</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="assureVerify">确 定</el-button>
			</span>
		</el-dialog>
                                                                                                                                                                  
    <div class="modal_wrap" v-if="showModal">
      <div class="modal_box">
        <!-- <div class="modal_box_close" @click="closeModal">X</div> -->
        <p class="modal_box_title">重要提醒</p>
        <p class="modal_box_text">当前有数据达到预警值！</p>
        <p class="modal_box_text">{{ message }}</p>
        <div class="btn_box">
          <span @click="closeModal">取消</span>
          <span @click="closeModal">确定</span>
        </div>
      </div>
    </div>


  </el-main>
</template>
<script>
  import mixin from "@/mixins/page.js";
  
  export default {
    mixins: [mixin],
    data() {
      return {
        // 弹框
        showModal: false,
        // 获取数据地址
        url_get_list: "~/api/application_for_repair/get_list?like=0",
        url_del: "~/api/application_for_repair/del?",

        // 字段ID
        field: "application_for_repair_id",
		dialogVisible: false,
		verifyIdx: 0,
		verifyItem: {},
		rules: {
			"examine_state": [
				{ required: true, message: '请选择审核状态', trigger: 'change' },
			],
		},
        // 查询
        query: {
          "size": 7,
          "page": 1,
                                                                                                  "user_name": "",
                                                                                                                                      "repair_title": "",
                                                                                                                                                                                                                "examine_state":"",
                                          "login_time": "",
          "create_time": "",
          "orderby": `create_time desc`
        },

                  // 数据
        list: [],
                                                                                                                                                                                                                                                                                                                                        // 用户列表
                list_user_ordinary_user: [],
                                                                                                                                                                                                                                                                                                                                        		  		  message: '',
      }
    },
    methods: {
      // 关闭弹框
      closeModal(){
        this.showModal = false;
      },
        			// 审核弹窗
			changeSigning(query, index) {
			  let beforeQuery=JSON.parse(JSON.stringify(query));
			  this.verifyIdx = index;
			  this.verifyItem = beforeQuery;
			  this.dialogVisible = true;
			},
			assureVerify() {
				//审核
				let _this = this;
				let examineForm = this.$refs["verifyForm"];
				examineForm.validate((valid) => {
					if (valid) {
						var url = "~/api/application_for_repair/set?application_for_repair_id=" + this.verifyItem['application_for_repair_id']
						_this.$post(url, {
							'examine_state': _this.verifyItem.examine_state,
														'examine_reply': _this.verifyItem.examine_reply
													}, (json, status) => {
							if (json.result) {
								_this.$toast('审核成功！', 'success');
								_this.dialogVisible = false;
								_this.get_list();
							} else if (json.error) {
								_this.$toast(json.error.message, 'danger');
							}
						})
					}
				})
			},
		  /**
		   * @description 获取到列表事件
		   * @param {Object} res 响应结果
		   */
		  get_list_after: function get_list_after(res, func, url) {
		  	let _this = this
					  			  	_this.list.map((item) => {
		  		let param = {
		  			source_table: "application_for_repair",
		  			source_id: item.application_for_repair_id,
		  			source_user_id: _this.user.user_id
		  		};
		  		if(item.repair_record_limit_times > 0){
		  			_this.$get("~/api/repair_record/count?",param,(result)=>{
		  				if(result){
		  					if(result.result >= item.repair_record_limit_times){
		  						_this.$set(item,'repair_record_limit',true);
		  					}else{
		  						_this.$set(item,'repair_record_limit',false);
		  					}
		  				}
		  			})
		  		}else{
		  			_this.$set(item,'repair_record_limit',false);
		  		}
		  		Object.assign(item, param)
		  	})
		  																																		  },
        
                  get_list_before(param){
            var user_group = this.$store.state.user.user_group;
            if(user_group != "管理员"){
                                  let sqlwhere = "(";
                                                                      if(user_group=="普通用户"){
                            sqlwhere+= "ordinary_user = " + this.$store.state.user.user_id + " or ";
                          }
                                                                                                                                                                                                                                                                                                                                                                                                                              if (sqlwhere.length>1){
                    sqlwhere = sqlwhere.substr(0,sqlwhere.length-4);
                    sqlwhere += ")";
                    param["sqlwhere"] = sqlwhere;
                  }
                            }
            return param;
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

              get_user_ordinary_user(id){
                var obj = this.list_user_ordinary_user.getObj({"user_id":id});
                var ret = "";
                if(obj){
                  ret = obj.nickname+"-"+obj.username;
                  // if(obj.nickname){
                  // 	ret = obj.nickname;
                  // }
                  // else{
                  // 	ret = obj.username;
                  // }
                }
                return ret;
              },
                                                                                                                                                                                                                                                                                                                        		      deleteRow(index, rows) {
        rows.splice(index, 1);
      },

    },
	    created() {
                                                                      this.get_list_user_ordinary_user();
                                                                                                                                                                                                                                                                                                }
  }
</script>

<style type="text/css">
  .bg {
    background: white;
  }

  .form.p_4 {
    padding: 1rem;
  }

  .form .el-input {
    width: initial;
  }

  .mt {
    margin-top: 1rem;
  }

  .text_center {
    text-align: center;
  }

  .float-right {
    float: right;
  }


  .modal_wrap{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 9999999999;
  }
  .modal_wrap .modal_box{
    width: 400px;
    height: auto;
    background: url("../../assets/modal_bg.jpg") no-repeat center;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -100px;
    border-radius: 10px;
    padding: 10px;
  }
  .modal_wrap .modal_box .modal_box_close{
    font-size: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .modal_wrap .modal_box .modal_box_title{
    text-align: center;
    font-size: 18px;
    margin: 16px auto;
    color: #fff;
    border-bottom: 1px solid rgba(117, 116, 116,0.5);
    padding-bottom: 16px;
    width: 356px;
  }
  .modal_wrap .modal_box .modal_box_text{
    text-align: center;
    font-size: 14px;
    color: #fff;
    margin: 5px auto;
    width: 90%;
  }
  .modal_wrap .modal_box .btn_box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 42px;
  }
  .modal_wrap .modal_box .btn_box span{
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
    color: #fff;
  }
  .modal_wrap .modal_box .btn_box span:nth-child(2){
    background: #409EFF;
    color: #fff;
    border-color: #409EFF;
    margin-left: 15px;
  }
  .el-date-editor .el-range-separator{
  	width: 10% !important;
  }
</style>
