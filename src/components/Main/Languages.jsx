import { useState } from "react";
// import languages from "../../../data/languages";

export default function Languages(props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="cards">
                <button className="button"
                    onClick={() => setIsOpen((current) => !current)}>{props.titolo}</button>

                <div className="description">
                    <h3>{isOpen && props.titolo}</h3>
                    <p>{isOpen && props.descrizione}</p>
                </div>
            </div>
        </>

    )

}