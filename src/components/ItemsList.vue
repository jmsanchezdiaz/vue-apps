<script>
import { store } from "../store";
export default {
  data() {
    return {
      store
    };
  },
  methods: {
    toggleStatus(id) {
      this.store.toggleChecked(id);
      window.localStorage.setItem("items", JSON.stringify(this.store.list));
    },
    removeItem(id) {
      this.store.removeItem(id);
      window.localStorage.setItem("items", JSON.stringify(this.store.list));
    }
  }
};
</script>

<template>
  <ul>
    <li v-for="item in store.list" :key="item.id">
      <div class="item">
        <div>
          <div>
            <span>{{ item.name }}</span>
            -
            <span class="createdAt">{{ item.createdAt }}</span>
          </div>
          <span :class="{ done: item.checked, undone: !item.checked }">{{
            item.checked ? "Completado" : "En progreso"
          }}</span>
        </div>
        <div>
          <button @click="$emit('select-to-update', item)">[Editar]</button>
          <input
            @change="toggleStatus(item.id)"
            type="checkbox"
            :value="item.checked"
            :checked="item.checked"
          />
          <button @click="removeItem(item.id)" style="color: red">[X]</button>
        </div>
      </div>
    </li>
  </ul>
</template>
