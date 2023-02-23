<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      count: JSON.parse(localStorage.getItem("count"))
        ? Number(localStorage.getItem("count"))
        : this.$props.count
    };
  },
  methods: {
    incrementBy(number) {
      this.count += number;
    },
    decrementBy(number) {
      this.count -= number;
    },
    reset() {
      this.count = 0;
    },
    saveOnLocalStorage() {
      localStorage.setItem("count", this.count.toString());
    },
    deleteFromLocalStorage() {
      localStorage.removeItem("count");
    }
  }
};
</script>

<template>
  <h1>Count App</h1>
  <p>Count: {{ count }}</p>
  <button @click="incrementBy(1)">+1</button>
  <button @click="decrementBy(1)">-1</button>
  <button @click="reset()">Reset</button>

  <button @click="saveOnLocalStorage()">Save count on localStorage</button>
  <button @click="deleteFromLocalStorage()">
    Delete count from localStorage
  </button>
</template>

<style scoped></style>
