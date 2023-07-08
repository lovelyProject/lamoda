<template lang="pug">
div {{ filterParam }}
</template>

<script>
//state
import { actionTypes } from "@/store/product";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      products: (state) => state.product.products
    }),
    filterParam() {
      return this.$route.query.filter;
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getProducts)
  },
}
</script>