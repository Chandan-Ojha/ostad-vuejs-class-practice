<script setup>
import { ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";

//get product id from url
let parmas = new URLSearchParams(window.location.search);
let id = parmas.get("id");
if (id !== null) {
  getExistingProductData(id);
}

//get existing product data
async function getExistingProductData(id) {
  let url = "https://crud.teamrabbil.com/api/v1/ReadProductByID/" + id;
  let res = await axios.get(url);
  if (200 === res.status && "success" === res.data["status"]) {
    productData.value = res.data["data"][0];
  } else {
    useToast().error("Something went wrong");
  }
}

//product data
const productData = ref({
  Img: "",
  ProductCode: "",
  ProductName: "",
  Qty: "",
  TotalPrice: "",
  UnitPrice: "",
});

//create product
async function createProduct() {
  //validation
  if (0 === productData.value.Img.length) {
    useToast().error("Image is required");
  } else if (0 === productData.value.ProductCode.length) {
    useToast().error("Product Code is required");
  } else if (0 === productData.value.ProductName.length) {
    useToast().error("Product Name is required");
  } else if (0 === productData.value.Qty.length) {
    useToast().error("Quantity is required");
  } else if (0 === productData.value.TotalPrice.length) {
    useToast().error("Total Price is required");
  } else if (0 === productData.value.UnitPrice.length) {
    useToast().error("Unit Price is required");
  } else {
    //create product
    let url = "https://crud.teamrabbil.com/api/v1/CreateProduct";

    //update product
    if (id !== null) {
      url = "https://crud.teamrabbil.com/api/v1/UpdateProduct/" + id;
    }

    //send request
    let res = await axios.post(url, productData.value);
    if (200 === res.status && "success" === res.data["status"]) {
      useToast().success(res.data["status"]);
      productData.value = {
        Img: "",
        ProductCode: "",
        ProductName: "",
        Qty: "",
        TotalPrice: "",
        UnitPrice: "",
      };
    } else {
      useToast().error("Product Creation Failed");
    }
  }
}
</script>
<template>
  <div class="container container-sm mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-between mb-3">
          <h2>Create Product</h2>
          <router-link to="/" class="btn btn-primary btn-rounded"
            >Product List</router-link
          >
        </div>
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="createProduct()">
              <div class="form-group">
                <label for="image">Image</label>
                <input
                  v-model="productData.Img"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="productCode">Product Code</label>
                <input
                  v-model="productData.ProductCode"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="productName">Product Name</label>
                <input
                  v-model="productData.ProductName"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="qty">Quantity</label>
                <input
                  v-model="productData.Qty"
                  type="number"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="unitPrice">Total Price</label>
                <input
                  v-model="productData.TotalPrice"
                  type="number"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <label for="unitPrice">Unit Price</label>
                <input
                  v-model="productData.UnitPrice"
                  type="number"
                  class="form-control"
                />
              </div>

              <button type="submit" class="btn btn-primary mt-2">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
