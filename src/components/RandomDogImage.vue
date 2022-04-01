<template>
  <div >
    <img
      :src="imgUrl"
      :alt="DogName"
      width="200"
      height="200"
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
  },
};
</script>

<style></style>
