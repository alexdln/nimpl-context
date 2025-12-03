import getServerContext from "@nimpl/context/get-server-context";

import { sleep } from "../tools/sleep";
import { AfterContext } from "./after-context";

interface TextAfterContextWithDelayProps {
    id: string;
}

export const TextAfterContextWithDelay: React.FC<TextAfterContextWithDelayProps> = async ({ id }) => {
    await sleep(1000);
    const context = getServerContext(AfterContext);
    console.log("TextAfterContextWithDelay", context);

    return <p id={id}>{context?.after}</p>;
};
