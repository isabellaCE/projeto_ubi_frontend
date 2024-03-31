<template>
  <div class="ubi-register">
    <div class="ubi-form">
      <div class="ubi-title">{{ $t('register.UBI') }}</div>
      <div class="ubi-inputs">
        <Input 
          :label="$t('register.label_name')"
          :placeholder="$t('register.placeholder_name')"    
        />
        <Input 
          :label="$t('register.label_surname')"
          :placeholder="$t('register.placeholder_surname')"    
        />
        <Input 
          :label="$t('register.label_email')"
          :placeholder="$t('register.placeholder_email')"     
          type="email"
        />
        <Input 
          :label="$t('register.label_password')"
          :placeholder="$t('register.placeholder_password')"     
          type="password"
        />
        <Input 
          :label="$t('register.label_confirm_password')"
          :placeholder="$t('register.placeholder_confirm_password')" 
          type="password"
        />
      </div>
      <Button :label="$t('register.register')" :handleClick="goTo"></Button>
      <div class="have-account">
        <span>{{ $t('register.have_account') }}</span>
        <span class="login" @click="goTo">{{ $t('register.login') }}</span>
      </div>
    </div>
    <div class="ubi-banner">
      <div class="img">
        <img src="../assets/banner.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default {
  components: {
    Input,
    Button,
  },
  methods: {
    goTo() {
      this.$router.push('/');
    },
  },
  i18n: {
    messages: {
      en: {
        null_label: 'Null',
      },
      pt: {
        null_label: 'Nulo',
      },
    },
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
  margin-top: 32px;
}
.login {
  color: #780000;
  cursor: pointer;
}
</style>
