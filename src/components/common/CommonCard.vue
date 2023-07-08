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
    ) Добавить в корзину
</template>

<script>
import PrimaryButton from "@/components/ui/PrimaryButton.vue";
export default {
  props: {
    state: {
      type: Object,
      required: true
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

  &__icon
    height: 200px
    object-fit: contain

  &__caption
    white-space: nowrap /* Запрещаем перенос строк */
    overflow: hidden /* Обрезаем все, что не помещается в область */
    padding: 5px /* Поля вокруг текста */
    text-overflow: ellipsis /* Добавляем многоточие */

</style>