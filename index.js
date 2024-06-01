const axios = require("axios").default;

const options = {
  method: "POST",
  url: "https://api.edenai.run/v2/text/moderation",
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDVlYjI4ZDctNzU2ZC00MGM2LWIwMDAtNjZjYWE5MzY5ZWNkIiwidHlwZSI6ImFwaV90b2tlbiJ9.KDPbpdCldB8PmGwk8ZAwX4UH8kEDxnh5IjNs_2h8UOY",
  },
  data: {
    providers: "microsoft, openai",
    language: "en",
    text: "Let's see if this text contains some hate or violence toward others!.",
    fallback_providers: "",
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
