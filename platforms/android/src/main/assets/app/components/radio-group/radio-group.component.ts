import { Component, Input } from "@angular/core";

@Component({
    selector: "radio-group",
    moduleId: module.id,
    templateUrl: "./radio-group.component.html",
    styleUrls: ["./radio-group.component.css"],
})
export class RadioGroupComponent {
  @Input() data: string[];
  @Input() selectedIndex: number = 0;

  onSelect(index) {
    this.selectedIndex = index;
  }
}
