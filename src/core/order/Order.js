export default class Order {

    constructor(items, userId, dateOrder, totalAmount, paymentType, deliveryType) {
        this.items = items
        this.userId = userId
        this.dateOrder = dateOrder
        this.totalAmount = totalAmount
        this.paymentType = paymentType
        this.deliveryType = deliveryType
    }
}