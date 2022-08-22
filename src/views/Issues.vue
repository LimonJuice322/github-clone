<template>
  <div class="issues">
    <h1 class="issues__title">
      Issues for <a href="#" class="issues__owner">vuejs</a> / <a href="#" class="issues__repo">vue</a>
    </h1>

    <div
      v-if="issuesLoading"
      class="issues__loader"
    ></div>

    <div
      v-else
      class="issues__main"
    >
      <Board
        class="issues__board"
        :state="state"
        :issues-list="issuesList"
        :opened-count="openedCount"
        :closed-count="closedCount"
        @filter-issues="filterIssues"
      />

      <Paginator
        class="issues__paginator"
        @get-current-page="changePage"
        :current-page="currentPage"
        :total-pages="totalPages"
      />
    </div>
  </div>
</template>

<script>
import Board from '@/components/Board';
import Paginator from '@/components/Paginator';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    Board,
    Paginator,
  },

  computed: {
    ...mapGetters(['issuesList', 'openedCount', 'closedCount']),
    ...mapState({
      issuesLoading: state => state.issues.loading
    }),

    totalPages() {
      return this.state === 'open' ? Math.round(this.openedCount / 30) : Math.round(this.closedCount / 30);
    },
  },

  mounted() {
    this.loadIssues();
    this.$store.dispatch('getRepoInfo');
  },

  data() {
    return {
      state: 'open',
      currentPage: 1,
    }
  },

  methods: {
    filterIssues(state) {
      if (state !== this.state) {
        this.$store.dispatch('getIssues', { state });
        this.state = state;
      }
    },

    changePage(page) {
      this.currentPage = page;

      this.loadIssues();
    },

    loadIssues() {
      this.$store.dispatch('getIssues', { page: this.currentPage, state: this.state });
    }
  },
}
</script>

<style scoped>

</style>
