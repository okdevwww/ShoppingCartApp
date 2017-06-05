"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SectionComponent = (function () {
    function SectionComponent() {
    }
    return SectionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SectionComponent.prototype, "label", void 0);
SectionComponent = __decorate([
    core_1.Component({
        selector: "section",
        moduleId: module.id,
        template: "\n      <StackLayout orientation=\"vertical\">\n        <Label [text]=\"label\"></Label>\n        <ng-content></ng-content>\n      </StackLayout>\n    ",
        styles: ["\n      Label {\n        height: 50;\n        padding-left: 10;\n        background-color: #efefef;\n        border-bottom-color: #d8d8d8;\n        border-bottom-width: 0.5;\n        color: #686868;\n        font-size: 14;\n        font-weight: bold;        \n      }\n    "],
    })
], SectionComponent);
exports.SectionComponent = SectionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFpRDtBQXdCakQsSUFBYSxnQkFBZ0I7SUFBN0I7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQURZO0lBQVIsWUFBSyxFQUFFOzsrQ0FBZTtBQURkLGdCQUFnQjtJQXRCNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUseUpBS1Q7UUFDRCxNQUFNLEVBQUUsQ0FBQyxtUkFXUixDQUFDO0tBQ0wsQ0FBQztHQUNXLGdCQUFnQixDQUU1QjtBQUZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwic2VjdGlvblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgPExhYmVsIFt0ZXh0XT1cImxhYmVsXCI+PC9MYWJlbD5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICBMYWJlbCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Q4ZDhkODtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjU7XHJcbiAgICAgICAgY29sb3I6ICM2ODY4Njg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3Rpb25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxufVxyXG4iXX0=