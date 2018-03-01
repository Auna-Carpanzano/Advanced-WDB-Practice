async function hasMostFollowers(...usernames) {
  let baseURL = "https://api.github.com/users/"
  let urls = usernames.map(username => $.getJSON(baseURL + username));
}
