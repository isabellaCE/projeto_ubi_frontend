<template>
  <div class="button" :style="getBackground" @click="handleClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    color:{
      type: String,
      default: '#780000'
    },
    handleClick: {
      type: Function,
      default: () => {}
    },
  },
  computed: {
    getBackground() {
      return `background-color: ${this.color}`
    }
  },
}  
</script>

<style>
.button {
  color: #FFFF;
  height: 40px;
  width: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -3px 5px 15px -8px rgba(127, 143, 164, 0.3);
  cursor: pointer;
  font-size: 20px;
}
</style>
