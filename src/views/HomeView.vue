<script setup>
import axios from "axios";
import { onMounted, ref, computed } from 'vue'
import BaseCard from "@/components/BaseCard.vue";
import BaseError from "@/components/BaseError.vue";

// States
const data = ref([]);
const page = ref(1);
const showError = ref(false)
const fetchCounter = ref(0);
const loader = ref(false);
const apiIsLoaded = ref(false)
const pageLimit = 20

// Computeds
const getStartItemIndexInPage = computed(() => {
  return page.value * pageLimit - pageLimit;
})

// Methods
onMounted(() => {
  fetch();
})

async function fetch() {
  loader.value = true;
  try {
    const response = await axios.get('https://jsonplaceholder.ir/photos', {
      params: {
        _limit: pageLimit,
        _start: getStartItemIndexInPage.value
      }
    })

    data.value = response.data;
    apiIsLoaded.value = true;
  } catch (error) {
    if (fetchCounter.value < 2) {
      fetchCounter.value++;
      await fetch();
    } else {
      fetchCounter.value = 0;
      showError.value = true;
    }
  }
  finally {
    loader.value = false;
  }
}

async function navigatePage(currentPage) {
  page.value = currentPage
  await fetch();
}
</script>

<template>
  <div>
    <v-row v-if="data && Array.isArray(data) && data.length > 0">
      <v-col v-for="({ url, title }, index) in data" :key="index" cols="12" sm="6" md="4" lg="3">
        <BaseCard :url="url" :title="title" />
      </v-col>
      <v-col cols="12">
        <v-pagination :model-value="page" :length="5" :total-visible="3" rounded="circle" prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right" @update:modelValue="navigatePage"></v-pagination>
      </v-col>
    </v-row>
    <v-row v-if="apiIsLoaded && !data.length">
      <v-col cols="12">
        <p>در حال حاضر داده ای وجود ندارد.</p>
      </v-col>
    </v-row>
    <v-overlay v-model="loader" persistent class="d-flex align-center justify-center">
      <v-progress-circular indeterminate color="amber" :size="55" :width="5"></v-progress-circular>
    </v-overlay>
    <BaseError v-model="showError" @confirm="fetch" />
  </div>
</template>

<style scoped>
.v-overlay {
  padding: 0;
}
</style>