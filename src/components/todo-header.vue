<template>
  <!-- 头部 -->
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      v-model="inputContent"
      @keyup.enter="addContent"
      placeholder="What needs to be done?"
      autofocus
    />
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      inputContent: null,
    };
  },
  methods: {
    ...mapMutations(["add"]),
    addContent(e) {
      console.log(e.target.value);
      if (e.target.value.trim() == "") {
        alert("内容不能为空！");
        return;
      }
      this.add(e.target.value.trim());
      this.inputContent = null;
    },
  },
};
</script>

<style>
</style>