<template>
    <div>
         <button @click="openModal">{{ buttonLabel }}</button>
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
import { ref, defineProps } from 'vue';

export default {

    props: {
        buttonLabel: {
            type: String,
            default: 'Open Modal',
        },
    },
    setup(props) {
        const isModalOpen = ref(false);

        const openModal = () => {
            isModalOpen.value = true;
        };

        const closeModal = () => {
            isModalOpen.value = false;
        };

        return {
            ...defineProps(props),
            isModalOpen,
            openModal,
            closeModal,
        };
    },
};
</script>

<style>
</style>