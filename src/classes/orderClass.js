export class Order {
  constructor(orderId, name) {
    this.order_ID = orderId;
    this.name = name;
    this.line_items = [];
    this.total_discounts = 0;
    this.total_tax = 0;
    this.total_items = 0;
    this.created_at = Date.now();
    this.total_price = 0;
    this.fulfillment_status = "unfulfilled";
  }
}
