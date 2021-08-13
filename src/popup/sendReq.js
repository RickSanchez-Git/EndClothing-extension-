// const requestURL = 'https://jsonplaceholder.typicode.com/users'

export function sendReq(searchKey){
    let body = `{\"requests\":[{\"indexName\":\"catalog_products_en_search\",\"params\":\"query=${searchKey}&page=0&query=${searchKey}&clickAnalytics=true&userToken=anonymous-af737669-8469-440c-9aac-cdd7929a0fb5&enablePersonalization=true&analyticsTags=%5B%22search%22%2C%22web%22%2C%22ru%22%2C%22RU%22%5D&facetFilters=%5B%5B%22websites_available_at%3A13%22%5D%2C%5B%22menswear%3A1%22%5D%5D&facets=%5B%22*%22%5D&attributesToHighlight=%5B%22name%22%5D&ruleContexts=%5B%22search%22%2C%22web%22%2C%22v3%22%2C%22ru%22%2C%22RU%22%5D&hitsPerPage=120&filters=\"},{\"indexName\":\"catalog_products_en_search\",\"params\":\"query=${searchKey}&page=0&query=${searchKey}&clickAnalytics=true&userToken=anonymous-af737669-8469-440c-9aac-cdd7929a0fb5&enablePersonalization=true&analyticsTags=%5B%22search%22%2C%22web%22%2C%22ru%22%2C%22RU%22%5D&facetFilters=%5B%5B%22websites_available_at%3A13%22%5D%2C%5B%22menswear%3A1%22%5D%5D&facets=%5B%22*%22%5D&attributesToHighlight=%5B%22name%22%5D&ruleContexts=%5B%22search%22%2C%22web%22%2C%22v3%22%2C%22ru%22%2C%22RU%22%5D&hitsPerPage=120\"},{\"indexName\":\"catalog_products_en_search\",\"params\":\"query=${searchKey}&page=0&query=${searchKey}&clickAnalytics=true&userToken=anonymous-af737669-8469-440c-9aac-cdd7929a0fb5&enablePersonalization=true&analyticsTags=%5B%22search%22%2C%22web%22%2C%22ru%22%2C%22RU%22%5D&facetFilters=%5B%5B%22menswear%3A1%22%5D%5D&facets=websites_available_at&attributesToHighlight=%5B%22name%22%5D&ruleContexts=%5B%22search%22%2C%22web%22%2C%22v3%22%2C%22ru%22%2C%22RU%22%5D&hitsPerPage=120&analytics=false&filters=\"},{\"indexName\":\"catalog_products_en_search\",\"params\":\"query=${searchKey}&page=0&query=${searchKey}&clickAnalytics=true&userToken=anonymous-af737669-8469-440c-9aac-cdd7929a0fb5&enablePersonalization=true&analyticsTags=%5B%22search%22%2C%22web%22%2C%22ru%22%2C%22RU%22%5D&facetFilters=%5B%5B%22websites_available_at%3A13%22%5D%5D&facets=menswear&attributesToHighlight=%5B%22name%22%5D&ruleContexts=%5B%22search%22%2C%22web%22%2C%22v3%22%2C%22ru%22%2C%22RU%22%5D&hitsPerPage=120&analytics=false&filters=\"}]}`;
    return fetch('https://ko4w2gbink-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser&x-algolia-application-id=KO4W2GBINK&x-algolia-api-key=dfa5df098f8d677dd2105ece472a44f8', {
        "headers": {
          "accept": "application/json",
          "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
          "content-type": "application/x-www-form-urlencoded",
          "sec-ch-ua": "\"Opera GX\";v=\"77\", \"Chromium\";v=\"91\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site"
        },
        "referrer": "https://www.endclothing.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": body,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
      }).then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
        let mas = [];
        let pushVariable = [];
        let features = [];
        for (let i = 0; i < data.results[0].hits.length; i++){
          features = updateFeatures(data.results[0].hits[i].actual_colour,
            data.results[0].hits[i].url_key, 
            data.results[0].hits[i].small_image);

          pushVariable.push(data.results[0].hits[i].name, features);
          
          mas.push(pushVariable);
          pushVariable = [];
        }
        console.log(mas);
        return mas;
      })
}


function updateFeatures(...other){
  let mas = [];
  for (let i = 0; i < other.length; i++){
    mas[i] = other[i];
  }
  return mas;
}
// sendReq('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))