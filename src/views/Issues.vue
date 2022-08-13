<template>
  <div class="issues">
    <h1 class="issues__title">
      Issues for <a class="issues__owner">vuejs</a> / <a class="issues__repo">vue</a>
    </h1>

    <Board
      class="issues__board"
      :issues-list="issuesList"
      :opened-count="openedCount"
      :closed-count="closedCount"
    />
  </div>
</template>

<script>
import Board from '@/components/Board';
import { mapGetters } from 'vuex';

export default {
  components: {
    Board,
  },

  computed: {
    ...mapGetters(['issuesList', 'openedCount', 'closedCount']),
  },

  mounted() {
    this.$store.dispatch('getIssues');
    console.log(this.$store);
    this.$store.dispatch('getRepoInfo');
  },
}
</script>

<style scoped>

</style>
