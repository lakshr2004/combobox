🧩 Hierarchical Combobox (Async, Virtualized, Multi-Select)

A fully accessible, keyboard-first hierarchical selection component built from scratch using:

React 18

TypeScript (strict mode)

Vite

Tailwind CSS (design-token based)

Storybook + Chromatic

Vitest + Testing Library

No UI libraries. No tree libraries. No virtualization libraries.

🌐 Public Storybook

Live component documentation and interactive examples:

https://www.chromatic.com/library?appId=69a5519e1f31b75cbd130346

🧪 Chromatic Build

Verified Chromatic build:

https://www.chromatic.com/build?appId=69a5519e1f31b75cbd130346&number=2

🎯 Objective

Build a scalable hierarchical selection component capable of handling:

Async tree loading

Virtualized rendering

Search with ancestry context

Multi-select with indeterminate states

Full keyboard contract

Screen reader parity

Without using any forbidden libraries.

🏗 Architecture Overview
Tree Model

Each node contains:

type TreeNode = {
  id: string;
  label: string;
  hasChildren?: boolean;
  children?: TreeNode[];
};

Async children are loaded via:

loadChildren(nodeId: string): Promise<TreeNode[]>
Virtualization Strategy

Tree is flattened based on expansion state.

Only visible rows are rendered.

Scroll offset determines start/end index.

Focused node remains stable via persistent id mapping.

No external virtualization library used.

Selection Model

Supports:

Multi-select

Parent indeterminate state

Recursive selection propagation

Partial descendant resolution

Indeterminate state is derived, not stored.

⌨ Accessibility

Fully keyboard-first.

Supported keys:

↑ ↓ : navigate

→ : expand

← : collapse

Space : select

Enter : confirm

Home / End : jump

Typeahead search

ARIA:

role="tree"

role="treeitem"

aria-expanded

aria-selected

aria-level

aria-busy (async loading)

aria-live (error announcements)

Validated using:

@storybook/addon-a11y

axe-core

🎨 Styling System

Tailwind CSS (latest)

Design tokens via CSS variables:

Colors

Spacing

Radius

Focus ring

High-contrast mode supported via:

[data-theme="high-contrast"]

No inline styles except unavoidable dynamic virtualization calculations.

⚡ Performance Notes

DOM node count limited to visible range only.

Flattening memoized based on expansion state.

No blanket useMemo usage.

Selection updates are O(n) only within subtree.

Async loading does not block navigation.

Verified using React DevTools highlight updates.

📚 Storybook Scenarios

Includes:

Default

Deep hierarchy

Large dataset

Async loading

Error state

Empty state

High contrast mode

Keyboard-only interaction

No happy-path-only stories.

🧪 Testing

Using:

Vitest

@storybook/addon-vitest

Testing Library

Playwright (Chromium)

Tests cover:

Keyboard navigation

Selection behavior

Async states

Accessibility constraints

Failure handling

No snapshot-only testing.

🚫 Forbidden Libraries Compliance

Not used:

MUI

Radix

Chakra

Headless UI

react-window

tanstack/virtual

react-select

downshift

popper

Any component library

Any tree library

Any virtualization library

All primitives implemented manually.

🛠 Development
npm install
npm run storybook
npm run test-storybook
npm run build-storybook
📦 Production

This project publishes Storybook via Chromatic.

No separate app deployment.

✅ Compliance Checklist

React 18+

TypeScript strict mode

Tailwind utility-first

Design tokens

ESLint + TypeScript ESLint

Prettier

Storybook public

Chromatic build passing

Interaction tests

A11y validation

No forbidden libraries

Virtualization implemented manually

👤 Author

Laksh Raj