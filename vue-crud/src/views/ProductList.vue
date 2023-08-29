<script setup>
import { ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";

const toast = useToast();

const productList = ref([]);

//get product list
async function getProductList() {
  let url = "https://crud.teamrabbil.com/api/v1/ReadProduct";
  let res = await axios.get(url);
  productList.value = res.data["data"];
}
getProductList();

//delete product
async function deleteProduct(id) {
  let url = "https://crud.teamrabbil.com/api/v1/DeleteProduct/" + id;
  let res = await axios.get(url);
  if (200 === res.status && "success" === res.data["status"]) {
    toast.info("Product deleted successfully");
    getProductList();
  } else {
    toast.error("Something went wrong");
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-between mb-3">
          <h2>Product List</h2>
          <router-link to="/create-product" class="btn btn-primary btn-rounded">
            Create Product
          </router-link>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Code</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, _id) in productList" :key="product._id">
                <td>{{ product["ProductName"] }}</td>
                <td>{{ product["ProductCode"] }}</td>
                <td>{{ product["UnitPrice"] }}</td>
                <td>{{ product["Qty"] }}</td>
                <td>{{ product["TotalPrice"] }}</td>
                <td>
                  <router-link
                    :to="'/create-product?id=' + product['_id']"
                    class="btn btn-primary btn-sm btn-space"
                  >
                    Edit
                  </router-link>
                  <button class="btn btn-primary btn-sm btn-space">View</button>
                  <button
                    class="btn btn-danger btn-sm btn-space"
                    @click="deleteProduct(product['_id'])"
                  >
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
