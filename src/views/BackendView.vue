<template>
    <div class="activities">
        <div class="activities-sidepanel">



            <ul>

                <li v-for="parliamentfunction in kenyanParliamentFunctions" :key="parliamentfunction.id"
                    @click="showDiv = parliamentfunction.function">
                    {{ parliamentfunction.function }}
                </li>
            </ul>


        </div>
        
        <DocumentList :showDiv="showDiv"/>
       
    </div>
</template>

<script>
import { PDFDocument, rgb } from 'pdf-lib';
// import ModalPopup from '../components/ModalComponent.vue';
import { ref, onMounted } from 'vue';
// import VuePdfApp from "vue3-pdf-app";
import { kenyanParliamentFunctions } from '../utils/ParliamentFunctions.js';
import axios from '@/utils/axios';
// import BillsForm from './BillsForm.vue';
// import FileActivities from './FileActivivities.vue';
// import PDFviewer from '../components/PDFviewer.vue';
import DocumentList from '../views/DocumentList.vue';


// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";

import parliament from "../assets/parliament.pdf";

export default {
    components: {
        // ModalPopup,
        // VuePdfApp,
        // BillsForm,
        // FileActivities,
        // PDFviewer,
        DocumentList,
    },
    data() {
        return {
            customButtonClass: 'your-custom-button-class',
            customIconClass: 'bi bi-pencil', // Define the icon class dynamically
        };
    },
    setup() {
        const showDiv = ref('Legislation');
        const buttonLabel = ref('Upload Documents');
        const fileInput = ref(null);
        const fileListing = ref([]);
        const documents = ref([])


        // const path = require('../assets/');
        // const parliament = path.resolve(__dirname, '../','../assets/','parliament.pdf');

        const handleFileUpload = () => {
            const file = fileInput.value.files[0];
            console.log('Uploaded file:', file);

            const reader = new FileReader();
            reader.onload = (event) => {
                const fileContent = event.target.result;
                console.log('File content:', fileContent);
                fileListing.value.push(fileContent);
            };

            reader.readAsText(file);
        };

        const generatePDF = async () => {
            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage();
            const { width, height } = page.getSize();
            // const { width, height } = page.getSize();

            const content = fileListing.value.join('\n');

            page.drawText(content, {
                x: width - 50,
                y: height - 50,
                size: 12,
                color: rgb(0, 0, 0),
            });



            const pdfBytes = await pdfDoc.save();

            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);

            // Do something with the PDF URL, such as opening it in a new tab or downloading it
            window.open(url);
        };

        const getDocuments = async () => {
            const response = await axios.get('/files/');
            documents.value = response.data
            console.log("documents", response)
        }

        onMounted(() => {
            getDocuments();
        })

        return {
            showDiv,
            buttonLabel,
            handleFileUpload,
            fileInput,
            fileListing,
            generatePDF,
            parliament,
            kenyanParliamentFunctions,
            documents,
            getDocuments,


        };
    },
};
</script>