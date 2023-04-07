<script setup>

defineProps(['modelValue'])
defineEmits(['update:modelValue', 'confirm'])

</script>

<template>
    <div>
        <v-dialog :model-value="modelValue" persistent width="auto" @update:modelValue="$emit('update:modelValue')">
            <v-card class="pa-6">
                <p class="dialog-message pb-4">متاسفانه خطایی رخ داده است.</p>
                <v-btn color="primary" @click="$emit('confirm')">
                    اجرای دوباره
                </v-btn>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped>
.dialog-message {
    color: red;
}
</style>