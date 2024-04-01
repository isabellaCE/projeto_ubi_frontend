<template>
  <div class="ubi-Input">
    <label class="ubi-Label">
      {{ label }}
    </label>
    <input 
      class="ubi-input-put" 
      :class="{'error': error}"
      :type="type" 
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input.stop="$emit('input', $event.target.value)"
    >
    <span v-if="error" class="error_message">{{ error_message }}</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
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
    error: {
      type: Boolean,
      default: false,
    },
    error_message: {
      type: String,
      default: '',
    },
    modelValue: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
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
.error {
  border-color: red;
}
.error_message {
  color: red;
  margin-top: 4px;
}
</style>