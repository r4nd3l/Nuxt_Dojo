export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event);

  // handle post data
  // const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch(
    // apiKey is in the .env file!

    "https://api.currencyapi.com/v3/latest?apiKey="
  );

  return {
    data,
    // message: `Hello, ${name}! You are ${age} years old!`,
  };
});
