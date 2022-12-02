# Development

### Link to Deployed Website
https://angrypanda160.github.io/Development/

### Goal and Value of the Application
This application allows users to select/remove states from the 2020 election map and see how that would affect the results of the election. This will allow users to easily visualize the results of the 2020 presidential election and to see the impact that certain states had on the result.

### Usability Principles Considered
I added hierarchy in the filter/sort labels by making the broader filter and sort categories have larger labels than the individual filter categories. The card labels are also have a higher hierarchy than the rest of the text. I also made the select button change style when the item is selected for easier visual identification.

### Organization of Components
The App component renders the header, filter/sort selector, the Aggregator component and the list of StateCards. The Aggregator component renders the aggregated results among the selected states and renders the USMap component, which renders a US map with the selected states highlighted by winner (map an svg sourced from simplemaps.com, free to use and edited for React by me). The StateCard component renders the data for a state, as well as the select button.

### How Data is Passed Down Through Components
I use props to pass the state data down to StateCard, as well as if the card is currently selected and a toggleSelect function. I pass the set of currently selected states to the Aggregator and also to USMap, the broader state data is stored in a separate electoralData file and imported as needed.

### How the User Triggers State Changes
The user can trigger state changes by selecting a setting on either filter, on the sort categories/direction, or by restricting the view to only the selected items, which each have their own corresponding state variable. They also trigger a state change by selecting/deselecting any state, or by clicking the select or unselect all buttons, which edits the map stored by the selectedStates state.

