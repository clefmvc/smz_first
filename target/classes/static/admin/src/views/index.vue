<template>
	<div class="page_root" id="root_index">
		<div class="warp">
			<div class="container-fluid">
				<el-row>
<!--					<el-col :span="4">-->
<!--						<div_label bg_color="bg_red" icon="el-icon-message" :url="url_message_count" unit="条"-->
<!--								  title="留言信息"></div_label>-->
<!--					</el-col>-->
					<el-col :span="4">
						<div_label bg_color="bg_purple" icon="el-icon-user-solid" :url="url_user_count" unit="人"
								  title="用户数量"></div_label>
					</el-col>
<!--					<el-col :span="4">-->
<!--						<div_label bg_color="bg_green" icon="el-icon-view" :url="url_article_hits" unit="次"-->
<!--								  title="文章浏览量"></div_label>-->
<!--					</el-col>-->
				</el-row>

				<el-row>
						<el-col v-if="$check_figure('/ordinary_user/table')" :span="8">
						<div class="card chart">
																														<pieChart v-if="list_ordinary_user.length" id="list_ordinary_user" :list="list_ordinary_user" :title="'普通用户统计'"></pieChart>
							<div v-if="!list_ordinary_user.length">普通用户没有符合条件的数据</div>
															</div>
					</el-col>
								<el-col v-if="$check_figure('/application_for_repair/table')" :span="8">
						<div class="card chart">
									<newBarChart v-if="bar_obj_application_for_repair.values.length > 0" id="bar_obj_application_for_repair" :vm="bar_obj_application_for_repair" :title="'报修申请统计'">
							</newBarChart>
							<div v-if="!bar_obj_application_for_repair.values.length">报修申请没有符合条件的数据</div>
								</div>
					</el-col>
							<el-col v-if="$check_figure('/repair_record/table')" :span="8">
						<div class="card chart">
																																																																	<pieChart v-if="list_repair_record.length" id="list_repair_record" :list="list_repair_record" :title="'报修记录统计'"></pieChart>
							<div v-if="!list_repair_record.length">报修记录没有符合条件的数据</div>
																						</div>
					</el-col>
						</el-row>

				<div id ="outerdiv">
					<iframe src="http://www.nmc.cn/publish/forecast.html" id ='inneriframe' scrolling="no"></iframe>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import mixin from "@/mixins/page.js";
	import pieChart from "@/components/charts/pie_chart";
	import newBarChart from "@/components/charts/new_bar_chart";
	import div_label from "@/components/div_label.vue";
	export default {
		mixins: [mixin],
		name: "Home",
		components: {
			pieChart,
			newBarChart,
			div_label
		},
		data() {
			return {
				activeName: "third",
					list_ordinary_user: [],
								bar_obj_application_for_repair: {
					names:[],
					xAxis: [],
					values:[]
				},
						list_repair_record: [],
							url_message_count: "~/api/message/count?",
				url_user_count: "~/api/user/count?",
				url_article_hits: "~/api/article/sum?field=hits",
			};
		},
		created() {
				// 执行普通用户数据获取
			this.get_list_ordinary_user();
						// 执行报修申请数据获取
			this.get_list_application_for_repair();
					// 执行报修记录数据获取
			this.get_list_repair_record();
				},
		mounted() {},
		methods: {
			async get_nickname(list,flag){
				if (flag) {
					for (let i=0;i<list.length;i++){
						await this.$get(
								"~/api/user/get_obj?user_id="+list[i],
								null,
								(json) => {
									if (json.result) {
										list[i] = json.result.obj.nickname;
									}
								});
					}
				}else {
					for (let i=0;i<list.length;i++){
						await this.$get(
								"~/api/user/get_obj?user_id="+list[i].name,
								null,
								(json) => {
									if (json.result) {
										list[i].name = json.result.obj.nickname;
									}
								});
					}
				}
			},
																			// 获取普通用户统计图数据
			get_list_ordinary_user() {
				let data = {};
								let flag = false;
												this.$get("~/api/ordinary_user/list_group?groupby=user_gender", data, (json) => {
					if (json.result) {
						var list = json.result.list;
						this.list_ordinary_user = list.map((o) => {
							return {
												name: o[1],
												value: o[0]
							};
						});
						if (flag){
							this.get_nickname(this.list_ordinary_user,false);
						}
					}
				});
			},
												// 获取报修申请统计图
			async get_list_application_for_repair() {
				let name_list = [];
				let query_str = "";
																																									let group_by_value = "type_of_repair_report";
								let flag = false;
												let date_flag = "其他"
																						name_list.push("报修次数");
				query_str = query_str+"number_of_repair_reports"+","
																																	this.bar_obj_application_for_repair.names = name_list
				query_str = query_str.substr(0,query_str.length-1);
				let data = {};
						let user_group = this.$store.state.user.user_group;
				let user_id = this.$store.state.user.user_id;
				if (user_group!='管理员'){
								let sqlwhere = "(";
														if (user_group=="普通用户"){
						sqlwhere+= "ordinary_user = " + user_id + " or ";
					}
																																																																																						if (sqlwhere.length>1){
						sqlwhere = sqlwhere.substr(0,sqlwhere.length-4);
						sqlwhere += ")";
						data.sqlwhere = sqlwhere;
					}
							}
						await this.$get(
						"~/api/application_for_repair/bar_group?field="+query_str+"&groupby="+group_by_value,
						data,
						(json) => {
							if (json.result) {
								let xAxis = [];
								let values = [];
								json.result.list.map((o) => {
									if (date_flag === "日期") {
										xAxis.push(this.$toTime(o[0] ,"yyyy-MM-dd"));
									}else if (date_flag === "时间") {
										xAxis.push(this.$toTime(o[0] ,"hh:mm:ss"));
									}else if (date_flag === "日长") {
										xAxis.push(this.$toTime(o[0] ,"yyyy-MM-dd hh:mm:ss"));
									}else {
										xAxis.push(o[0]);
									}
									values.push(o.splice(1))
								});
								this.bar_obj_application_for_repair.xAxis = xAxis;
								this.bar_obj_application_for_repair.values = values;
							}
							if (flag){
								this.get_nickname(this.bar_obj_application_for_repair.xAxis,true);
							}
						});
			},
																																													// 获取报修记录统计图数据
			get_list_repair_record() {
				let data = {};
								let flag = false;
												let user_group = this.$store.state.user.user_group;
				let user_id = this.$store.state.user.user_id;
				if (user_group!='管理员'){
										let sqlwhere = "(";
																		if (user_group=="普通用户"){
						sqlwhere+= "ordinary_user = " + user_id + " or ";
					}
																																																																																																																										if (sqlwhere.length>1){
						sqlwhere = sqlwhere.substr(0,sqlwhere.length-4);
						sqlwhere += ")";
						data.sqlwhere = sqlwhere;
					}
									}
								this.$get("~/api/repair_record/list_group?groupby=maintenance_progress", data, (json) => {
					if (json.result) {
						var list = json.result.list;
						this.list_repair_record = list.map((o) => {
							return {
												name: o[1],
												value: o[0]
							};
						});
						if (flag){
							this.get_nickname(this.list_repair_record,false);
						}
					}
				});
			},
													
		},
		computed:{
			recognitionHeight(){
				return "830px"
			},
			recognitionUrl(){
				return "https://www.faceplusplus.com.cn/${model.filter.recognitionType}/"
			}
		}
	};
</script>

<style scoped="scoped">
	.chart {
		display: block;
		width: 100%;
		height: 400px;
		padding: 1rem;
		position: relative;
	}

	.el-col {
		padding: 0.5rem;
	}

	.card {
		overflow: hidden;
	}

	.iframe_box ,.iframe_box_change{
		width: 100%;
		height: 1180px;
		position: relative;
		margin-top: 25px;
	}
	.iframe_box_change{
		height: 580px;
		padding-top: 50px;
	}
	.iframe_box	.iframe_box_content, .iframe_box_change .iframe_box_content{
		width: 100%;
		height: 100%;
	}
	.iframe_box_top{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100px;
		font-size: 25px;
		line-height: 100px;
		background: #fff;
		z-index: 99999999;
		padding-left: 50px;
	}
	#iframe_box_face div::before {
		content: '';
		width: 100px;
		position: absolute;
		top: 154px;
		right: 129px;
		z-index: 999;
		height: 20px;
		background-color: #FFFFFF;
	}

	#iframe_box_face>h1 {
		margin-top: 100px;
		margin-bottom: 20px;
	}
	#outerdiv
	{
		margin: 0 auto;
		width:1480px;
		height:2180px;
		overflow:hidden;
		position:relative;
	}

	#inneriframe
	{
		position:absolute;
		top:-150px;
		left:0px;
		width:1580px;
		height:2180px;
	}
</style>
