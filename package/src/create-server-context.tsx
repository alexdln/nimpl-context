import React from "react";
import { AsyncLocalStorage } from "node:async_hooks";

import { type ServerContext } from "./types";
import { serverGetterInClientComponentError } from "./server-getter-in-client-component-error";

const Enter = ({ storage, value }: { storage: AsyncLocalStorage<{ value: unknown }>; value: unknown }) => {
    storage.enterWith({ value });
    return <></>;
};

function createServerContext<T>(defaultValue?: T): ServerContext<T> {
    serverGetterInClientComponentError("createServerContext");

    const storage: ServerContext<T>["_storage"] = new AsyncLocalStorage<{ value: T | undefined }>();

    // The provider must always be asynchronous
    const Provider: ServerContext<T>["Provider"] = async ({ children, value }) => {
        serverGetterInClientComponentError("ServerContext.Provider");
        const providerValue = value || defaultValue;
        return (
            <>
                <Enter storage={storage} value={providerValue} />
                {children}
            </>
        );
    };

    const Consumer: ServerContext<T>["Consumer"] = ({ children }) => {
        serverGetterInClientComponentError("ServerContext.Consumer");
        const store = storage.getStore();
        const consumerValue = store ? store.value : defaultValue;
        return children(consumerValue);
    };

    return Object.assign(Provider, {
        Provider,
        Consumer,
        _storage: storage,
        _defaultValue: defaultValue,
    });
}

export default createServerContext;
