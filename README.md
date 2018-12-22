# Click All The Doggos
This "clicky game" is a dog themed memory game built and bootstrapped through React [Create React App](https://github.com/facebook/create-react-app).

## Let's play fetch
The objective of the game is to click each of the different pup images once.
Each time the user clicks on a new image the score will increase by one point. If the user clicks an image twice within the same run, the game will reset and the score will return to 0.

## How it works
1. The game starts once the first dog has been adopted... I mean, clicked.
2. Each dog is defined by a card with a value set to "0," or "null."
3. Once clicked, that dog's value is set to "1" and the score is incremented by one point per card switched from "0" to "1."
4. The goal of the game is to click each doggo only once (hence the whole memory game thing, duh. I mean, "woof").
5. If the user clicks a pup's image twice (with a back-end value of 1 incrementing to 2), all dogs.json values will be revert to "0," the user score will revert to 0, and the game resets.

## Built with:

* HTML / XML
* CSS
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)

<hr>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
