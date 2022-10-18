<template>
  <div>
     <h1>Display</h1>

     <div class="list-container">
      <div v-for="message in messages" :key="message.id">
        <b>
          {{ message.user }}
        </b>
        : {{ message.text }}
      </div>
    </div>

  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: 'VueRouterChatDisplay',

  data() {
    return {
      messages:[],
    };
  },

  mounted() {
    
  },

  methods: {

    show() {
      this.joined = true;
      this.socketInstance = io("http://localhost:3000");

      this.socketInstance.on(
        "message:received", (data) => {
          this.messages = this.messages.concat(data);
        }
      )
    },
    
  },

  created(){
    this.show();
  }
};
</script>

<style lang="scss" scoped>

</style>