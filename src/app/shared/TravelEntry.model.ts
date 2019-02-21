export class TravelEntry {
    title: string;
    description: string;
    fromDate: Date;
    toDate: Date;
    pictureUrls: string[];

    constructor(_title?: string, _description?: string, _fromDate?: Date, _toDate?: Date, _pictureUrls?: string[]) {
        this.title = _title || '';
        this.description = _description || '';
        this.fromDate = _fromDate || new Date();
        this.toDate = _toDate || new Date();
        this.pictureUrls = _pictureUrls || [];
    }
}
