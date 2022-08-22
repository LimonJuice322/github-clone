import { createStore } from 'vuex'
import client from '@/api/client';

export default createStore({
  state: {
    issues: {
      data: null,
      error: false,
      loading: false,
    },

    repo: {
      data: {
        openIssues: null,
        closedIssues: null,
      },
      error: false,
      loading: false,
    }
  },
  getters: {
    issuesList(state) {
      return state.issues.data;
    },
    openedCount(state) {
      return state.repo.data.openIssues;
    },
    closedCount(state) {
      return state.repo.data.closedIssues;
    }
  },
  mutations: {
    GET_ISSUES(state, payback) {
      state.issues.data = payback;
    },
    START_ISSUES_LOAD(state) {
      state.issues.loading = true;
    },
    ERROR_ISSUES_LOAD(state) {
      state.issues.error = true;
    },
    END_ISSUES_LOAD(state) {
      state.issues.loading = false;
    },

    GET_ISSUES_COUNT(state, payback) {
      state.repo.data.openIssues = payback;
    },
    GET_CLOSED_ISSUES_COUNT(state, payback) {
      state.repo.data.closedIssues = payback;
    },
    START_ISSUES_COUNT_LOAD(state) {
      state.repo.loading = true;
    },
    ERROR_ISSUES_COUNT_LOAD(state) {
      state.repo.error = true;
    },
    END_ISSUES_COUNT_LOAD(state) {
      state.repo.loading = false;
    }
  },
  actions: {
    async getIssues({ commit }, options) {
      try {
        commit('START_ISSUES_LOAD');

        const response = await client.getIssues(options);
        const issues = response.data;

        commit('GET_ISSUES', issues);
      } catch(e) {
        commit('ERROR_ISSUES_LOAD');
        console.log(e);
      } finally {
        commit('END_ISSUES_LOAD');
      }
    },

    async getRepoInfo({ commit }) {
      try {
        commit('START_ISSUES_COUNT_LOAD');

        const responseInfo = await client.getRepoInfo();
        const responseCount = await client.getCountRepoIssues();

        const { open_issues } = responseInfo.data;
        const { total_count } = responseCount.data;
        const closedIssues = total_count - open_issues;

        commit('GET_ISSUES_COUNT', open_issues);
        commit('GET_CLOSED_ISSUES_COUNT', closedIssues);
      } catch(e) {
        commit('ERROR_ISSUES_COUNT_LOAD');
        console.log(e)
      } finally {
        commit('END_ISSUES_COUNT_LOAD');
      }
    }
  },
  modules: {
  }
})
