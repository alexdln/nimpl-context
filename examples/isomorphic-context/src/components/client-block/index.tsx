"use client";

import { useContext } from "react";

import { AppStoreClientContext } from "../../stores/app-store/contexts.client";

export const ClientBlock = () => {
    const clientContext = useContext(AppStoreClientContext);

    return <p>Target locale: {clientContext}</p>;
};
