export default class Order {

    constructor(items, userId, dateOrder, totalAmount, paymentType, deliveryType, orderNumber, orderStatus, paymentId, orderTypeCode) {
        this.items = items
        this.userId = userId
        this.dateOrder = dateOrder
        this.totalAmount = totalAmount
        this.paymentType = paymentType
        this.deliveryType = deliveryType
        this.orderNumber = orderNumber
        this.orderStatus = orderStatus
        this.paymentId = paymentId
        this.orderTypeCode = orderTypeCode
    }
}