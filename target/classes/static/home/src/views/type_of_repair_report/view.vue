<template>
	<div class="page_user" id="user_address">
		<div class="warp">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-12 col-md-3">
						<div class="card_menu">
							<!-- 左侧边栏 -->
							<list_admin_menu_user></list_admin_menu_user>
						</div>
					</div>
					<div class="col-12 col-md-9">
						<div class="card_addres pl-2">
							<!-- 报修类型 -->
							<div><span>报修类型</span></div>
							<view_type_of_repair_report v-if="$check_action('/type_of_repair_report/view','get')"></view_type_of_repair_report>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import list_admin_menu_user from "@/components/diy/list_admin_menu_user.vue";
	import view_type_of_repair_report from "../../components/diy/view_type_of_repair_report.vue";
	export default {
		data() {
			return {
			};
		},
		mounted() {
		},
		methods: {
		},
		components: {
			list_admin_menu_user,
			view_type_of_repair_report,
		},
	};
</script>

<style scoped>
	.container {
		min-height: 800px;
	}
</style>
