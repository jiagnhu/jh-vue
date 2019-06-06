<template>
    <div class="menus">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <template v-for="item in list">
                <!-- 没有子菜单 -->
                <el-menu-item
                    :index="item['path']"
                    :key="item['label']"
                    v-if="validatenull(item['children'])"
                >{{item.label}}</el-menu-item>
                <!-- 有子菜单 -->
                <el-submenu
                    :index="item['path']"
                    :key="item['label']"
                    v-else-if="!validatenull(item['children'])"
                >
                    <!-- 标题 -->
                    <template slot="title">
                        <span>{{item.label}}</span>
                    </template>
                    <!-- 列表 -->
                    <template v-for="(child) in item['children']">
                        <el-menu-item
                            :index="child['path']"
                            :key="child['label']"
                            @click="open(child)"
                        >
                            <span slot="title">{{child['label']}}</span>
                        </el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
// import { mapGetters } from "vuex';"
import { menusJson } from "@/const/menus";
import { validatenull } from "@/util/validate";
export default {
  name: "hengyu-menus",
  props: {},
  data() {
    return {
      activeIndex: "1",
      list: menusJson
    };
  },
  components: {},
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    handleSelect(key) {
      this.$router.push({ path: key})
    },
    validatenull(val) {
      return validatenull(val);
    },
    open(item) {
        console.log(item)
    }
  },
  beforeDestroy() {}
};
</script>
<style lang="scss" scoped>
</style>
