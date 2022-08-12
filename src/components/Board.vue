<template>
  <div class="board">
    <div class="board__header">
      {{ openedCount }} {{ closedCount }}
    </div>

    <div class="board__body">
      <ul>
        <li v-for="issue in issuesList">
          {{ issue }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Board',

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

