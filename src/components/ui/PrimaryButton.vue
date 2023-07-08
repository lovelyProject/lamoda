<template lang="pug">
button.button(
  :class="`m-${modifier}`"
  @click="onButton"
  )
  slot
</template>

<script>
export default {
  props: {
    modifier: {
      type: String,
      default: "primary"
    },
  },
  methods: {
    onButton() {
      this.$emit("onButton")
    }
  }
}
</script>
<style scoped lang="sass">
.button
  background-color: transparent
  cursor: pointer
  border: none

.m-primary
  background-color: $black
  color: $white
  transition: background-color .2s ease-out, color .2s ease-out

  &:hover
    color: $black
    background-color: $white
    box-shadow: 0 0 2px 0 $black
</style>