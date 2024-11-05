class StackoverflowApi {
  url = "https://api.stackexchange.com/";

  fetchPosts(title, option) {
    return fetch(
      `${this.url}2.3/similar?order=desc&sort=${option}&title=${title}&site=stackoverflow`
    )
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
