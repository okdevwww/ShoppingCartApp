"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DetailItemComponent = (function () {
    function DetailItemComponent() {
        this.color = '#575959';
    }
    return DetailItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DetailItemComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DetailItemComponent.prototype, "color", void 0);
DetailItemComponent = __decorate([
    core_1.Component({
        selector: "detail-item",
        moduleId: module.id,
        template: "\n        <FlexboxLayout>\n            <Label\n                flexGrow=\"1\"\n                [text]=\"label\"\n                [color]=\"color\"></Label>\n            <Image src=\"~/images/arrow_icon.png\"></Image>\n        </FlexboxLayout>\n    ",
        styles: ["\n        FlexboxLayout {\n            height: 50;\n            padding-left: 10;\n            background-color: #ffffff;\n            border-bottom-color: #d0d0d0;\n            border-bottom-width: 0.5;\n        }\n\n        Image {\n            width: 14;\n            margin-right: 8;\n        }\n    "],
    })
], DetailItemComponent);
exports.DetailItemComponent = DetailItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBNkJqRCxJQUFhLG1CQUFtQjtJQTNCaEM7UUE2QmEsVUFBSyxHQUFXLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUZZO0lBQVIsWUFBSyxFQUFFOztrREFBZTtBQUNkO0lBQVIsWUFBSyxFQUFFOztrREFBMkI7QUFGMUIsbUJBQW1CO0lBM0IvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSwwUEFRVDtRQUNELE1BQU0sRUFBRSxDQUFDLGtUQWFSLENBQUM7S0FDTCxDQUFDO0dBQ1csbUJBQW1CLENBRy9CO0FBSFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImRldGFpbC1pdGVtXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8RmxleGJveExheW91dD5cclxuICAgICAgICAgICAgPExhYmVsXHJcbiAgICAgICAgICAgICAgICBmbGV4R3Jvdz1cIjFcIlxyXG4gICAgICAgICAgICAgICAgW3RleHRdPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2Fycm93X2ljb24ucG5nXCI+PC9JbWFnZT5cclxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIEZsZXhib3hMYXlvdXQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZDBkMGQwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBJbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4O1xyXG4gICAgICAgIH1cclxuICAgIGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsSXRlbUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjNTc1OTU5JztcclxufVxyXG4iXX0=