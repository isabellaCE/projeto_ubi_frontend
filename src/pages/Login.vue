<template>
  <h1>titulo</h1>
  <Button label="Entrar" :handleClick="goTo"></Button>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button, 
  },
  methods: {
    goTo() {
      this.$router.push('/about');
    }
  }
}
</script>

<style></style>
