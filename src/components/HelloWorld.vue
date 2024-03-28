<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ $t('hello') }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div v-if="languages">
    <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
      <a v-if="$i18next.resolvedLanguage !== lng" v-on:click="$i18next.changeLanguage(lng)">
        {{ languages[lng].nativeName }}
      </a>
      <strong v-if="$i18next.resolvedLanguage === lng">
        {{ languages[lng].nativeName }}
      </strong>
      <span v-if="index < (Object.keys(languages).length - 1)">&nbsp;|&nbsp;</span>
    </span>
  </div>
  <router-link to="/about">Go to about</router-link>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      languages: {
        en: { nativeName: 'English' },
        pt: { nativeName: 'Portuguese' }
      }
    }
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
