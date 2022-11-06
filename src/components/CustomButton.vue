<template>
  <button @click="$emit('click', $event.target.value)" :style="{ background: color }">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    color: {
        type: String,
        default: '#3178be' 
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

button {
    max-width: 160px;
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    color: $white;
    opacity: 1;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
}

</style>