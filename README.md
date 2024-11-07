# Sngular Library

The objective of this project is to implement a library structure to query, explore, and access different types of assets, such as KPIs, dashboards, and other visual elements.

<img width="1411" alt="screenshot" src="https://github.com/user-attachments/assets/95ecc82c-7a23-4fb6-9a63-8c2325341807">

## Project requirements

This technical test should be completed within 2 to 3 days, as specified in the assignment. The main goal is to demonstrate the ability to build an interactive, user-friendly interface that enables the exploration of various asset types.

## Structure

```
├── app/           # Pages
├── components/    # Reusable UI components
├── hooks/         # Custom hooks for shared logic
├── lib/           # Library functions and helper utilities
├── public/        # Static files (e.g., images)
├── styles/        # Global and specific styles
├── store/         # State management and global store
└── package.json   # Project dependencies and scripts
```

## Run locally

Clone the project

```bash
  git clone <repository URL>
```

Go to the project directory

```bash
  cd project-name
```

Install dependencies

```bash
   npm/yarn/pnpm install
```

Start the server

```bash
  npm/yarn/pnpm run start
```

Access the application at http://localhost:3000.

## Developer Notes

The priority was to implement the described functionalities in the shortest time possible while maintaining best development practices and clean, readable code.

## Areas with ambiguous requirements

- **Specific Data for each modal:** The exact data to display in each modal is not clearly specified. I will make reasonable assumptions to include basic details (such as business questions, metric IDs, and descriptions for the KPI Modal).

- **Behavior of the "Request" button**: The function of the “Request” button in the library interface is undefined. I assume it either opens a modal or redirects to a page to request access to additional assets.

- **Interaction with Charts in the Data Viz Modal**: There is mention of “interaction with the chart,” but no details on how this interaction should work. For the initial delivery, I will use a placeholder to represent a future chart integration.

## Decisions and assumptions

- Each modal will include only the basic information mentioned in the project outline.

- To simulate assets in the featured and trending sections of the library, I will use static or mock data.

- The functionality of the "Request" button in the top-right corner of the library will be implemented as a basic informational modal rather than a complex form, given the limited time.

For any questions or feedback on this project, feel free to contact me.
