import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "order-dialog",
    moduleId: module.id,
    templateUrl: "./order-dialog.component.html",
    styleUrls: ["./order-dialog.component.css"],
})
export class OrderDialogComponent implements OnInit {
    @Input() show: boolean;

    ngOnInit() {
        
    }

    onClose() {
        
    }

    onPadstow() {
        
    }


}
