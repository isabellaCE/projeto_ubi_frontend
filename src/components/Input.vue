<template>
    <div class="input" :style="getBackground()">
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
        color: {
            type: String,
            dafault: '#FFFF',
        },
    },
    computed: {
        getBackground() {
            return `background-color: ${this.color}`
        },
    },
}
</script>

<style>
h1 {
    font-family: 'Archivo Black';
}
label{
    display: flex;
    justify-content: left;
  align-items: left;
  margin-top: 15px;
  font-family: 'Abel';
}
.input {
    background-color: #FFFF;
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border-color: #949090;
    color: #949090;
    font-family: 'Abel';
}
</style>