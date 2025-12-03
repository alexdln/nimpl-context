import createServerContext from "@nimpl/context/create-server-context";

export const UninitializedContext = createServerContext({ uninitialized: "initialized default value" });
