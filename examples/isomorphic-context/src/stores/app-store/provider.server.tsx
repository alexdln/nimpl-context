import { AppStoreServerContext } from "./contexts.server";

type AppStoreServerProviderProps = {
    value: string;
    children: React.ReactNode;
};

export const AppStoreServerProvider: React.FC<AppStoreServerProviderProps> = ({ value, children }) => (
    <AppStoreServerContext.Provider value={value}>{children}</AppStoreServerContext.Provider>
);
