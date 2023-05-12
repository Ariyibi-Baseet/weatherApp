<template>
  <router-view />
</template>

<style>
:root {
  /* colors */
  --white: #f2f7ff;
  --yellow: #ffce63;
  --navy: #10316b;
  --blue: #0b409c;
}
#app {
  background-image: linear-gradient(
      rgba(24, 24, 24, 0.45),
      rgba(125, 121, 121, 0.45)
    ),
    url("../public/img/cloud.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;
  min-height: 100vh;
  font-family: "Noto Sans", sans-serif;
}
</style>
