<template >
  <v-container class="fullscreen">
    <v-row align="center"
      justify="center"
      height="100%"
      class="fullscreen color"
    >
      <v-col col-md="4" col-xs="1"></v-col>
      <v-col col-md="4" col-xs="10" height="100%" >
        <v-card
          elevation="2"
          outlined
          align="center"
        >
          <v-card-title
            class="headline justify-center choicecard"
            width="100%"
          >
            On mange ...
          </v-card-title>

          <p id="choicezone">
            <b id="choice">{{ choice }}</b>
          </p>

          <v-card-actions class="justify-center">
            <v-btn  @click="choose" color="secondary">Berk ... t'as pas autre chose ?</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col col-md="4" col-xs="1"></v-col>
    </v-row>    

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
  font-size: 8vw;
}

#choicezone{
  width: 80%;
  height: 80%;
  margin-top:10vh;
  margin-bottom: 10vh;
}

.fullscreen {
  height: 90vh;
}

.choicecard{
  width: 100%;
  height: 10vh;
}
</style>
