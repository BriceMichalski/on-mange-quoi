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
        <v-progress-circular
          indeterminate
          color="primary"
          v-if="loading"
          class="mt-5"
        ></v-progress-circular>
        <p v-if="loading">{{ loadingMsg }}</p>

        <p class="mt-10 mb-10" v-if="!loading">
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

  import Api from '../services/api'

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
      choice: "",
      loading: false,
      loadingMsg: "Veuillez patienter pendant la connexion au server"
    }),
    methods: {
      choose() {
        this.choice = this.options[Math.floor(Math.random()*this.options.length)]
      },
      // troll() {
      //   for (let i = 0; i < 6; i++) {
      //     setTimeout(() => { 
      //       Api.fetch().then(
      //         (data) => {
      //           if(data == false){
      //             if( i < 4){
      //               let idx = i+1
      //               this.loadingMsg = "("+ idx +") Ca n'a pas marché, nouvelle tentative ... "
      //             }
      //             else if (i == 4) {
      //               this.loadingMsg = "On essaye une derniere fois ... "
      //             }
      //             else {
      //               this.loadingMsg = "Tant pis on va faire sans le back"
      //               setTimeout(() => {this.loading = false},2000)
      //             }
      //           }
      //         }
      //       )            
      //     }, 3000 * i);
      //   }
      // }
    },
    beforeMount(){
      // this.choose()
      // setTimeout(() => {this.troll()},2000)
    },
  }
</script>

<style scoped>
#choice{
  font-size: 6vh;
}
</style>
