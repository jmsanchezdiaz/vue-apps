<script>
import api from "./api";

export default {
  data() {
    return {
      qoute: null
    };
  },
  methods: {
    genNewQuote() {
      api.random().then((res) => {
        this.qoute = res;
      });
    }
  },
  mounted() {
   this.genNewQuote()
  }
};
</script>

<template>
  <div>
    <h1>Random Qoute</h1>
    <h2 v-if="!qoute">loading...</h2>
    <p v-if="qoute">
      {{ qoute.content }}
      <br />
      <small>{{ qoute.author }}</small>
      <br />
      <time>{{ qoute.dateAdded }}</time>
      <ul>
        <li v-for="tag in qoute.tags" :key="tag">
          {{ tag }}
        </li>
      </ul>
    </p>
    <button @click="genNewQuote">Gen new quote</button>
  </div>
</template>

<style scoped></style>
