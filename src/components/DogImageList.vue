<template>
  <div class="container">
      <h2 class="text-center px-3">Showing Images For Breed {{dogName}}</h2>
    <n-spin v-if="showSpinner" />
    <div v-else class="row ">
      <div
        v-for="(url, index) in pageOfItems"
        :key="index"
        class="col-md-3 col-lg-3 col-sm-3 col-xl-3 py-4"
      >
        <img
          :src="url"
          :alt="dogName"
          width="200"
          height="200"
        />
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

export default {
  name: 'DogImagesList',

  props: {
    dogName: {
      type: String,
      required: true,
    },
  },

  async mounted() {
    await this.getDogImageList();
  },

  data() {
    return {
      imageUrls: [],
      showSpinner: false,
      isError: false,
      page: 1,
      totalItems: 0,
      pageOfItems: [],
    };
  },

  methods: {
    async getDogImageList() {
      try {
        this.showSpinner = true;
        const resp = await DogApi.getDogImageUrlList(this.dogName);
        this.imageUrls = resp.message;
        this.totalItems = this.imageUrls.length;
        this.onChangePage(1);
      } catch {
        this.isError = true;
      } finally {
        this.showSpinner = false;
      }
    },

    onChangePage(event) {
      const localDogArr = this.imageUrls;
      this.pageOfItems = localDogArr.slice(16 * (event - 1), (16 * (event - 1)) + 16);
    },
  },
};
</script>

<style></style>
