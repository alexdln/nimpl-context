"use client";

import { AppStoreClientContext } from "./contexts.client";

type AppStoreClientProviderProps = {
    value: string;
    children: React.ReactNode;
};

export const AppStoreClientProvider: React.FC<AppStoreClientProviderProps> = ({ value, children }) => (
    <AppStoreClientContext.Provider value={value}>{children}</AppStoreClientContext.Provider>
);
