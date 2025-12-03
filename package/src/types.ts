import { type AsyncLocalStorage } from "async_hooks";

type Provider<T> = ({ children, value }: { children: React.ReactNode; value: T | undefined }) => React.ReactNode;

type Consumer<T> = ({ children }: { children: (context: T | undefined) => React.ReactNode }) => React.ReactNode;

export type ServerContext<T> = Provider<T> & {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
    _storage: AsyncLocalStorage<{ value: T | undefined }>;
    _defaultValue: T | undefined;
};
