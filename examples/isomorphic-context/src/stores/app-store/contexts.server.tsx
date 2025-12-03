import createServerContext from "@nimpl/context/create-server-context";

export const AppStoreServerContext = createServerContext<string | null>(null);
