# Next.js 15 App Router Bug: Invalid Root Route

This repository demonstrates a common error encountered when migrating to Next.js 15's App Router: the error message `Error: Route / is not a valid app directory route. It must be nested under a layout route or a page route`. This arises when attempting to define a page at the root of the `app` directory without a layout.

## Bug Reproduction

1.  Clone this repository.
2.  Run `npm install`.
3.  Run `npm run dev`.

You should see the error in the terminal, preventing the app from starting.

## Solution

The solution involves creating a layout route under `app` directory which the root page route belongs to. This ensures the route structure adheres to the new App Router rules.

Refer to the `bugSolution.js` file for the corrected code.