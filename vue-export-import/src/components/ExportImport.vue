<script setup>
import { ref } from "vue";
import { csv } from "csvtojson";
import * as XLSX from "xlsx";

const contentFromFile = ref([]);

//csv file upload
const handleCSVFileUpload = (event) => {
  const uploadedFile = event.target.files[0];
  const reader = new FileReader();
  reader.onload = async () => {
    const content = reader.result;
    const jsonArray = await csv().fromString(content);
    // console.log(jsonArray);
    contentFromFile.value = jsonArray;
  };
  reader.readAsText(uploadedFile);
};

//excel file upload
const handleExcelFileUpload = (event) => {
  let uploadedFile = event.target.files ? event.target.files[0] : null;
  if (uploadedFile) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const workSheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(workSheet, { header: 0 });
      const parsedData = JSON.stringify(jsonData, null, 2);
      // console.log(parsedData);
      contentFromFile.value = jsonData;
    };
    reader.readAsBinaryString(uploadedFile);
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <div class="row">
            <div class="col">
              <label for="file1">Choose CSV File </label>
              <input
                type="file"
                class="form-control"
                id="file1"
                @change="handleCSVFileUpload($event)"
                accept=".csv"
              />
            </div>
            <div class="col">
              <label for="file2">Choose Excel File </label>
              <input
                type="file"
                class="form-control"
                id="file2"
                @change="handleExcelFileUpload($event)"
                accept=".xlsx,.xls"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(content, index) in contentFromFile" :key="index">
            <td>{{ content.name }}</td>
            <td>{{ content.description }}</td>
            <td>{{ content.price }} Taka</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
