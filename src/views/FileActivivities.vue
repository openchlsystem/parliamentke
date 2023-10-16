<template>
    <div>
        <form @submit.prevent="submitBill">
           
            <div class="title">
                <h2>Update Document</h2>
            </div>

             <label for="bill_stage">Bill Stage:</label>
                <select name="bill_stage" id="" v-model="selectedStage">
                    <option v-for="stage in legislativeStages" :key="stage.id" :value="stage.stage">
                        {{ stage.stage }}
                    </option>
                </select>
                {{ selectedStage }}

            <!-- <label for="title">Bill Title:</label>
            <input type="text" id="title" v-model="newBill.title" required> -->

            <!-- <label for="description">Bill Description:</label>
            <textarea id="description" v-model="newBill.description" required></textarea> -->

            <label for="file">Upload Bill Document:</label>
            <select name="document_type" id="" v-model="selectedDocument">
                <option value="pdf">PDF</option>
                <option v-for="document in legislativeDocuments" :key="document.id" :value="document.document_name">
                    {{ document.document_name }}
                </option>
            </select>

            {{ selectedDocument }}
            <input type="file" name="file" id="file" ref="fileInput" @change="onChange"/>

            <p>size {{ newBill.size }}</p>



            <button type="submit">Submit {{ selectedDocument }}</button>
        </form>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { legislativeDocuments } from '@/utils/LegislativeDocuments.js'
import { legislativeStages } from '@/utils/LegislationStages.js'
import axios from '@/utils/axios.js'
export default {

    name: 'FileActivities',

    props: {
        fileid: {
            type: Number,
            required: true
        },

        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },

    setup(props) {


        const selectedStage = ref('');
        const selectedDocument = ref('');
        const selectedStatus = ref('');

        const newBill = ref({
            title: '',
            description: '',
            stage: selectedStage.value,
            type: selectedDocument.value,
            status: '',
            name: '',
            size: '',
            fibinary: '',
            


        });


        const fileInput = ref(null);
        const fileListing = ref([]);

        const onChange = async () => {
            const file = fileInput.value.files[0];

            console.log("hey man", file.name);
            console.log("size", file.size);
            console.log("type", file.type);
            console.log("all file", file);
            newBill.value.name = file.name;
            newBill.value.size = file.size;
            newBill.value.type = file.type;
            // newBill.value.date = file.name;
            

        }

        const submitBill = () => {
            const file = fileInput.value.files[0];
            const newBillData = {
                title: newBill.value.title,
                description: newBill.value.description,
                
            };

            // Append the file metadata to the newBillData object
            newBillData.name = file.name; // File name
            newBillData.size = file.size; // File size
            // newBillData.date = new Date().toISOString(); // Current date

            const formData = new FormData();
            formData.append('title', props.title); // Append the title
            formData.append('description',props.description); // Append the description
            formData.append('file', file); // Append the file
            formData.append('newBillData', JSON.stringify(newBillData)); // Append the bill data as JSON
            formData.append('name', file.name)
            formData.append('size', file.size)
            formData.append('type', file.type)
            formData.append('text', "text extract")
            formData.append('stage', selectedStage.value)
            formData.append('document', selectedDocument.value)
            formData.append('status', "draft")
            formData.append('filereference', props.fileid)

            console.log(formData)

            axios
                .post('/file-activities/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    console.log('Upload successful:', response.data);
                    // Reset the form or perform other actions after successful upload
                    newBill.value.title = '';
                    newBill.value.description = '';
                    fileInput.value = null; // Reset the file input
                })
                .catch((error) => {
                    console.error('Upload failed:', error);
                });
        };


        const getFile = async () => {
            const response = await axios.get(`/files/${props.fileid}`);
            fileListing.value = response.data
            console.log("documents", response)
        }


        onMounted(() => {
            getFile();
        });



        return {
            newBill,
            submitBill,
            fileInput,
            fileListing,
            legislativeDocuments,
            legislativeStages,
            selectedDocument,
            selectedStage,
            selectedStatus,
            onChange,

        };
    }
}
</script>


