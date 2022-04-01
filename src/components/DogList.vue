<template>
  <div class="text-danger">
    hello
    <n-spin v-if="showSpinner"/>
  </div>
</template>

<script>
import DogApi from '../services/DogApi';

export default {
  name: 'DogComponent',
  async created() {
    await this.getDogBreeds();
  },
  data() {
    return {
      dogBreeds: [],
      dogServiceError: false,
      showSpinner: false,
    };
  },
  methods: {
    async getDogBreeds() {
      try {
        this.showSpinner = true;
        const resp = await DogApi.getAllDogsList();
        console.log(resp);
      } catch {
        this.dogServiceError = true;
      } finally {
        this.showSpinner = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
