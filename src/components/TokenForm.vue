<template>
  <div class="tokenForm">
    <v-form>
      <v-text-field
        label="チャネルアクセストークン"
        solo
        v-model="token"
      ></v-text-field>
      <v-btn @click="submit">submit</v-btn>
    </v-form>
  </div>
</template>

<script>
import { setAuthHeader } from "@/api";
export default {
  name: "tokenForm",
  data() {
    return {
      token: undefined
    };
  },
  methods: {
    submit() {
      setAuthHeader(this.token);
    }
  }
};
</script>
