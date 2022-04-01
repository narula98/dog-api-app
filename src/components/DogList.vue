<template>
  <div class="container">
    <n-spin v-if="showSpinner" />
    <div v-else class="row py-4">
      <div
        v-for="(dog, index) in pageOfItems"
        :key="index"
        class="col-md-3 col-lg-3 col-sm-3 col-xl-3 dogList"
      >
        <random-dog-image :DogName="dog" class="button-pointer" />
        <p class="text-center">{{ dog }}</p>
      </div>
      <div class="card text-center m-3 align-items-center">
        <div class="card-footer pb-0 pt-3">
          <v-pagination
            v-model="page"
            :records="totalItems"
            :per-page="16"
            @paginate="onChangePage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DogApi from '../services/DogApi';
import RandomDogImage from './RandomDogImage.vue';

export default {
  name: 'DogComponent',

  components: {
    RandomDogImage,
  },

  async created() {
    await this.getDogBreeds();
  },

  data() {
    return {
      dogBreeds: [],
      dogServiceError: false,
      showSpinner: false,
      pageOfItems: [],
      page: 1,
      totalItems: 0,
    };
  },
  methods: {
    async getDogBreeds() {
      try {
        this.showSpinner = true;
        const resp = await DogApi.getAllDogsList();
        this.dogBreeds = Object.keys(resp.message);
        this.totalItems = this.dogBreeds.length;
        this.onChangePage(1);
      } catch {
        this.dogServiceError = true;
      } finally {
        this.showSpinner = false;
      }
    },
    onChangePage(myCallback) {
      // update page of items
      console.log(myCallback);
      const localDogArr = this.dogBreeds;
      this.pageOfItems = localDogArr.slice(16 * (myCallback - 1), (16 * (myCallback - 1)) + 16);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
