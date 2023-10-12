<template>
    <div>
        <button @click="openModal">Open Modal</button>
        <transition name="modal-fade">
            <div v-if="isModalOpen" class="modal-container">
                <div class="modal-content">
                    <slot></slot>
                    <button @click="closeModal">Close</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const isModalOpen = ref(false);

        const openModal = () => {
            isModalOpen.value = true;
        };

        const closeModal = () => {
            isModalOpen.value = false;
        };

        return {
            isModalOpen,
            openModal,
            closeModal,
        };
    },
};
</script>

<style>
</style>