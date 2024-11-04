class StackoverflowApi {
  url = "https://api.stackexchange.com/2.3/similar?order=desc&sort=activity";

  fetchPosts(title) {
    return fetch(`${this.url}&title=${title}site=stackoverflow`)
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp;
  }
}

export default StackoverflowApi;
