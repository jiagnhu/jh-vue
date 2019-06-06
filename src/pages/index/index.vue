<template>
	<div class="jh-lonely">
		<header class="jh-lonely__header">
			<p>logo</p>
			<menus/>
			<top-user />
		</header>
		<main class="jh-lonely__main">
			<keep-alive>
				<router-view v-if="$route.meta.$keepAlive"/>
			</keep-alive>
			<router-view v-if="!$route.meta.$keepAlive"/>
		</main>
		<footer class="jh-lonely__footer"></footer>
	</div>
</template>
<script>
// import { mapGetters } from "vuex';"
import menus from "./menus/index.vue";
import topUser from "./user/index.vue";
export default {
  name: "hengyu-header",
  props: {},
  data() {
    return {};
  },
  components: {
	menus,
	topUser
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {
  },
  beforeDestroy() {}
};
</script>

<style lang="scss" scoped></style>
