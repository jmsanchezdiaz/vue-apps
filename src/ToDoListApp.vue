<script>
import ItemsList from "./components/ItemsList.vue";
import { store } from "./store.js";
export default {
  data() {
    return {
      store,
      selectedId: null,
      inputText: ""
    };
  },
  methods: {
    handleSubmit() {
      if (!this.inputText) return;
      if (this.selectedId) {
        this.store.updateItem(this.selectedId, this.inputText);
        this.selectedId = null;
      } else this.store.addItem(this.inputText);
      window.localStorage.setItem("items", JSON.stringify(this.store.list));
      this.inputText = null;
    },
    selectToUpdate(item) {
      this.selectedId = item.id;
      this.inputText = item.name;
    }
  },
  components: { ItemsList },
  mounted() {
    const items = JSON.parse(window.localStorage.getItem("items"));
    if (items) this.store.list = items;
  }
};
</script>

<template>
  <h2>Todo List</h2>

  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="inputText" placeholder="Ingrese nueva tarea" />
    <button type="submit">{{ selectedId ? "Update" : "Crear" }}</button>
  </form>

  <ItemsList @select-to-update="selectToUpdate" />
</template>

<style>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 1rem;
}
.createdAt {
  color: rgb(167, 165, 165);
  font-style: italic;
}

.done {
  color: green;
}

.undone {
  color: red;
}
</style>
