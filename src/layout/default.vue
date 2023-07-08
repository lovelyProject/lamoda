<template lang="pug">
header.header
  .header__container
    .header__content
      router-link(
        :to="{name: 'home'}"
        class="header__logo"
      ) Lamoda
  nav.header__nav
    ul.header__list
      li.header__list-item(
        v-for="{ query, title, id } in filters"
        :key="id"
      )
        router-link(
          :to="`/products${query}`"
          class="header__link gender"
        ) {{ title }}
    router-link.header__link-container.cart(
        :to="{name: 'home'}"
    )
      img.header__icon(
          src="@/assets/icons/cart.svg"
          alt="корзина"
      )
      span.header__link Корзина
main.wrapper
  slot
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      filters: (state) => state.main.filters
    })
  }
}
</script>
<style scoped lang="sass">
.header
  &__container
    background-color: $black

  &__content
    padding: 5px 30px

  &__nav
    padding: 0 30px
    margin-top: 30px
    display: flex
    justify-content: space-between

  &__logo
    color: $white
    font-size: 24px

  &__list
    display: flex
    gap: 10px

  &__link
    color: $gray
    transition: color .2s ease-out

    &:hover
      color: $black

    &-container
      display: flex
      gap: 5px

  .gender.router-link-active
    text-decoration: underline
    color: $black

  &__icon
    width: 20px
.wrapper
  padding: 0 30px
</style>