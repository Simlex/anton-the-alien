import { FunctionComponent, ReactElement } from "react";
import AntonInfoPage from "./AntonInfo";

interface AntonInfoProps {

}

const AntonInfo: FunctionComponent<AntonInfoProps> = (): ReactElement => {
    return ( 
        <AntonInfoPage />
     );
}

export default AntonInfo;