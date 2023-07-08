<template lang="pug">
.main
  the-loader(v-if="isLoading")
  ul.main__list(v-else)
    li.main__list-item(
    v-for="product in filterProducts"
    :key="product.id"
    )
      common-card(
      :state="product"
      @onButton="onButton"
      )
</template>

<script>
//components
import CommonCard from "@/components/common/CommonCard.vue"
import TheLoader from "@/components/ui/TheLoader.vue";

//state
import { actionTypes } from "@/store/product";
import { mapState } from "vuex";

export default {
  computed: {
    filterParam() {
      return this.$route.query.filter;
    },
    ...mapState({
      products: (state) => state.product.products,
      isLoading: (state) => state.product.isLoading,
    }),
    filterProducts() {
      const self = this;

      return this.products.filter((item) => {
        if (!self.filterParam) return true;

        return item.category === self.filterParam
      })
    }
  },
  methods: {
    onButton(product) {
      this.$store.commit("ADD_TO_CART", product)
    },
  },
  components: {
    CommonCard,
    TheLoader
  },
  mounted() {
    if (this.products) {
      this.$store.dispatch(actionTypes.getProducts)
    }
  },
}
</script>

<style scoped lang="sass">
.main
  margin-top: 100px

  &__list
    display: flex
    flex-wrap: wrap
    gap: 10px
    width: 1040px
    margin: 0 auto
</style>