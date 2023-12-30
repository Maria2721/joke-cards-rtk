const BASE_URL = "https://v2.jokeapi.dev/joke/";

export const ANY_JOKE = BASE_URL + "Any?type=single";

export const fewAnyJokes = (amount) =>
  BASE_URL + "Any?type=single&amount=" + amount;

export const filterByCategories = (category) =>
  BASE_URL + category + "?type=single";

export const filterByBlacklist = (flags) =>
  BASE_URL + "Any?blacklistFlags=" + flags + "&type=single";
