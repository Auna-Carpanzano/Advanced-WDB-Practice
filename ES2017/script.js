// ASYNC FUNCTIONS
async function hasMostFollowers(...usernames) {
  let baseURL = "https://api.github.com/users/"
  let urls = usernames.map(username => $.getJSON(baseURL + username));
  let results = await Promise.all(urls);
  let max = results.sort((a, b) => a.followers < b.followers)[0];
  return `${max.name} has the most followers with ${max.followers}`
}

async function starWarsString (id) {
  let str = '';
  let results = await $.getJSON(`https://swapi.co/api/people/${id}/`);
  str += `${results.name} is featured in `;
}
