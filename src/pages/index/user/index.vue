<template>
    <div class="user">
        <ul>
            <li v-for="(itme,index) in list" :key="index" v-text="itme.name"></li>
        </ul>
    </div>
</template>

<script>
// import { mapGetters } from "vuex';"
export default {
  name: "hengyu-user",
  props: {},
  data() {
    return {
        list:[
            {id: 1, name: '头像'},
            {id: 2, name: '上午好'},
            {id: 3, name: '昵称'},
            {id: 4, name: '退出'},
        ]
    };
  },
  components: {},
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
  beforeDestroy() {}
};
</script>
<style lang="scss" scoped>
.user {
    position: absolute;
    right: 10%;
    display: flex;
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        li {
            border: 1px solid red;
            margin-left: 10px;
        }
        li:first-child{
            min-width: 50px;
            min-height: 50px;
            border-radius: 50%;
        }
        // li:nth-child(n){}
    }
}
</style>
