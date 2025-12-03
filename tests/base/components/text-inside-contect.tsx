import getServerContext from "@nimpl/context/get-server-context";

import { InsideContext } from "./inside-context";

interface TextInsideContextProps {
    id: string;
}

export const TextInsideContext: React.FC<TextInsideContextProps> = async ({ id }) => {
    const context = getServerContext(InsideContext);

    return <p id={id}>{context?.inside}</p>;
};
