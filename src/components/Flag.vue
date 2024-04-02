<template>
  <img alt="flag" :src="image" :class="{'no-selected': !isSelected}"/>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    isSelected: {
      type: Boolean,
      default: false,
    }
  },
}  
</script>

<style>
.no-selected {
  opacity: 0.5;
}
</style>
