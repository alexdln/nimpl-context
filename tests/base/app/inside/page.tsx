import { Nav } from "../../components/nav";
import { InsideContext } from "../../components/inside-context";
import { TextInsideContext } from "../../components/text-inside-contect";

export default function Page() {
    return (
        <div id="inside-page">
            <Nav />
            <InsideContext.Provider value={{ inside: "first value" }}>
                <InsideContext.Provider value={{ inside: "second value" }}>
                    <TextInsideContext id="inside-context-second-value" />
                </InsideContext.Provider>
                <InsideContext.Consumer>
                    {(serverContext) => <p id="inside-context-first-value">{serverContext?.inside}</p>}
                </InsideContext.Consumer>
                <TextInsideContext id="inside-context-third-value" />
            </InsideContext.Provider>
        </div>
    );
}
