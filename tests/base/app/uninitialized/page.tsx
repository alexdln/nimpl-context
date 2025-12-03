import { Nav } from "../../components/nav";
import { UninitializedContext } from "../../components/uninitialized-context";
import { TextUninitializedContext } from "../../components/text-initialized-context";

export default function Page() {
    return (
        <div id="uninitialized-page">
            <Nav />
            <UninitializedContext.Provider value={{ uninitialized: "first value" }}>
                <UninitializedContext.Consumer>
                    {(serverContext) => <p id="uninitialized-context-first-value">{serverContext?.uninitialized}</p>}
                </UninitializedContext.Consumer>
            </UninitializedContext.Provider>
            <TextUninitializedContext id="uninitialized-context-second-value" />
        </div>
    );
}
