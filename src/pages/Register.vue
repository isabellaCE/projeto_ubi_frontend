<template>
  <div class="ubi-register">
    <div class="ubi-form">
      <div class="ubi-title">{{ $t('register.UBI') }}</div>
      <div class="ubi-inputs">
        <Input 
          :label="$t('register.label_name')"
          :placeholder="$t('register.placeholder_name')"   
          v-model="name" 
          @input="getName"
        />
        <Input 
          :label="$t('register.label_surname')"
          :placeholder="$t('register.placeholder_surname')"    
          v-model="surname" 
          @input="getSurname"
        />
        <Input 
          :label="$t('register.label_email')"
          :placeholder="$t('register.placeholder_email')"     
          type="email"
          v-model="email" 
          @input="getEmail"
        />
        <Input 
          :label="$t('register.label_password')"
          :placeholder="$t('register.placeholder_password')"     
          type="password"
          v-model="password" 
          @input="getPassword"
        />
        <Input 
          :label="$t('register.label_confirm_password')"
          :placeholder="$t('register.placeholder_confirm_password')" 
          type="password"
          v-model="password_confirm" 
          @input="confirmPassword"
        />
      </div>
      <Button :label="$t('register.register')" :handleClick="goTo"></Button>
      <div class="have-account">
        <span>{{ $t('register.have_account') }}</span>
        <span class="login" @click="goTo">{{ $t('register.login') }}</span>
      </div>
      <ChooseLanguage/>
    </div>
    <div class="ubi-banner">
      <div class="img">
        <img src="../assets/banner.png">
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import ChooseLanguage from "../components/ChooseLanguage.vue";

export default {
  components: {
    Input,
    Button,
    ChooseLanguage,
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      password_confirm: '',
    }
  },
  methods: {
    goTo() {
      this.$router.push('/');
    },
    getName(name) {
      this.name = name;
    },
    getSurname(surname) {
      this.surname = surname;
    },
    getEmail(email) {
      this.email = email;
    },
    getPassword(password) {
      this.password = password;
    },
    confirmPassword(password) {
      this.password_confirm = password;
    }
  },
}
</script>

<style scoped>
.ubi-register {
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
  width: 100vw;
  font-family: "Abel", sans-serif;
}
.ubi-form {
  padding-left: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
}
.ubi-title {
  font-family:  "Archivo Black", sans-serif;
  font-size: 32px;
  margin-bottom: 32px;
}
.ubi-inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
}
.ubi-banner {
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.have-account {
  margin: 32px 0;
}
.login {
  color: #780000;
  cursor: pointer;
}
</style>
