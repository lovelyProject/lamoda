<template lang="pug">
.modal(@click.self="hideModal")
  .modal__container
    .modal__img-container
        img.modal__img(
          :src="state.image"
        )
    .modal__details
      h2 {{ state.title }}
      p.modal__text.m-description {{ state.description }}
      span.modal__text.m-rate Рейтинг: {{ state.rating.rate }}
      span.modal__text.m-price Цена: {{ state.price }}$
      .modal__btn
        primary-button(
          @onButton="onButton"
        ) Добавить в корзину
</template>

<script>
import PrimaryButton from "@/components/ui/PrimaryButton.vue";

export default {
  props: {
    state: {
      type: Object,
      required: true
    },
  },
  components: {
    PrimaryButton
  },
  methods: {
    hideModal() {
      this.$emit("hideModal")
    },
    onButton() {
      this.$emit("onButton", this.state)
    }
  },

}

</script>

<style lang="sass" scoped>
.modal
  width: 100vw
  height: 100vh
  overflow: hidden
  background-color: rgba($black, 0.8)
  position: fixed
  top: 0
  left: 0
  display: grid
  align-items: center
  justify-content: center
  cursor: pointer

  &__container
    max-width: 800px
    max-height: 500px
    background-color: $white
    display: flex
    overflow-y: auto
    padding: 40px
    gap: 30px
    cursor: default

  &__img
    object-fit: contain

    &-container
      flex-basis: 45%

  &__details
    flex-basis: 55%

  &__text
    display: block

  &__btn
    margin-top: 10px
.m-description
  margin-top: 30px
.m-rate
  margin-top: 10px
.m-price
  margin-top: 10px
</style>