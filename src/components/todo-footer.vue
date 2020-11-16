<template>
  <footer class="footer" v-if="list.length > 0">
    <!-- 剩余完成数 -->
    <span class="todo-count"
      ><strong>{{ getLength }}</strong> item left</span
    >
    <!-- 过滤是否完成任务 -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- 清除已完成 -->
    <button @click="clear" class="clear-completed" v-if="getDone">
      Clear completed
    </button>
  </footer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["clearValue"]),
    clear() {
      this.clearValue();
    },
  },
  computed: {
    ...mapState(["list"]),
    ...mapGetters(["getDone", "getLength"]),
  },
};
</script>

<style>
</style>