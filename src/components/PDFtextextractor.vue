<template>
    <div>
        <input type="file" @change="handleFileChange" />
        <button @click="extractText">Extract Text</button>
        <div>
            <pre>{{ pdfText }}</pre>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import pdfjs from "pdfjs-dist/build/pdf";

export default {
    setup() {
        const pdfFile = ref(null);
        const pdfText = ref("");

        const handleFileChange = (event) => {
            pdfFile.value = event.target.files[0];
        };

        const extractText = async () => {
            if (!pdfFile.value) {
                alert("Please select a PDF file first.");
                return;
            }
            try {
                const pdfData = await pdfjs.getDocument(pdfFile.value).promise;
                const numPages = pdfData.numPages;
                const page = await pdfData.getPage(1); // Access the first page (page number starts from 1).
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map((item) => item.str).join(" ");
                pdfText.value = pageText;
                console.log(numPages)
            } catch (error) {
                console.error(error);
                alert("An error occurred while extracting text from the PDF.");
            }
        };

        return {
            pdfFile,
            pdfText,
            handleFileChange,
            extractText,

        };
    },
};
</script>
