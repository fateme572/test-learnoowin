<script setup>
import { ref } from "vue"

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    url: {
        type: String,
        default: "",
    }
})

// States
const src = ref(props.url)

// Methods
function setDefaultImage() {
    src.value = "/default.jpg"
}
</script>

<template>
    <v-card class="base-card" height="100%">
        <p class="base-card__title py-5 px-3">{{ props.title }}</p>
        <v-img :src="src" :alt="props.title" @error.once="setDefaultImage">
            <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="amber" indeterminate size="30" width="4"></v-progress-circular>
                </div>
            </template>
        </v-img>
    </v-card>
</template>

<style scoped>
.base-card__title {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}
</style>