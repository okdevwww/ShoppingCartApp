"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RadioGroupComponent = (function () {
    function RadioGroupComponent() {
        this.selectedIndex = 0;
    }
    RadioGroupComponent.prototype.onSelect = function (index) {
        this.selectedIndex = index;
    };
    return RadioGroupComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RadioGroupComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RadioGroupComponent.prototype, "selectedIndex", void 0);
RadioGroupComponent = __decorate([
    core_1.Component({
        selector: "radio-group",
        moduleId: module.id,
        templateUrl: "./radio-group.component.html",
        styleUrls: ["./radio-group.component.css"],
    })
], RadioGroupComponent);
exports.RadioGroupComponent = RadioGroupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBUWpELElBQWEsbUJBQW1CO0lBTmhDO1FBUVcsa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFLckMsQ0FBQztJQUhDLHNDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFOVTtJQUFSLFlBQUssRUFBRTs7aURBQWdCO0FBQ2Y7SUFBUixZQUFLLEVBQUU7OzBEQUEyQjtBQUZ4QixtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzdDLENBQUM7R0FDVyxtQkFBbUIsQ0FPL0I7QUFQWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicmFkaW8tZ3JvdXBcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcmFkaW8tZ3JvdXAuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlvR3JvdXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gIG9uU2VsZWN0KGluZGV4KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICB9XHJcbn1cclxuIl19