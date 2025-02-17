import languages from "../../../data/languages";

export default function Main() {
    return (
        <>
            {
                languages.map(language =>
                    <>
                        <button className="button">{languages.tile}</button>
                        <div className="description">
                            {
                                <>
                                    <h3>{languages.tile}</h3>
                                    <p>{languages.description}</p>
                                </>

                            }
                        </div>
                    </>
                )
            }
        </>

    );

}

