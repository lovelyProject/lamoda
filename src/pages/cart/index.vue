<template lang="pug">
section.cart
  h1.cart__title Корзина
  .cart__container
    h2.cart__subtitle(v-if="cart.length === 0") Корзина пуста...
    .cart__list-wrapper(v-else)
      ul.cart__list
        li.cart__list-item(
          v-for="product in cart"
          :key="product.id"
        )
          common-card(
            :state="product"
            :is-btn-active="true"
            btn-title="Удалить из корзины"
            @onButton="deleteProduct"
          )
      h3.cart__subtitle {{ totalCost }}
</template>

<script>
//components
import CommonCard from "@/components/common/CommonCard.vue"

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
    totalCost() {
      const sumArray = [];
      this.cart.forEach((item) => {
        sumArray.push(item.price * item.count)
      })

      return `Итого: ${sumArray.reduce((sum, currentValue) => sum + currentValue)}$`
    }
  },
  components: {
    CommonCard
  },
  methods: {
    deleteProduct(product) {
      this.$store.commit("DELETE_FROM_CART", product);
      this.$store.dispatch("UPDATE_LOCAL_CART");
    },
  }
}
</script>

<style scoped lang="sass">
.cart
  margin-top: 50px

  &__container
    margin-top: 80px

  &__subtitle
    margin-top: 50px

  &__list
    display: flex
    flex-wrap: wrap
    gap: 10px
    max-width: 1040px
    margin: 0 auto

@media screen and (width < 900px)
  .cart
    &__list
      display: block
</style>