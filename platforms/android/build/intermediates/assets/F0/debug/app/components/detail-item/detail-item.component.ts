import { Component, Input } from "@angular/core";

@Component({
    selector: "detail-item",
    moduleId: module.id,
    template: `
        <FlexboxLayout>
            <Label
                flexGrow="1"
                [text]="label"
                [color]="color"></Label>
            <Image src="~/images/arrow_icon.png"></Image>
        </FlexboxLayout>
    `,
    styles: [`
        FlexboxLayout {
            height: 50;
            padding-left: 10;
            background-color: #ffffff;
            border-bottom-color: #d0d0d0;
            border-bottom-width: 0.5;
        }

        Image {
            width: 14;
            margin-right: 8;
        }
    `],
})
export class DetailItemComponent {
    @Input() label: string;
    @Input() color: string = '#575959';
}
