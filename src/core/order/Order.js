export default class Order {

    constructor(orderId, orderNumber, orderTypeCode, userId, paymentId, orderStatus, orderDetailId, productId, productQuantity, dateOrder) {
        this.userId = userId
        this.paymentType = paymentType
        this.deliveryType = deliveryType
        this.orderNumber = orderNumber
        this.orderStatus = orderStatus
        this.paymentId = paymentId
        this.orderTypeCode = orderTypeCode
        this.orderDetailId = orderDetailId
        this.productId = productId
        this.productQuantity = productQuantity
        this.dateOrder = dateOrder
    }
}