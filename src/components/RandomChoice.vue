<template >
  <v-container>
    <v-row align="center"
      justify="center"
    >
    <v-card
      class="mt-10"
      elevation="2"
      outlined
      align="center"
      width="80%"
    >
      <p class="mt-10 mb-10">
        <b id="choice">{{ choice }}</b>
      </p>

    </v-card>

    </v-row> 
    <v-footer app bottom absolute color="transparent">
      <v-container>
        <div align="center">
          <v-btn elevation="2" @click="choose" color="secondary">Berk ... t'as pas autre chose ?</v-btn>
        </div>
      </v-container>
    </v-footer>

  </v-container>
</template>

<script>
  export default {
    name: 'RandomChoice',
    data: () => ({ 
      options: [
          "kebab",
          "tacos",
          "burger",
          "poutine",
          "sushi",
          "pad thai",
          "pizza",
          "salade ... mais pas ouf"
      ],
      choice: ""
    }),
    methods: {
      choose() {
        this.choice = this.options[Math.floor(Math.random()*this.options.length)]
      }
    },
    beforeMount(){
      this.choose()
    }
  }
</script>

<style scoped>
#choice{
  font-size: 6vh;
}
</style>
