<template>
    <div>


        <vue-pdf-app style="height: 100vh;" :pdf="parliament"></vue-pdf-app>

    </div>
</template>

<script>
import { PDFDocument, rgb } from 'pdf-lib';
import VuePdfApp from "vue3-pdf-app";

import { ref } from 'vue';


export default {
    props:
    {
        pdfUrl: {
            type: String,
            required: true
        }
    },

    components: {
        VuePdfApp,

    },


    setup(props) {


        const fileListing = ref([]);



        const generatePDF = async () => {
            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage();
            const { width, height } = page.getSize();
            // const { width, height } = page.getSize();

            const content = fileListing.value.join('\n');

            page.drawText(content, {
                x: width - 80,
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
            generatePDF,
            parliament: props.pdfUrl,

        }
    }
}
</script>

<style lang="scss" scoped></style>