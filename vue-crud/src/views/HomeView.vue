<script setup>
import { ref } from "vue";
import axios from "axios";

const productList = ref([]);

//get product list
async function getProductList() {
  let url = "https://crud.teamrabbil.com/api/v1/ReadProduct";
  let res = await axios.get(url);
  productList.value = res.data["data"];
}

getProductList();
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-between mb-3">
          <h2>Product List</h2>
          <button class="btn btn-primary btn-rounded">Add Product</button>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Total Price</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in productList" :key="product.id">
                <td>{{ product.ProductName }}</td>
                <td>{{ product.ProductName }}</td>
                <td>{{ product.ProductName }}</td>
                <td>{{ product.ProductName }}</td>
                <td>
                  <button class="btn btn-primary btn-sm btn-space">Edit</button>
                  <button class="btn btn-danger btn-sm btn-space">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-space {
  margin-right: 5px;
}
</style>
