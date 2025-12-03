import { AppStoreClientProvider } from "./provider.client";
import { AppStoreServerProvider } from "./provider.server";

type AppStoreProviderProps = {
    value: string;
    children: React.ReactNode;
};

export const AppStoreProvider: React.FC<AppStoreProviderProps> = ({ value, children }) => (
    <AppStoreServerProvider value={value}>
        <AppStoreClientProvider value={value}>{children}</AppStoreClientProvider>
    </AppStoreServerProvider>
);
