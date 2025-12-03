import { Nav } from "../../components/nav";
import { AfterContext } from "../../components/after-context";
import { TextAfterContextWithDelay } from "../../components/text-after-context-with-delay";

export default function Page() {
    return (
        <div id="after-page">
            <Nav />
            <AfterContext.Provider value={{ after: "first value" }}>
                <TextAfterContextWithDelay id="after-context-first-value" />
            </AfterContext.Provider>
            <AfterContext.Provider value={{ after: "second value" }}>
                <p id="after-context-second-value">
                    <AfterContext.Consumer>{(value) => value?.after}</AfterContext.Consumer>
                </p>
            </AfterContext.Provider>
        </div>
    );
}
