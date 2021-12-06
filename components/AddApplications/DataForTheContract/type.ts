export type DataForTheContractType = {
    prePosition: boolean;
    control: ()=> any;
    errors: {[x:string]:any};
}