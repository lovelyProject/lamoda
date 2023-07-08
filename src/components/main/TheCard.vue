<template lang="pug">
figure.card
  img.card__icon(
  :src="state.icon"
  )
  figcaption.card__caption {{ state.title }}
</template>

<script>
export default {
  props: {
    state: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="sass">
.card
  width: 100%
  position: relative

  &__icon
    object-fit: cover
    width: inherit
    height: 500px
    transition: filter .2s ease-out

  &__caption
    width: 100%
    height: 60px
    color: $gray
    background-color: rgba($black, .7)
    position: absolute
    left: 0
    bottom: 6px
    display: grid
    align-items: center
    justify-content: center
    font-size: 24px
    font-weight: 600
    transition: color .2s ease-out

  &:hover .card__icon
    filter: blur(2px)

  &:hover .card__caption
    color: $white
@media screen and (width < 1100px)
  .card
    &__icon
      height: 300px
</style>