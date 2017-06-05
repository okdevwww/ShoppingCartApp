"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var ProductItemComponent = (function () {
    function ProductItemComponent() {
        this.onAdd = new core_1.EventEmitter();
    }
    ProductItemComponent.prototype.ngOnInit = function () {
        this.price = '$' + this.model.price.toFixed(2);
    };
    ProductItemComponent.prototype.add = function () {
        this.onAdd.emit(this.model.productId);
    };
    ProductItemComponent.prototype.customize = function () {
    };
    return ProductItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", shared_1.product)
], ProductItemComponent.prototype, "model", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductItemComponent.prototype, "onAdd", void 0);
ProductItemComponent = __decorate([
    core_1.Component({
        selector: "product-item",
        moduleId: module.id,
        templateUrl: "./product-item.component.html",
        styleUrls: ["./product-item.component.css"],
    })
], ProductItemComponent);
exports.ProductItemComponent = ProductItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsdUNBQXVDO0FBUXZDLElBQWEsb0JBQW9CO0lBTmpDO1FBUWMsVUFBSyxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQWEvRCxDQUFDO0lBVkcsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsa0NBQUcsR0FBSDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHdDQUFTLEdBQVQ7SUFDQSxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWRZO0lBQVIsWUFBSyxFQUFFOzhCQUFRLGdCQUFPO21EQUFDO0FBQ2Q7SUFBVCxhQUFNLEVBQUU7OEJBQVEsbUJBQVk7bURBQThCO0FBRmxELG9CQUFvQjtJQU5oQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7S0FDOUMsQ0FBQztHQUNXLG9CQUFvQixDQWVoQztBQWZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0IH0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJwcm9kdWN0LWl0ZW1cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgbW9kZWw6IHByb2R1Y3Q7XHJcbiAgICBAT3V0cHV0KCkgb25BZGQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgcHJpY2U6IFN0cmluZztcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnByaWNlID0gJyQnICsgdGhpcy5tb2RlbC5wcmljZS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCgpIHtcclxuICAgICAgICB0aGlzLm9uQWRkLmVtaXQodGhpcy5tb2RlbC5wcm9kdWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGN1c3RvbWl6ZSgpIHtcclxuICAgIH1cclxufVxyXG4iXX0=