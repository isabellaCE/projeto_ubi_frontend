<template>
  <component
    :is="name"
    v-bind="$props"
    class="ubi-Icon"
  />
</template>

<script>
export default {
  name: 'IconBase',
  components: {
    User: () => import('./User.vue'),
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: 19,
    },
  },
};
</script>

<style lang="scss" scoped>
.ubi-Icon {
  &.-pointer {
    cursor: pointer;
  }
}
</style>
