# Tempo Frontend challenge

# Solution Improvement

### Describe what you have improved in the solution

- Added extra tests on Teams component, 

- Fixed broken tests on TeamOverview component

- Fixed type mismatch on List component

- Refactored the team members fetch to run in parallel. 

#### About the search field.
First, I've tried to figure out if the API provides some filtering, but unfortunately, no. So I had to filter the results on the FE, which is not the best solution, but it works. 

Following the folder structure, I created the new component in the `components` folder. It is a very basic component. It just wraps an input and a local state to have the 2-way data binding. It also receives a prop called `onQueryUpdated` to allow the parent component to handle the updates on search criteria.

With the component created, I've changed the Teams and TeamOverview pages to render the new component and hold the search term. With the term, it was possible to apply a filter on the list and show only the data that matches the criteria.

## To Run the project you must run:

```
npm install
```

## after the installation finished, you can run:

```
npm start
```

#### The project will open in your browser with the following url http://localhost:3000;

## To run the tests yo must run

```
npm run test
```
