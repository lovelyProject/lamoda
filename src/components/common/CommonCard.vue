<template lang="pug">
.card
  img.card__icon(
  :src="state.image"
  :alt="state.title"
  )
  span.card__caption {{ state.price }}$
  span.card__caption(
    :title="state.title"
  ) {{ state.title }}
  primary-button(
    modifier="primary"
    @onButton="onButton"
    ) {{ btnTitle }}
</template>

<script>
import PrimaryButton from "@/components/ui/PrimaryButton.vue";
export default {
  props: {
    state: {
      type: Object,
      required: true
    },
    btnTitle: {
      type: String,
      default: "Добавить в корзину"
    }
  },
  components: {
    PrimaryButton
  },
  methods: {
    onButton() {
      this.$emit("onButton", this.state);
    }
  }
}
</script>

<style scoped lang="sass">
.card
  display: flex
  flex-direction: column
  width: 200px
  padding: 10px
  transition: box-shadow .2s ease-out

  &:hover
      box-shadow: 0 0 3px 0 $gray

  &__icon
    height: 200px
    object-fit: contain

  &__caption
    white-space: nowrap
    overflow: hidden
    padding: 5px
    text-overflow: ellipsis

</style>