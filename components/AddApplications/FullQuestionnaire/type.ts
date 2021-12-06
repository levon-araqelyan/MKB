export type FullQuestionnaireType = {
    prePosition: boolean;
    control: ()=> any;
    errors: {[x:string]:any};
}