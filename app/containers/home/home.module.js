"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_component_1 = require("./home.component");
var order_dialog_1 = require("../order-dialog");
var components_1 = require("../../components");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        declarations: [
            home_component_1.HomeComponent,
            components_1.ProductGroupComponent,
            components_1.ProductItemComponent,
        ],
        imports: [
            common_1.CommonModule,
            components_1.DetailItemModule,
            order_dialog_1.OrderDialogModule,
        ],
        providers: []
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFFL0MsbURBQWlEO0FBQ2pELGdEQUFvRDtBQUVwRCwrQ0FJMkI7QUFrQjNCLElBQWEsVUFBVTtJQUF2QjtJQUF5QixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsVUFBVTtJQWhCdEIsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1osOEJBQWE7WUFDYixrQ0FBcUI7WUFDckIsaUNBQW9CO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWiw2QkFBZ0I7WUFDaEIsZ0NBQWlCO1NBQ2xCO1FBRUQsU0FBUyxFQUFFLEVBQ1Y7S0FDSixDQUFDO0dBRVcsVUFBVSxDQUFHO0FBQWIsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPcmRlckRpYWxvZ01vZHVsZSB9IGZyb20gJy4uL29yZGVyLWRpYWxvZyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFByb2R1Y3RHcm91cENvbXBvbmVudCxcclxuICBQcm9kdWN0SXRlbUNvbXBvbmVudCxcclxuICBEZXRhaWxJdGVtTW9kdWxlLFxyXG4gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgUHJvZHVjdEdyb3VwQ29tcG9uZW50LFxyXG4gICAgICBQcm9kdWN0SXRlbUNvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgRGV0YWlsSXRlbU1vZHVsZSxcclxuICAgICAgT3JkZXJEaWFsb2dNb2R1bGUsICAgICAgXHJcbiAgICBdLFxyXG5cclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUge31cclxuIl19