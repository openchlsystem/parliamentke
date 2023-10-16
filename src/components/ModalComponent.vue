<template>
    <div>
        <!-- Bind the class from the prop to the button element -->
        <!-- <button @click="openModal" :class="buttonClass">{{ buttonLabel }}</button> -->
        <button @click="openModal" :class="['btn', 'btn-primary', buttonClass]">
          <i :class="iconClass"></i> {{ buttonLabel }}
        </button>
        <transition name="modal-fade">
            <div v-if="isModalOpen" class="modal-container">
                <div class="modal-content">
                    <button @click="closeModal">Close</button>
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref, defineProps } from 'vue';

export default {
    props: {
        buttonLabel: String,
        buttonClass: String, // Define a prop to receive the class from the parent
        iconClass: String,
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
