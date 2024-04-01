<template>
  <div class="languages">
    <div v-for="(lang) in flags">
      <Flag 
        :image="lang.image" 
        :isSelected="$i18next.resolvedLanguage === lang.language" 
        @click="changeLanguage(lang.language)"/>
    </div>
  </div>
</template>

<script>
import Flag from "../components/Flag.vue";

export default {
  name: 'ChooseLanguage',
  components: {Flag},
  data () {
    return {
      flags: [
        { 
          image: 'src/assets/brazil_flag.png',
          language: 'pt',
          isSelected: false
        },
        { 
          image: 'src/assets/eua_flag.png',
          language: 'en',
          isSelected: false
        },
      ],
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18next.changeLanguage(lang);
    }
  }
}
</script>

<style>
.languages {
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.language {
  font-weight: bold;
}
</style>