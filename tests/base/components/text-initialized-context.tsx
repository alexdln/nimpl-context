import getServerContext from "@nimpl/context/get-server-context";

import { UninitializedContext } from "./uninitialized-context";

interface TextUninitializedContextProps {
    id: string;
}

export const TextUninitializedContext: React.FC<TextUninitializedContextProps> = async ({ id }) => {
    const context = getServerContext(UninitializedContext);

    return <p id={id}>{context?.uninitialized}</p>;
};
