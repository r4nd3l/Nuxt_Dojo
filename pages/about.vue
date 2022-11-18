<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
      perspiciatis enim praesentium vero molestias sequi eius magni, est iure
      saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
      perspiciatis enim praesentium vero molestias sequi eius magni, est iure
      saepe.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");

// const { data } = await useFetch("/api/main?name=amigo", {
//   method: "post",
//   body: { age: 30 },
// });
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
