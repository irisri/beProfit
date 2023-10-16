<template>
  <b-table
    ref="table"
    :detailed="detailed"
    hoverable
    custom-detail-row
    paginated
    :data="tableData"
    default-sort-direction="asc"
    sort-icon="fa-arrow-up"
    sort-icon-size="is-small"
    default-sort="created_at"
    detail-key="order_ID"
    :per-page="perPage"
    show-detail-icon
  >
    <b-table-column
      field="order_ID"
      label="Id"
      width="40"
      searchable
      v-slot="props"
    >
      {{ props.row.order_ID }}
    </b-table-column>

    <b-table-column
      field="name"
      label="Name"
      width="40"
      centered
      searchable
      v-slot="props"
    >
      {{ props.row.name }}
    </b-table-column>

    <b-table-column
      field="created_at"
      label="Date"
      width="40"
      sortable
      v-slot="props"
    >
      {{
        props.row.created_at
          ? new Date(props.row.created_at).toLocaleDateString()
          : null
      }}
    </b-table-column>

    <b-table-column
      field="total_items"
      label="Number of items"
      width="40"
      centered
      numeric
      v-slot="props"
    >
      {{ props.row.total_items }}
    </b-table-column>

    <b-table-column
      sortable
      field="fulfillment_status"
      label="Order status"
      width="40"
      centered
      v-slot="props"
    >
      {{ props.row.fulfillment_status }}
    </b-table-column>

    <b-table-column
      sortable
      field="total_price"
      label="Total price"
      width="40"
      centered
      numeric
      v-slot="props"
    >
      {{ props.row.total_price }}
    </b-table-column>

    <b-table-column
      searchable
      field="currency"
      label="Currency"
      width="40"
      centered
      v-slot="props"
    >
      {{ props.row.currency }}
    </b-table-column>

    <b-table-column
      field="total_tax"
      label="Tax"
      width="40"
      centered
      numeric
      sortable
      v-slot="props"
    >
      {{ props.row.total_tax }}
    </b-table-column>

    <b-table-column
      sortable
      field="total_discounts"
      label="Discounts"
      width="40"
      centered
      numeric
      v-slot="props"
    >
      {{ props.row.total_discounts }}
    </b-table-column>

    <b-table-column label="Actions" width="40" v-slot="props">
      <button
        class="button is-small is-light"
        @click.prevent="$emit('editRow', props.row)"
      >
        <b-icon icon="pen-to-square" size="is-small"></b-icon>
      </button>
      <button
        class="button is-small is-light"
        @click.prevent="$emit('deleteRow', props.row)"
      >
        <b-icon icon="trash" size="is-small"></b-icon>
      </button>
    </b-table-column>

    <template slot="detail" slot-scope="props">
      <tr
        v-for="(item, index) in props.row.line_items"
        :key="item.name + '-' + index"
      >
        <td></td>
        <td>{{ item.line_item_ID }}</td>
        <td>
          {{ item.name }}
        </td>
        <td></td>
        <td></td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.fulfillment_status }}</td>
        <td>
          {{ item.price }}
        </td>
      </tr>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "OrderTable",
  props: ["tableData"],
  data() {
    return {
      detailed: true,
      defaultSortDirection: "asc",
      perPage: "10",
      checkedRows: [],
      editRowInfo: null
    };
  }
};
</script>
