<template>
  <div class="page_search search_index">
	<div class="warp">
	  <div class="container">
		<div class="row">
		  <div class="col-12">
			<div class="card_result_search">
			  <div class="title">搜索结果</div>

				<!-- 文章搜索结果 -->
			  <list_result_search
				:list="result_article"
				title="社区资讯"
				source_table="article"
			  ></list_result_search>


						  <list_result_search
				v-if="$check_action('/ordinary_user/list', 'get')"
				:list="result_ordinary_user_user_name"
				title="普通用户用户姓名"
				source_table="ordinary_user"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/type_of_repair_report/list', 'get')"
				:list="result_type_of_repair_report_type_of_repair_report"
				title="报修类型报修类型"
				source_table="type_of_repair_report"
			  ></list_result_search>
												  <list_result_search
				v-if="$check_action('/application_for_repair/list', 'get')"
				:list="result_application_for_repair_user_name"
				title="报修申请用户姓名"
				source_table="application_for_repair"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/application_for_repair/list', 'get')"
				:list="result_application_for_repair_repair_title"
				title="报修申请报修标题"
				source_table="application_for_repair"
			  ></list_result_search>
																											  <list_result_search
				v-if="$check_action('/repair_record/list', 'get')"
				:list="result_repair_record_user_name"
				title="报修记录用户姓名"
				source_table="repair_record"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/repair_record/list', 'get')"
				:list="result_repair_record_repair_title"
				title="报修记录报修标题"
				source_table="repair_record"
			  ></list_result_search>
																	  <list_result_search
				v-if="$check_action('/repair_record/list', 'get')"
				:list="result_repair_record_maintenance_progress"
				title="报修记录维修进度"
				source_table="repair_record"
			  ></list_result_search>
																								  <list_result_search
				v-if="$check_action('/exchange_forum/list', 'get')"
				:list="result_exchange_forum_forum_title"
				title="交流论坛论坛标题"
				source_table="exchange_forum"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/exchange_forum/list', 'get')"
				:list="result_exchange_forum_type_of_communication"
				title="交流论坛交流类型"
				source_table="exchange_forum"
			  ></list_result_search>
															</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
import mixin from "../../mixins/page.js";
import list_result_search from "../../components/diy/list_result_search.vue";

export default {
  mixins: [mixin],
  data() {
	return {
	  "query": {
		word: "",
	  },
	  "result_article": [],
						"result_ordinary_user_user_name":[],
															"result_type_of_repair_report_type_of_repair_report":[],
												"result_application_for_repair_user_name":[],
											"result_application_for_repair_repair_title":[],
																											"result_repair_record_user_name":[],
											"result_repair_record_repair_title":[],
																	"result_repair_record_maintenance_progress":[],
																								"result_exchange_forum_forum_title":[],
								"result_exchange_forum_type_of_communication":[],
													};
  },
  methods: {
	/**
	 * 获取文章
	 */
	get_article() {
	  this.$get("~/api/article/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_article = json.result.list;
		}
	  });
	},

				/**
	 * 获取user_name
	 */
	get_ordinary_user_user_name(){
		let url = "~/api/ordinary_user/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_ordinary_user_user_name = json.result.list;
			result_ordinary_user_user_name.map(o => o.title = o['user_name'])
	  			this.result_ordinary_user_user_name = result_ordinary_user_user_name
		 	}
		});
	},
													/**
	 * 获取type_of_repair_report
	 */
	get_type_of_repair_report_type_of_repair_report(){
		let url = "~/api/type_of_repair_report/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "type_of_repair_report": this.query.word }, (json) => {
		  if (json.result) {
			var result_type_of_repair_report_type_of_repair_report = json.result.list;
			result_type_of_repair_report_type_of_repair_report.map(o => o.title = o['type_of_repair_report'])
	  			this.result_type_of_repair_report_type_of_repair_report = result_type_of_repair_report_type_of_repair_report
		 	}
		});
	},
										/**
	 * 获取user_name
	 */
	get_application_for_repair_user_name(){
		let url = "~/api/application_for_repair/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_application_for_repair_user_name = json.result.list;
			result_application_for_repair_user_name.map(o => o.title = o['user_name'])
	  			this.result_application_for_repair_user_name = result_application_for_repair_user_name
		 	}
		});
	},
									/**
	 * 获取repair_title
	 */
	get_application_for_repair_repair_title(){
		let url = "~/api/application_for_repair/get_list?like=0";
				url = url+"&examine_state=已通过";
				this.$get(url, { page: 1, size: 10, "repair_title": this.query.word }, (json) => {
		  if (json.result) {
			var result_application_for_repair_repair_title = json.result.list;
			result_application_for_repair_repair_title.map(o => o.title = o['repair_title'])
	  			this.result_application_for_repair_repair_title = result_application_for_repair_repair_title
		 	}
		});
	},
																									/**
	 * 获取user_name
	 */
	get_repair_record_user_name(){
		let url = "~/api/repair_record/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_repair_record_user_name = json.result.list;
			result_repair_record_user_name.map(o => o.title = o['user_name'])
	  			this.result_repair_record_user_name = result_repair_record_user_name
		 	}
		});
	},
									/**
	 * 获取repair_title
	 */
	get_repair_record_repair_title(){
		let url = "~/api/repair_record/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "repair_title": this.query.word }, (json) => {
		  if (json.result) {
			var result_repair_record_repair_title = json.result.list;
			result_repair_record_repair_title.map(o => o.title = o['repair_title'])
	  			this.result_repair_record_repair_title = result_repair_record_repair_title
		 	}
		});
	},
															/**
	 * 获取maintenance_progress
	 */
	get_repair_record_maintenance_progress(){
		let url = "~/api/repair_record/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "maintenance_progress": this.query.word }, (json) => {
		  if (json.result) {
			var result_repair_record_maintenance_progress = json.result.list;
			result_repair_record_maintenance_progress.map(o => o.title = o['maintenance_progress'])
	  			this.result_repair_record_maintenance_progress = result_repair_record_maintenance_progress
		 	}
		});
	},
																						/**
	 * 获取forum_title
	 */
	get_exchange_forum_forum_title(){
		let url = "~/api/exchange_forum/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "forum_title": this.query.word }, (json) => {
		  if (json.result) {
			var result_exchange_forum_forum_title = json.result.list;
			result_exchange_forum_forum_title.map(o => o.title = o['forum_title'])
	  			this.result_exchange_forum_forum_title = result_exchange_forum_forum_title
		 	}
		});
	},
						/**
	 * 获取type_of_communication
	 */
	get_exchange_forum_type_of_communication(){
		let url = "~/api/exchange_forum/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "type_of_communication": this.query.word }, (json) => {
		  if (json.result) {
			var result_exchange_forum_type_of_communication = json.result.list;
			result_exchange_forum_type_of_communication.map(o => o.title = o['type_of_communication'])
	  			this.result_exchange_forum_type_of_communication = result_exchange_forum_type_of_communication
		 	}
		});
	},
												
  },
  components: { list_result_search },
	created(){
    this.query.word = this.$route.query.word || "";
  },
  mounted() {
	this.get_article();
					this.get_ordinary_user_user_name();
														this.get_type_of_repair_report_type_of_repair_report();
											this.get_application_for_repair_user_name();
										this.get_application_for_repair_repair_title();
																										this.get_repair_record_user_name();
										this.get_repair_record_repair_title();
																this.get_repair_record_maintenance_progress();
																							this.get_exchange_forum_forum_title();
							this.get_exchange_forum_type_of_communication();
												  },
  watch: {
	$route() {
	  $.push(this.query, this.$route.query);
	  this.get_article();
				  this.get_ordinary_user_user_name();
													  this.get_type_of_repair_report_type_of_repair_report();
										  this.get_application_for_repair_user_name();
									  this.get_application_for_repair_repair_title();
																									  this.get_repair_record_user_name();
									  this.get_repair_record_repair_title();
															  this.get_repair_record_maintenance_progress();
																						  this.get_exchange_forum_forum_title();
						  this.get_exchange_forum_type_of_communication();
													},
  },
};
</script>

<style scoped>
.card_search {
  text-align: center;
}
.card_result_search>.title {
  text-align: center;
  padding: 10px 0;
}
</style>
