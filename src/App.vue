<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-img
          alt="Onmangequoi Logo"
          class="shrink mr-2"
          contain
          src="@/assets/food-fork-drink.png"
          transition="scale-transition"
          width="40"
        />

        <h1>On Mange Quoi ?</h1>
      </div>
      <v-spacer></v-spacer>
      <a href="https://github.com/BriceMichalski/on-mange-quoi">
        <v-img
          alt="github"
          class="shrink"
          contains
          src="@/assets/GitHub-Mark-Light-120px-plus.png"
          transition="scale-transition"
          width="40"
        >
        </v-img>
      </a>

    </v-app-bar>

    <v-main >
      <RandomChoice/>
    </v-main>
  </v-app>
</template>

<script>
import RandomChoice from './components/RandomChoice';

export default {
  name: 'App',

  components: {
    RandomChoice,
  },

  data: () => ({
    //
  }),
};
</script>