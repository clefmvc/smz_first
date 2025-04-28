<template>
  <div class="list_menu diy_menu">
    <router-link
            to="/user_center/index"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/user_center/index'}"
     >
      <span class="left_span">个人首页</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
          <router-link
          to="/ordinary_user/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/ordinary_user/table'}"
          v-if="$check_action('/ordinary_user/table','get')">
        <span class="left_span">普通用户</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/type_of_repair_report/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/type_of_repair_report/table'}"
          v-if="$check_action('/type_of_repair_report/table','get')">
        <span class="left_span">报修类型</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/application_for_repair/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/application_for_repair/table'}"
          v-if="$check_action('/application_for_repair/table','get')">
        <span class="left_span">报修申请</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/repair_record/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/repair_record/table'}"
          v-if="$check_action('/repair_record/table','get')">
        <span class="left_span">报修记录</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/exchange_forum/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/exchange_forum/table'}"
          v-if="$check_action('/exchange_forum/table','get')">
        <span class="left_span">交流论坛</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
          <router-link
              to="/message/table"
              class="menu_item"
              :class="{ selected: this.$route.path=== '/message/table'}"
              v-if="$check_action('/message/table','get')">
        <span class="left_span">{{$page_title("/message/table") || "在线留言"}}</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
  <router-link
              to="/user/collect"
              class="menu_item"
              :class="{ selected: this.$route.path=== '/user/collect'}"
              v-if="$check_action('/collect/list','get')">
        <span class="left_span">收藏</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
  </router-link>
	<router-link
	            to="/comment/table"
	            class="menu_item"
	            :class="{ selected: this.$route.path=== '/comment/table'}"
	            v-if="$check_action('/comment/table','get')">
	      <span class="left_span">评论管理</span>
	      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
	</router-link>
  </div>
</template>

<script>
import mixin from "@/mixins/page.js";
export default {
  mixins: [mixin],
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },

  components: {
  },
};
</script>

<style scoped>
.list_menu {
  flex: 0 0 25%;
  border-bottom: 1px solid #eee;
}
.menu_item {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border: 1px solid #eee;
  border-bottom: none;
  background-color: #fff;
}
.menu_item.selected {
  background-color: #000;
}
.menu_item.selected span {
  color: #fff ;
}
.content {
  flex: 0 0 74%;
}
</style>
