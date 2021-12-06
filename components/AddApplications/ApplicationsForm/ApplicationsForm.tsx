import React from "react";
import PrimaryDocuments from "../PrimaryDocuments";
import ClientInformation from "../ClientInformation";
import FullQuestionnaire from "../FullQuestionnaire";
import DataForTheContract from "../DataForTheContract";
import SigningOfDocuments from "../SigningOfDocuments";
import DocumentView from "../DocumentView";

export type ApplicationsFormType = {
    position: number;
    control: () => any;
    errors: { [x: string]: any };
    prePosition: number
}

const ApplicationsForm: React.FC<any> = ({position, prePosition, control, errors,}) => {
    return (
        <div>
            {position === 1 && <PrimaryDocuments errors={errors} prePosition={prePosition} control={control}/>}
            {position === 2 && <ClientInformation errors={errors} prePosition={prePosition} control={control}/>}
            {position === 3 && <FullQuestionnaire errors={errors} prePosition={prePosition} control={control}/>}
            {position === 4 && <DataForTheContract errors={errors} prePosition={prePosition} control={control}/>}
            {position === 5 && <SigningOfDocuments errors={errors} prePosition={prePosition} control={control}/>}
            {position === 6 && <DocumentView prePosition={prePosition}/>}
        </div>
    )
}

export default ApplicationsForm