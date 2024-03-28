import { FunctionComponent, ReactElement } from "react";

interface AntonInfoPageProps {

}

const AntonInfoPage: FunctionComponent<AntonInfoPageProps> = (): ReactElement => {
    return (
        <main>
            <h1>Anton</h1>
            <p>Anton is a friendly alien who loves to play with children.</p>
            <p>He loves to play hide and seek and tag.</p>
            <p>He also loves to eat ice cream and drink soda.</p>
            <p>He is a great friend to have around.</p>
        </main>
    );
}

export default AntonInfoPage;