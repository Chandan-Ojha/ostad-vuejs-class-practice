<script setup>
import { ref } from "vue";
import { itemData } from "../../data/tableData";

const searchField = ["player", "team", "country", "lastAttended"];
const searchValue = ref();
const Item = ref(itemData);

const Header = [
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team" },
  { text: "POSITION", value: "position" },
  { text: "HEIGHT", value: "indicator.height" },
  { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true },
  { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
  { text: "COUNTRY", value: "country" },
  { text: "NUMBER", value: "number" },
];

const itemClick = (number, player) => {
  alert(`Number is=${number} & Player Name is=${player}`);
};
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div>
              <input
                placeholder="Search..."
                class="form-control mb-2 w-auto form-control-sm"
                type="text"
                v-model="searchValue"
              />
              <EasyDataTable
                buttons-pagination
                alternating
                :headers="Header"
                :items="Item"
                :rows-per-page="10"
                :search-field="searchField"
                :search-value="searchValue"
              >
                <template #item-number="{ number, player }">
                  <button
                    class="btn btn-success btn-sm"
                    @click="itemClick(number, player)"
                  >
                    Delete
                  </button>
                </template>
              </EasyDataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
