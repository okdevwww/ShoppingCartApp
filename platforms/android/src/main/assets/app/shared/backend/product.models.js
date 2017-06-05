"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var condimentOperation;
(function (condimentOperation) {
    condimentOperation[condimentOperation["none"] = 0] = "none";
    condimentOperation[condimentOperation["optional"] = 1] = "optional";
    condimentOperation[condimentOperation["force"] = 2] = "force";
})(condimentOperation = exports.condimentOperation || (exports.condimentOperation = {}));
var product = (function () {
    function product() {
    }
    return product;
}());
exports.product = product;
var productGroup = (function () {
    function productGroup() {
    }
    return productGroup;
}());
exports.productGroup = productGroup;
var condiment = (function () {
    function condiment() {
    }
    return condiment;
}());
exports.condiment = condiment;
var condimentGroup = (function () {
    function condimentGroup() {
    }
    return condimentGroup;
}());
exports.condimentGroup = condimentGroup;
var specialGroupSelection = (function () {
    function specialGroupSelection() {
    }
    return specialGroupSelection;
}());
exports.specialGroupSelection = specialGroupSelection;
var specialProduct = (function () {
    function specialProduct() {
    }
    return specialProduct;
}());
exports.specialProduct = specialProduct;
var cartProductLine = (function () {
    function cartProductLine() {
    }
    return cartProductLine;
}());
exports.cartProductLine = cartProductLine;
var cartTransaction = (function () {
    function cartTransaction() {
    }
    return cartTransaction;
}());
exports.cartTransaction = cartTransaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2RlbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0Lm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQVksa0JBSVg7QUFKRCxXQUFZLGtCQUFrQjtJQUMxQiwyREFBSSxDQUFBO0lBQ0osbUVBQVEsQ0FBQTtJQUNSLDZEQUFLLENBQUE7QUFDVCxDQUFDLEVBSlcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFJN0I7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLDBCQUFPO0FBU3BCO0lBQUE7SUFLQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLG9DQUFZO0FBUXpCO0lBQUE7SUFLQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLDhCQUFTO0FBT3RCO0lBQUE7SUFJQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLHdDQUFjO0FBTTNCO0lBQUE7SUFHQSxDQUFDO0lBQUQsNEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLHNEQUFxQjtBQUtsQztJQUFBO0lBR0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSx3Q0FBYztBQU0zQjtJQUFBO0lBSUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSwwQ0FBZTtBQU01QjtJQUFBO0lBR0EsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZW51bSBjb25kaW1lbnRPcGVyYXRpb24ge1xyXG4gICAgbm9uZSxcclxuICAgIG9wdGlvbmFsLFxyXG4gICAgZm9yY2VcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHByb2R1Y3Qge1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgICBjb25kaW1lbnQ6IGNvbmRpbWVudE9wZXJhdGlvbjtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBkZXRhaWw6IHN0cmluZztcclxuICAgIHByaWNlOiBudW1iZXI7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgcHJvZHVjdEdyb3VwIHtcclxuICAgIHByb2R1Y3RHcm91cElkOiBzdHJpbmc7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcHJvZHVjdHM6IHByb2R1Y3RbXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBjb25kaW1lbnQge1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBjb25kaW1lbnRHcm91cCB7XHJcbiAgICBsYWJlbDogc3RyaW5nOyAvLyBlZyBSRU1PVkUsIEVYVFJBU1xyXG4gICAgY29uZGltZW50czogY29uZGltZW50W107XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3Mgc3BlY2lhbEdyb3VwU2VsZWN0aW9uIHtcclxuICAgIHByb2R1Y3RzOiBwcm9kdWN0W107XHJcbiAgICBzZWxlY3RlZDogcHJvZHVjdDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHNwZWNpYWxQcm9kdWN0IHtcclxuICAgIHByb2R1Y3RzOiBzcGVjaWFsR3JvdXBTZWxlY3Rpb25bXTtcclxuICAgIGNvbWVzV2l0aDogc3RyaW5nW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgY2FydFByb2R1Y3RMaW5lIHtcclxuICAgIHByb2R1Y3RJZDogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHByaWNlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBjYXJ0VHJhbnNhY3Rpb24ge1xyXG4gICAgcHJvZHVjdHM6IGNhcnRQcm9kdWN0TGluZVtdO1xyXG4gICAgdG90YWxQcmljZTogbnVtYmVyO1xyXG59XHJcbiJdfQ==