<template>
  <h1>titulo</h1>
  <Button label="Entrar" :handleClick="goTo"></Button>
  <br>
  <router-link to="/register">Cadastre-se</router-link>
</template>

<script>
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";

export default {
  components: {
    Button, 
    Input,
  },
  methods: {
    goTo() {
      this.$router.push('/about');
    },
  }
}
</script>

<style lang="scss">
</style>
