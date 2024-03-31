<template>
  <div class="ubi-Input">
    <label class="ubi-Label">
      {{ label }}
    </label>
    <input 
      class="ubi-input-put" 
      :type="type" 
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style scoped> 
.ubi-Input {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.ubi-Label {
  font-family:  "Archivo Black", sans-serif;
  font-size: 14px;
  margin-bottom: 4px;
}
.ubi-input-put {
  height: 40px;
  width: 100%;
  border: 1px solid #949090;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px;
  font-family: "Abel", sans-serif;
  font-size: 14px;
}
input:focus {
  border: 1px solid rgb(9, 109, 53);
  outline: 0;
}
</style>