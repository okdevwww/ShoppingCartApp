import { Component, Input, Output, EventEmitter } from "@angular/core";
import { productGroup } from '../../shared';

@Component({
    selector: "product-group",
    moduleId: module.id,
    templateUrl: "./product-group.component.html",
    styleUrls: ["./product-group.component.css"],
})
export class ProductGroupComponent {
    @Input() model: productGroup;
    @Input() opened: boolean;
    @Output() onOpened: EventEmitter<string> = new EventEmitter();

    onTabHeader() {
      this.opened = !this.opened;
      this.onOpened.emit(this.opened ? this.model.productGroupId : '');
    }
}
