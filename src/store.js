import { reactive } from "vue";

class Item {
  constructor(name, createdAt, checked) {
    this.id = Date.now();
    this.name = name;
    this.createdAt = createdAt;
    this.checked = checked;
  }
}

export const store = reactive({
  list: [],
  addItem(name) {
    this.list.push(new Item(name, new Date().toDateString(), false));
  },
  toggleChecked(id) {
    const item = this.list.find((i) => i.id === id);

    item.checked = !item.checked;
  },
  removeItem(id) {
    this.list = this.list.filter((i) => i.id !== id);
  },
  updateItem(id, value) {
    const item = this.list.find((i) => i.id === id);

    item.name = value;
  }
});
