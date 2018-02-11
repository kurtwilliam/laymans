# Laymans Conversationer

1. [General structure](#markdown-header-general-structure)
2. [Actions and reducers](#markdown-header-actions-and-reducers)
<!-- 3. [Adding themes](#markdown-header-adding-themes) -->
<!-- 4. [Adding email components](#markdown-header-adding-email-components) -->
<!-- 5. [Adding sidebar options](#markdown-header-adding-sidebar-options) -->

## General structure

The project is built in various different folders:
* `actions/`: Contains all of the actions relating to Redux
* `reducers/`: Contains all of the reducers relating to Redux
* `components/`: Split up into `presentational` (how things look: Question, Definition, RelatedQuestion) and `container` (how things work: Main, Shell, Footer)
* `utils/`: Contains helper functions, large blocks of code that are used in multiple places, content, and setup for the app (like the Redux store).

Aside from this, the `spentlyBuilder.js` file in the root of the `builder/` folder acts as a sort of entry point for everything. It connects the main, overarching React component (`Main.js`) to the Redux store to be able to share data easily. Also in this file is this line:

```js
render(storeWrapper, document.querySelector('.mount'));
```

This is what defines where React will mount the app (inject the markup and logic);

#### Rendering Flow
`LaymansConversationer/` - Foundational Component, defines where react mount's app and applies Redux.
`App/` - ?? I don't know why I have this lol
`Main/` - Renders containers Shell and Footer.
`Shell/` - Maps over components to render from the component list. Also applies a component wrapper to each.  
`ComponentWrapper/` - Chooses which type of component to render 
component - On click adds a component to component list (depending on what is clicked)

#### Components folder
The `components` folder is split up by the different categories of components. The distinction between the presentational components and the containers is not a technical one, rather, it is a distinction in their purpose.

`presentational/` components usually have some DOM markup and styles of their own. Essentially Laymans 'palette', can tweak the styling/rendering without affecting logic. Stupid components.

`containers/` components may contain both presentational and container components inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles. They also provide the data and behavior to presentational or other container components.

---

## Actions and reducers
_For a detailed description of actions and reducers, [see here](http://redux.js.org/docs/basics/Actions.html)_

The short description is that "Actions are payloads of information that send data from your application to your store." Basically, to affect a change in the Redux store, you __dispatch__ an action, which in turn __dispatch__ reducers. You'll also likely read them as "Action Creators;" this just means that they're putting together the information that is passed to the reducer then into the store.

Actions/Reducers are the way that React tells the Redux store what to do, which in turn informs the React app what to look like. You can think of them as globally available functions that always do the same thing, and require predefined arguments. The only difference is that reducers have to affect the store; you cannot dispatch an action that doesn't at least go through a reducer. If you want a globally available function, that's what the `utils/helpers.js` file is for.

### Our Actions/reducers
From least complicated to most complicated:

And now the big ones:

<!-- #### `companyActions.js`
* `companyActions.js` contains a couple of important actions:

| Action | Description |
|--------|-------------|
|`REQUEST_COMPANY` | Fetches company data from an array of urls |
|`RECEIVE_COMPANY` | Adds the fetched company data to the store |
|`UPDATE_SOCIAL` | Handles the form submission for the social link modal |
|`ADD_IMAGE` | Handles the form submission to add an image |
|`DELETE_IMAGE` | Deletes an image |
|`PAGINATE_MORE_IMAGES` | Refetches more images for the `ImageUpload` modal |

#### `templateActions.js`
* `templateActions.js` is really a doozy. This contains a lot of the functionality for the app.

| Action | Description |
|--------|-------------|
|`SELECT_COMPONENT` | Changes the `sidebar` key to the index of the component to select. This will change the sidebar's currently editable component|
|`SHOW_THEME_SETTINGS` | Changes the sidebar's section to `theme` to show the theme settings|
|`CHANGE_VALUE` | Changes the value of a components. This requires a `name` and `value` parameter, and will always change the value of the currently selected component|
|`CHANGE_GROUP_VALUE` | Changes the value of a component within a group. Requires the same arguments as `CHANGE_VALUE` plus the column number of the component to affect.|
|`CHANGE_THEME_VALUE` | Changes the value of one of the theme settings|
|`ADD_COMPONENT` | Adds a component to the store|
|`ADD_COMPONENT_TO_GROUP` | Adds a component the a group component. Requires the name of the components, the column number to add it to, and the index of the group component.|
|`UNDO` | Sets the `template` object in the store to the `lastState` object.|
|`DELETE_COMPONENT` | Deletes a component from the store|
|`CLONE_COMPONENT` | Clones a component|
|`CHANGE_ORDER` | Requires the old index of the component and the new index (where you want it to be moved to)|
|`SAVE_TEMPLATE` | Handles the fetch to save the template to the database. Also called here is the `renderTemplateCode()` function that bypasses the normal React rendering by using `ReactDOMServer.renderToStaticMarkup()`. This allows us to export the React-created markup as static markup, which is then saved to the database.|

---

## Adding Themes
To add a theme, create a `.json` file in the `utils/templates` folder. Then, in `utils/templates/template.js` add some code in the same format as is already there. You can use this code as a boilerplate to add to the top of the file:
```js
import TEMPLATEID from './TEMPLATEID.json';
```
_it is important that this line is added at the top of the document (with the rest of the imports) as you are defining a variable to be used later)_

Then add the `TEMPLATEID` variable you just defined to the `templates` object.

```js
const templates = {
  OI0016,
  OC0016,
  AF0016,
  RN0016,
  TEMPLATEID,
};
```
_fyi: this uses ES6 magic to make `KEY` the same as `KEY: KEY` in an object_

And done! The existing setup will take care of the work. On load, it'll check to see if the url has a `template` parameter; if it does, it'll look for whatever template matches the template id.

---

## Adding Email Components

Most of the work surrounding email components is done, so to add a new one requires these steps:

#### 1. Add the component to `utils/baseComponents.js`. You can use this code as a boilerplate:
```js
ComponentName: {
  name: 'Component Label', // Can be different from the ComponentName; this is what shows up in the sidebar
  section: 'general', // Available sections: general, marketing, integrations
  enabled: true, // Should this component be draggable from the sidebar?
  visible: true, // Should this component be visible in the sidebar?
  maxPerTemplate: false, // maximum number of times it can be in a template. `false` or a number.
  options: [
    { label: 'Space on Top', name: 'paddingTop', defaultValue: 8, type: 'number', unit: 'px', min: 0 },
    { label: 'Space on Bottom', name: 'paddingBottom', defaultValue: 8, type: 'number', unit: 'px', min: 0 },
  ],
},
```

In the options array is where you'll define the available variables that will affect the markup of the emailComponent. A full table of available options can be found __[in Adding sidebar options](#markdown-header-available-options)__.

#### 2. Add the markup in a new file in `components/emailComponents`. Follow the naming scheme: `ComponentName.js`.

You can use this boilerplate:
```js
import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';

@autobind
export default class Button extends Component {
  static propTypes = { data: PropTypes.object }

  componentWillReceiveProps() {
    // Ensures the component in the builder visually
    // updates whenever a relevant value is changed
    this.forceUpdate();
  }

  render() {
    // Define the variables you want to use. These are contained
    // within the `data` object prop, and using ES6 destructuring it is
    // easy to define them each as variables.
    const {
      paddingTop,
      paddingBottom,
    } = this.props.data;

    // Markup goes here!
    return (
      <div></div>
    );
  }
}
```

#### 3. Add the new component to the `components/containersShell.js` file.
In the top bit with all of the imports, add the new one like:
```js
import ComponentName from '../emailComponents/ComponentName';
```

Within the `renderComponents()` method, add the new `ComponentName` variable to the `componentsList` object.

```js
const componentsList = {
  Text,
  Image,
  Divider,
  // ...
  ComponentName,
};
```

#### 4. Add an SVG Icon to `utils/icons.js`.
This is important; without this the app won't know what to show in the sidebar and will not render anything. Adding an icon is pretty straightforward; the file is comprised of an object whose key/value pairs connect a key to a line of SVG code. The actual `<svg>` tag only requires the `viewbox` attribute; everything else is tacked on later. Your new icon will look like:
```js
ComponentName: <svg viewbox="..."><path...>
```

And you're done! All of the logic for the new component should be contained within its own file (the `components/emailComponents/ComponentName.js` file you've just made). The app will handle the rest.

## Adding sidebar options
All of the available options are contained within `components/global/Options` and are separated into different files.

###### Available options:

| type | Description | Available keys | File (within `components/global/Options`) |
|------|-------------|----------------|------|
| button | A single button | `action` | `Button.js` |
| checkbox | A single checkbox | --- | `Checkbox.js` |
| checkboxes | A group of checkboxes | in `defaultValue`, an array of objects for each checkbox. `{ label: String, name: String, value: Boolean }` | `Checkboxes.js` |
| code | The custom code option | --- | `Code.js` |
| color | Color picker option | --- | `Color.js` |
| dropdown | Dropdown menu | `options: [ { label: String, value: String } ]` | `Dropdown.js` |
| editor | Uses the text editor (currently Quill) | --- | `TextEditor.js` |
| image | Image and image editor/uploader | --- | `Image.js`
| position | Set of buttons for left, right or center | --- | `Position.js` |
| number | Numeric input | `max`, `min`, `unit` (px, %, etc) | `NumericInput.js` |
| text | A small input | `placeholder` | `Input.js` |
| textarea | A larger input (a `<textarea />`) | `placeholder`, `maxlength` | `Textarea.js` |
| message | A simple message. No editable values. | `message`: String or HTML | `Message.js` |

##### Every option needs a `label`, a `name` and a `defaultValue`.
_Except `message`_

* `label` is what the user sees in the sidebar.
* `name` is the variable you'll use when plugging the value into the emailComponent's markup.
* `defaultValue` can be blank, but you'll often want an actual value so it is required.

Adding a new option requires two steps:
#### 1. Add a React component inside `components/global/Options`. Follow the naming scheme of `OptionName.js`.

```js
import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';

@autobind
export default class OptionName extends Component {
  propTypes = {
    label: PropTypes.string.isRequired,
  }

  render() {
    const { label } = this.props;

    return (
      <div className="form__input-wrapper--inline">
        {label}
      </div>
    );
  }
}
```

#### 2. Add the option to `utils/options.js`. This means adding an import to the top, then following the same scheme as the other options:

```js
// at top:
import OptionName from '../components/global/Options/OptionName';

// in switch statement:
case 'optionType':
  input = <OptionName {...props} {...option} />;
  break;
```
_`optionType`: The string value that is used in `baseComponents` to decide what kind of input to show_

And you're done! -->