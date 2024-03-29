<template>
  <h1>Projeto UBI</h1>
  <label for="email">Insira seu e-mail:</label>
  <input type="email" name="email" class="input" placeholder="name@example.com">

  <label for="password">Insira sua senha:</label>
  <input type="password" name="password" class="input" placeholder="Senha">

  <Button label="Entrar" :handleClick="goTo"></Button>
</template>

<script>
import Button from "../components/Button.vue";
import Input from '../components/Input.vue';

export default {
  components: {
    Button,
    Input,
  },
  methods: {
    goTo() {
      this.$router.push('/about');
    }
  }
}


</script>

<style></style>
