"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var order_dialog_component_1 = require("./order-dialog.component");
var components_1 = require("../../components");
var OrderDialogModule = (function () {
    function OrderDialogModule() {
    }
    return OrderDialogModule;
}());
OrderDialogModule = __decorate([
    core_1.NgModule({
        declarations: [
            order_dialog_component_1.OrderDialogComponent,
        ],
        imports: [
            common_1.CommonModule,
            components_1.DetailItemModule,
            components_1.SectionModule,
            components_1.RadioGroupModule,
        ],
        exports: [
            order_dialog_component_1.OrderDialogComponent
        ],
        providers: [],
    })
], OrderDialogModule);
exports.OrderDialogModule = OrderDialogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLWRpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBRS9DLG1FQUFnRTtBQUNoRSwrQ0FBcUY7QUFtQnJGLElBQWEsaUJBQWlCO0lBQTlCO0lBQWdDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsaUJBQWlCO0lBakI3QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDWiw2Q0FBb0I7U0FDckI7UUFDRCxPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLDZCQUFnQjtZQUNoQiwwQkFBYTtZQUNiLDZCQUFnQjtTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNQLDZDQUFvQjtTQUNyQjtRQUNELFNBQVMsRUFBRSxFQUNWO0tBQ0osQ0FBQztHQUVXLGlCQUFpQixDQUFHO0FBQXBCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgT3JkZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZXRhaWxJdGVtTW9kdWxlLCBTZWN0aW9uTW9kdWxlLCBSYWRpb0dyb3VwTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgIE9yZGVyRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICBEZXRhaWxJdGVtTW9kdWxlLFxyXG4gICAgICBTZWN0aW9uTW9kdWxlLFxyXG4gICAgICBSYWRpb0dyb3VwTW9kdWxlLFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgT3JkZXJEaWFsb2dDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgIF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJEaWFsb2dNb2R1bGUge31cclxuIl19