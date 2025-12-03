# @nimpl/context

Implementation of server contexts in React Server Components without switching to SSR

Before using the library, read the [Possible Issues](https://nimpl.dev/docs/context#possible-issues)

Visit https://nimpl.dev/docs/context to view the full documentation.

## Installation

**Using npm:**

```bash
npm i @nimpl/context
```

**Using yarn:**

```bash
yarn add @nimpl/context
```

## Usage

```tsx
// stores/app-store/contexts.server.tsx
import createServerContext from "@nimpl/context/create-server-context";
export const AppServerContext = createServerContext<{ data: string | null }>({
  data: null,
});

// components/parent-component
import { AppServerContext } from "@/stores/app-store/contexts.server";
import { ChildComponent } from "./child-component";

export const ParentComponent = () => (
  {/* Same as <AppServerContext.Provider /> */}
  <AppServerContext value={{ data: "test" }}>
    <ChildComponent />
  </AppServerContext>
);

// components/child-component
import getServerContext from "@nimpl/context/get-server-context";
import { AppServerContext } from "@/stores/app-store/contexts.server";

export const ChildComponent = () => {
  const context = getServerContext(AppServerContext);

  return <div>{context.data}</div>;
};
```

## Stability

All context are covered with tests. Tests are run on every release and every 6 hours on the latest **Canary** version of `Next.js`.

In this way, you can be sure not only of the stability of the code, but also that if there is a breaking change in `Next.js`, this will immediately become known. _Even before the release of a stable version of `Next.js`._

## Examples

You can see examples in the [directory](https://github.com/alexdln/nimpl-context/tree/main/examples) of the repository.

## Additional

Please consider giving a star if you like it, it shows that the package is useful and helps continue work on this and other packages.

Create issues for identified issues, desired getters, or various improvements.

## License

[MIT](https://github.com/alexdln/nimpl-context/blob/main/LICENSE)
