import {
    Component, OnInit
} from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { DialogRef } from 'common/services';
import { ITagInfoInjectionValues, ITagInfoModalSCI, ITagTableItem } from './tagInfoModal.interface';

@Component({
    selector: 'tag-info-modal',
    templateUrl: './tagInfoModal.html',
    styleUrls: ['./tagInfoModal.less']
})
export class TagInfoModalComponent implements OnInit {
    constructor(
        private dialogRef: DialogRef<ITagInfoInjectionValues>,
    ) {
        this.modalCms = dialogRef.data.modalCms;
    }

    public tagTable: ITagTableItem[];
    public modalCms: ITagInfoModalSCI;

    ngOnInit() {
        this.tagTable = [
            {
                desc: this.modalCms.FIRST_REG_TAGS_DESC,
                fee: this.modalCms.FIRST_REG_TAGS_FEE
            } as ITagTableItem,
            {
                desc: this.modalCms.MORE_THAN_TAGS_DESC,
                fee: this.modalCms.MORE_THAN_TAGS_FEE
            } as ITagTableItem,
            {
                desc: this.modalCms.MOTO_TAGS_DESC,
                fee: this.modalCms.MOTO_TAGS_FEE
            } as ITagTableItem
        ];
    }

    public cancel() {
        this.dialogRef.close();
    }

    public isTop(index: number) {
        return index === 0 && this.tagTable.length > 1;
    }

    public isInner(index: number) {
        return index > 0 && index + 1 < this.tagTable.length;
    }

    public isBottom(index: number) {
        return index > 0 && (index + 1 === this.tagTable.length);
    }
}

