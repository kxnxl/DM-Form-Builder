# DM Form Builder UI

JSON-based form builder Angular application. Uses [ng-zorro-antd](https://ng.ant.design/) as a UI component library.

## Features

Create a new form or edit one of the pre-built templates in the form builder UI which allows to:
- Add or remove fields
- Change field types (short/long text, date, number, checkbox, email, password)
- Edit the form and field names
- Edit field placeholders for the input types
- Mark fields as required
- Set the number of columns

## Authentication Approach

The application implements social login authentication instead of traditional user role-based authentication for the following reasons:

1. **Simplified User Management**: Social login reduces the complexity of managing user credentials and authentication flows, as it leverages existing social media platforms' security measures.

2. **Enhanced Security**: By utilizing established social media platforms (Google), we benefit from their robust security measures, including:
   - Two-factor authentication
   - Password recovery mechanisms
   - Account security features
   - Regular security updates

3. **Better User Experience**: Users can quickly access the application without creating and remembering additional credentials, reducing friction in the onboarding process.

4. **Maintenance Benefits**: Eliminates the need to maintain a separate user database and authentication system, reducing maintenance overhead and potential security vulnerabilities.

## State Management

The application uses Local Storage for state management instead of NgRx for the following reasons:

1. **Simplicity**: Local Storage provides a straightforward way to persist data without the complexity of a full state management solution.

2. **Performance**: For this application's scale, Local Storage offers sufficient performance without the overhead of a more complex state management system.

3. **Persistence**: Local Storage naturally persists data across page refreshes, which is beneficial for maintaining form state.

4. **Lightweight**: The application's state management needs are relatively simple, making Local Storage an appropriate choice over more heavyweight solutions like NgRx.

## Standard commands
### Install dependencies

Run `npm i` to fetch node_modules.

### Start development server

Run `npm start` for a dev server.
Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project.
The build artifacts will be stored in the `dist/` directory.

### Testing

- Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)
- Run `npm run e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io)

### Code style

Run `npm run lint` to analyze the code by [ESLint](https://eslint.org/)
