export type ClientInformationType = {
    prePosition: boolean;
    control: ()=> any;
    errors: {[x:string]:any};
}