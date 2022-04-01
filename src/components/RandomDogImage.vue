<template>
  <div class="d-flex justify-content-center">
    <img
      :src="imgUrl"
      :alt="DogName"
      width="200"
      height="200"
      @click="navigateToDogImage"
    />
  </div>
</template>

<script>
import DogApi from '../services/DogApi';

export default {
  name: 'RamdonImage',
  props: {
    DogName: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    await this.getRandomImage();
  },
  data() {
    return {
      imgUrl: '',
    };
  },
  methods: {

    async getRandomImage() {
      const resp = await DogApi.getAllDogRandomImage(this.DogName);
      this.imgUrl = resp.message;
    },

    navigateToDogImage() {
      this.$router.push({
        name: 'DogImageList',
        params: {
          dogName: this.DogName,
        },
      });
    },
  },
};
</script>

<style></style>
