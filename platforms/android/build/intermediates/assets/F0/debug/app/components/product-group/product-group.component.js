"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var ProductGroupComponent = (function () {
    function ProductGroupComponent() {
        this.onOpened = new core_1.EventEmitter();
    }
    ProductGroupComponent.prototype.onTabHeader = function () {
        this.opened = !this.opened;
        this.onOpened.emit(this.opened ? this.model.productGroupId : '');
    };
    return ProductGroupComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", shared_1.productGroup)
], ProductGroupComponent.prototype, "model", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProductGroupComponent.prototype, "opened", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductGroupComponent.prototype, "onOpened", void 0);
ProductGroupComponent = __decorate([
    core_1.Component({
        selector: "product-group",
        moduleId: module.id,
        templateUrl: "./product-group.component.html",
        styleUrls: ["./product-group.component.css"],
    })
], ProductGroupComponent);
exports.ProductGroupComponent = ProductGroupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUN2RSx1Q0FBNEM7QUFRNUMsSUFBYSxxQkFBcUI7SUFObEM7UUFTYyxhQUFRLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBTWxFLENBQUM7SUFKRywyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVJZO0lBQVIsWUFBSyxFQUFFOzhCQUFRLHFCQUFZO29EQUFDO0FBQ3BCO0lBQVIsWUFBSyxFQUFFOztxREFBaUI7QUFDZjtJQUFULGFBQU0sRUFBRTs4QkFBVyxtQkFBWTt1REFBOEI7QUFIckQscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUMvQyxDQUFDO0dBQ1cscUJBQXFCLENBU2pDO0FBVFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0R3JvdXAgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJwcm9kdWN0LWdyb3VwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9kdWN0LWdyb3VwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcHJvZHVjdC1ncm91cC5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdEdyb3VwQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG1vZGVsOiBwcm9kdWN0R3JvdXA7XHJcbiAgICBASW5wdXQoKSBvcGVuZWQ6IGJvb2xlYW47XHJcbiAgICBAT3V0cHV0KCkgb25PcGVuZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIG9uVGFiSGVhZGVyKCkge1xyXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICAgICAgdGhpcy5vbk9wZW5lZC5lbWl0KHRoaXMub3BlbmVkID8gdGhpcy5tb2RlbC5wcm9kdWN0R3JvdXBJZCA6ICcnKTtcclxuICAgIH1cclxufVxyXG4iXX0=