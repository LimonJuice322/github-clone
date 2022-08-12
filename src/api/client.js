import request from './request';

class Client {
  constructor() {
    this._request = request;
  }

  getRepoInfo() {
    return this._request.get('/repos/vuejs/vue', {})
  }

  getCountRepoIssues() {
    return this._request.get('/search/issues?q=repo:vuejs/vue+type:issue+state:closed')
  }

  getIssues(currentPage = 1) {
    return this._request.get('/repos/vuejs/vue/issues', {
      page: currentPage,
    })
  }
}

const client = new Client();

export default client;
