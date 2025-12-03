import Link from "next/link";

import getServerContext from "@nimpl/context/get-server-context";

import { AppStoreServerContext } from "../../stores/app-store/contexts.server";

export const ServerNav = () => {
    const serverContext = getServerContext(AppStoreServerContext);

    return (
        <nav>
            {["en", "de", "fr"].map((locale) => (
                <p key={locale}>{locale === serverContext ? locale : <Link href={`/${locale}`}>{locale}</Link>}</p>
            ))}
        </nav>
    );
};
