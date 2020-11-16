<template>
  <!-- 主体 -->
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="allFlag"
      @change="changeAll"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{ completed: item.done, editing: editId == item.id }"
        v-for="item in list"
        :key="item.id"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            @change="changeDone(item.id, $event)"
            v-model="item.done"
          />
          <label @dblclick="updataContent(item.id)">{{ item.content }}</label>
          <button @click="delContent(item.id)" class="destroy"></button>
        </div>
        <input
          class="edit"
          @keyup.enter="editContent(item.id, $event)"
          v-model="item.content"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      editId: -1,
    };
  },
  methods: {
    ...mapMutations(["del", "updataValue", "updataDone", "changeAllFlag"]),
    delContent(id) {
      console.log(id);
      this.del(id);
    },
    updataContent(id) {
      this.editId = id;
    },
    editContent(id, e) {
      console.log(id, e.target.value);
      let res = e.target.value;
      this.updataValue({
        id,
        res,
      });
      this.editId = -1;
    },
    changeDone(id, e) {
      console.log(e.target.checked);
      const flag = e.target.checked;
      this.updataDone({
        id,
        flag,
      });
    },
    changeAll(e) {
      console.log(e.target.checked);
      this.changeAllFlag(e.target.checked);
    },
  },
  computed: {
    ...mapState([["list"]]),
    ...mapGetters(["allFlag"]),
  },
};
</script>

<style>
</style>