<template lang="pug">
section.main
  .main__hero
    router-link(
      v-for="filter in filters"
      :key="filter.id"
      :to="`/products${filter.query}`"
    )
      card(:state="filter")
</template>

<script>
//components
import Card from "@/components/main/TheCard.vue"

//state
import { mapState } from "vuex";

export default {
  components: {
    Card
  },
  computed: {
    ...mapState({
      filters: (state) => state.main.filters
    })
  }
}
</script>

<style scoped lang="sass">
.main
  margin-top: 120px

  &__hero
    display: grid
    grid-column-gap: 5px
    grid-template-columns: repeat(3, 1fr)

@media screen and (width < 900px)
  .main
    margin-top: 50px
    &__hero
      grid-template-columns: none
</style>
