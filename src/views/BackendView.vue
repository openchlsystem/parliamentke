<template>
    <div class="activities">
        <div class="activities-sidepanel">
            <h3>side panel</h3>
            <a href="#" @click="showDiv = 'upload'">Upload Documents</a>
            <a href="#" @click="showDiv = 'standing'">Standing Orders</a>
            <a href="#" @click="showDiv = 'rulings'">Rulings</a>
            <a href="#" @click="showDiv = 'committees'">Committees</a>
        </div>
        <div class="activities-contentpanel">
            <div v-if="showDiv === 'upload'">   
                <ModalPopup  buttonLabel="Upload Document">
                    <h2>Upload Document</h2>
                    <p>This is the content of the modal.</p>
                    <div>
                        <form @submit.prevent="handleFileUpload">
                            <input type="file" name="file" id="file" ref="fileInput" />
                            <button type="submit">button{{ buttonLabel }}</button>
                        </form>
                    </div>
                </ModalPopup>
                <!-- {{ fileListing }} -->
                <ul>
                    <li v-for="file in fileListing" :key="file">
                        file {{ file.data }}
                    </li>
                </ul>
                <vue-pdf-app style="height: 100vh;" :pdf="parliament"></vue-pdf-app>
                <button @click="generatePDF">Generate PDF</button>
                <!-- Add any additional content for the 'Upload Documents' section -->
            </div>
            <div v-else-if="showDiv === 'standing'">
                <h3>Standing Orders</h3>
                <!-- Add any additional content for the 'Standing Orders' section -->
            </div>
            <div v-else-if="showDiv === 'rulings'">
                <h3>Rulings</h3>
                <!-- Add any additional content for the 'Rulings' section -->
            </div>
            <div v-else-if="showDiv === 'committees'">
                <h3>Committees</h3>
                <!-- Add any additional content for the 'Committees' section -->
            </div>
        </div>
    </div>
</template>

<script>
import { PDFDocument, rgb } from 'pdf-lib';
import ModalPopup from '../components/ModalComponent.vue';
import { ref } from 'vue';
import VuePdfApp from "vue3-pdf-app";

// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";

import parliament from "../assets/parliament.pdf";

export default {
    components: {
        ModalPopup,
        VuePdfApp,
    },
    setup() {
        const showDiv = ref('upload');
        const buttonLabel = ref('Upload Documents');
        const fileInput = ref(null);
        const fileListing = ref([]);


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

        return {
            showDiv,
            buttonLabel,
            handleFileUpload,
            fileInput,
            fileListing,
            generatePDF,
            parliament,
           
        };
    },
};
</script>