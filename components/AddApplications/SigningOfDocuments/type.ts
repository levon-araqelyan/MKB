export type SigningOfDocumentsType = {
    prePosition: boolean;
    control: ()=> any;
    errors: {[x:string]:any};
}