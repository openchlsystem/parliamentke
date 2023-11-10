<template>
    <div class="header-buttons">
        <button @click="$router.go(-1)"><i class="bi bi-arrow-left"></i>Back</button>
    </div>
    <div style="height: 200vh; width: 100%; ">

        <a>Document Details {{ pdfUrl }}</a>
        <div class="document-details">
            <div class="document" v-if="pdfUrl">
                <PDFviewer :pdfUrl="fileListing.file" />
            </div>
            <div class="trail" v-if="fileActivities">
                <h2>{{ fileListing.name }}</h2>
                <div class="file-activities timeline">
                    <ul>
                        <li v-for="activity in fileActivities" :key="activity.id">
                            <div class="timeline-item">
                                <div class="timeline-item-header">{{ activity.stage }}</div>
                                <div class="timeline-item-content">
                                    <div class="timeline-item-title">{{ activity.title }}</div>
                                    <div class="timeline-item-description">{{ activity.description }}</div>
                                    <div class="timeline-item-date">{{ activity.created_at }}</div>
                                    <!-- document link  -->
                                    <a :href="activity.file" target="_blank" class="document-link"><i class="bi bi-file-pdf"></i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Use v-for to iterate through fileListing and display its contents -->
        

        <!-- Display the "id" prop -->
        {{ id }}
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'; // Import onMounted to trigger getDocument
import PDFviewer from '@/components/PDFviewer.vue';

import axios from '@/utils/axios';

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },

    components: {
        PDFviewer
    },
    setup(props) {
        const fileListing = ref([]);
        
        const pdfUrl = ref('');
        const fileActivities = ref([]);


        const getDocument = async () => {
            try {
                const response = await axios.get(`/files/${props.id}`);
                fileListing.value = response.data;
                pdfUrl.value = response.data.file;
                console.log("documents", fileListing.value, props.id);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        const getActivities = async () => {
            try {
                const response = await axios.get(`/file-activities/`, {
                    params: {
                        filereference: props.id
                    }
                });
                fileActivities.value = response.data;
                console.log("activities", fileActivities.value);

            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        // Use onMounted to trigger getDocument when the component is mounted
        onMounted(()=> {
            getDocument();
            getActivities();
        });

        return {
            fileListing,
            getDocument,
            pdfUrl,
            fileActivities,
            getActivities,

        };
    }
};
</script>

<style  scoped>
/* Add your component-specific styles here */
</style>
