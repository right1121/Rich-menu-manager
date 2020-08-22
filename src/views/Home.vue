<template>
  <div class="home">
    <TokenForm />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TokenForm from "@/components/TokenForm.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    TokenForm
  }
};
</script>
