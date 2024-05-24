This monorepo is a test repo. It combines the Sveltekit demo app, the Sveltekit 
Library project, and a simple TypeScript package.

A package.json is added at top-level to ensure the monorepo dependencies.

Differences in the 'app'package from the Sveltekit demo app:
1. added TypeScriptCounter.svelte, which uses the TypeScript library, to +page.svelte.

Differences in the 'components' package from the Sveltekit library app:
1. renamed to 'test-components-lib'
2. added a component called 'LibraryButton'
3. added export of previous to 'components/src/lib/index.ts'
4. in package.json changed the 'dev' script to be equal to the 'build' script
5. added a 'dev-internal' script.

--- So far, no errors. Everything seems to work fine. Both the app and the test page in components show correctly.

Final change:
1. added LibraryButton.svelte, which uses the components library, to +page.svelte (in the app package).

When running 'npm run dev' on the top level of the monorepo, the following error occurs:
    Error: <LibraryButton> is not a valid SSR component. You may need to review your build config 
    to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you 
    may need to fix a <LibraryButton>.

Question: why is the component library not being packaged for use correctly?
