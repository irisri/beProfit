<template>
  <section>
    <div>
      <b-field label="Name:">
        <b-input v-model="name"></b-input>
      </b-field>

      <b-field label="Order status">
        <b-select placeholder="Select a status" v-model="fulfillment_status">
          <option value="fulfilled">
            fulfilled
          </option>
          <option value="unfulfilled">
            unfulfilled
          </option>
        </b-select>
      </b-field>
    </div>
    <div class="main-container">
      <button
        class="button is-light margin-top-20"
        @click.prevent="$emit('clearEdit')"
      >
        Clear
      </button>
      <button
        class="button is-light margin-top-20"
        @click.prevent="$emit('updateRow', { ...row, name })"
      >
        Save
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "EditOrder",
  props: ["row"],
  data() {
    return {
      name: this.row.name,
      fulfillment_status: this.row.fulfillment_status
    };
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  gap: 20px;
}
.margin-top-20 {
  margin-top: 20px;
  font-weight: bold;
}
</style>
