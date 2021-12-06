export type PrimaryDocumentsType = {
    prePosition: boolean;
    control: ()=> any;
    errors: {[x:string]:any};
}