<template>
  <div class="container">
    <b-tabs v-model="activeTab">
      <b-tab-item label="Table">
        <div class="left">
          <button class="button is-light bold" @click.prevent="createNewRow()">
            Add order
          </button>
        </div>

        <OrderTable
          v-if="tableData.length > 0"
          :tableData="tableData"
          @editRow="editRow"
          @deleteRow="deleteRow"
        />
        <p v-else>Sorry something went wrong</p>
      </b-tab-item>

      <b-tab-item label="Selected" class="selected-items">
        <EditOrder
          v-if="editRowInfo"
          :row="editRowInfo"
          @clearEdit="clearEdit"
          @updateRow="updateRow"
        />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import jsonData from "../../data.json";
import OrderTable from "./OrderTable.vue";
import EditOrder from "./EditOrder.vue";

import { Order } from "../classes/orderClass";

export default {
  name: "MainData",
  components: { OrderTable, EditOrder },
  data() {
    return {
      tableData: [],
      detailed: true,
      defaultSortDirection: "asc",
      perPage: "10",
      editRowInfo: null,
      activeTab: 0
    };
  },
  async created() {
    const res = await axios.get("https://www.become.co/api/rest/test.php");
    const data = res.data;
    if (data && data.success) {
      await Promise.resolve(jsonData).then(value => {
        this.tableData = value;
      });
    }
  },
  methods: {
    editRow(row) {
      if (this.activeTab !== 1) this.activeTab = 1;
      this.editRowInfo = row;
    },
    clearEdit() {
      this.editRowInfo = null;
      if (this.activeTab === 1) this.activeTab = 0;
    },
    deleteRow(row) {
      this.tableData.splice(this.tableData.indexOf(row), 1);
    },
    updateRow(updatedRow) {
      this.tableData.splice(this.tableData.indexOf(updatedRow), 1, updatedRow);
      if (this.activeTab === 1) this.activeTab = 0;
    },
    createNewRow() {
      const row = new Order(uuidv4(), "#" + uuidv4());

      this.tableData.push(row);
      this.editRowInfo = row;
      if (this.activeTab !== 1) this.activeTab = 1;
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.selected-items {
  text-align: left;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}

.bold {
  font-weight: bold;
}

.left {
  text-align: left;
  margin-bottom: 20px;
}
</style>
