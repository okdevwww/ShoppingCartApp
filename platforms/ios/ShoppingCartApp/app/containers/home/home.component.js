"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var HomeComponent = (function () {
    function HomeComponent(productService) {
        this.productService = productService;
        this.loading = false;
        this.minOrder = "Min order $25";
        this.totalPrice = "$0.00";
        this.cartCount = 0;
        this.openedId = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.productService.getProductGroups()
            .subscribe(function (data) {
            _this.loading = false;
            _this.productGroup = data;
        }, function (error) {
        });
    };
    HomeComponent.prototype.openedGroup = function (id) {
        this.openedId = id;
    };
    HomeComponent.prototype.onAdd = function (productId) {
        var orderDialog = this.orderDialog.nativeElement;
        console.log(orderDialog);
        orderDialog.style.visibility = "visible";
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild("orderDialog"),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "orderDialog", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        moduleId: module.id,
        templateUrl: "./home.component.html",
        styleUrls: ["./home.component.css"],
    }),
    __metadata("design:paramtypes", [shared_1.ProductService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSx1Q0FHc0I7QUFRdEIsSUFBYSxhQUFhO0lBYXhCLHVCQUNVLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVp4QyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLGFBQVEsR0FBVyxlQUFlLENBQUM7UUFDbkMsZUFBVSxHQUFXLE9BQU8sQ0FBQztRQUM3QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFNbEIsQ0FBQztJQUVMLGdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7YUFDbkMsU0FBUyxDQUFFLFVBQUEsSUFBSTtZQUNkLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsRUFBRSxVQUFBLEtBQUs7UUFFUixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLFNBQWlCO1FBQ3JCLElBQUksV0FBVyxHQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUExQjJCO0lBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDOzhCQUFjLGlCQUFVO2tEQUFDO0FBWHZDLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3BDLENBQUM7cUNBZTBCLHVCQUFjO0dBZDdCLGFBQWEsQ0FxQ3pCO0FBckNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIFByb2R1Y3RTZXJ2aWNlLFxyXG4gIHByb2R1Y3RHcm91cCxcclxufSBmcm9tICcuLi8uLi9zaGFyZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiaG9tZVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByb2R1Y3RHcm91cDogcHJvZHVjdEdyb3VwW107XHJcbiAgbWluT3JkZXI6IHN0cmluZyA9IFwiTWluIG9yZGVyICQyNVwiO1xyXG4gIHRvdGFsUHJpY2U6IHN0cmluZyA9IFwiJDAuMDBcIjtcclxuICBjYXJ0Q291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIG9wZW5lZElkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQFZpZXdDaGlsZChcIm9yZGVyRGlhbG9nXCIpIG9yZGVyRGlhbG9nOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0R3JvdXBzKClcclxuICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0R3JvdXAgPSBkYXRhO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbmVkR3JvdXAoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5vcGVuZWRJZCA9IGlkOyAgICAgIFxyXG4gIH1cclxuXHJcbiAgb25BZGQocHJvZHVjdElkOiBzdHJpbmcpIHtcclxuICAgIGxldCBvcmRlckRpYWxvZyA9IDxWaWV3PnRoaXMub3JkZXJEaWFsb2cubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnNvbGUubG9nKG9yZGVyRGlhbG9nKTtcclxuICAgIG9yZGVyRGlhbG9nLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICB9IFxyXG59XHJcbiJdfQ==