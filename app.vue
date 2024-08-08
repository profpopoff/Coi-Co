<template>
  <Header />
  <main>
    <!-- <poisk> -->
    <NuxtPage />
  </main>
</template>

<style>
@import url(./assets/styles/index.css);

body {
  color: #fff;
  background-color: var(--background);
  font-family: Outfit, sans-serif;
}

main {
  padding: var(--main-padding);
  padding-left: calc(var(--header-width) + 2 * var(--main-padding));
}
</style>