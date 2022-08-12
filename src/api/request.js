import { Octokit } from '@octokit/core';

class Request {
  constructor() {
    this.token = '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';
    this._request = new Octokit({ auth: `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` });
  }

  get(url, options = {}) {
    return this._request.request(`GET ${url}`, options);
  }

  /* put, delete, post */
}

const request = new Request();

export default request;
