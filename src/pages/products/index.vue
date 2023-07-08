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
      :is-btn-active="false"
      @click="toggleModal(product)"
      )
  the-modal(
    v-if="isModal"
    :state="modalState"
    @onButton="addToCart"
    @hideModal="toggleModal(null)"
  )
</template>

<script>
//components
import CommonCard from "@/components/common/CommonCard.vue"
import TheLoader from "@/components/ui/TheLoader.vue";
import TheModal from "@/components/modal/TheModal.vue";

//state
import { mapState } from "vuex";

export default {
  computed: {
    filterParam() {
      return this.$route.query.filter;
    },
    ...mapState({
      products: (state) => state.product.products,
      isLoading: (state) => state.product.isLoading,
      isModal: (state) => state.product.isModal,
      modalState: (state) => state.product.modalState,
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
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", product)
      this.$store.dispatch("UPDATE_LOCAL_CART");
      this.toggleModal(null);
    },
    toggleModal(product) {
      this.$store.commit("SET_MODAL_STATE", product)
      this.$store.commit("TOGGLE_MODAL")
    },
  },
  components: {
    CommonCard,
    TheLoader,
    TheModal
  },
  mounted() {
    if (this.products) {
      this.$store.dispatch("GET_PRODUCTS")
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
    max-width: 1040px
    margin: 0 auto

@media screen and (width < 900px)
  .main
    &__list
      display: block
</style>