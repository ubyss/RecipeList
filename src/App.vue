<template>
  <router-view/>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
  }
  body {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    color: white;
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
  }
  a {
    color: #2aeb74;
    text-decoration: none;
  }
  button {
    appearance: none;
    border: none;
    background: none;
    cursor: pointer;
    background-color: #2aeb74;
    font-size: 1.125rem;
    color: #030e1b;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
</style>
