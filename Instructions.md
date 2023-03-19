CREATING PROJECT:

### Intro:

1. Create an empty folder + drag and drop into new VS code window
2. in the terminal (inside folder), write: npm create-react-app ./
    (make sure you got node installed)
3. don't worry about .git folder.
4. node modules contain all dependencies
5. Public folder contains index.html, we hook entire application through
6. src, most important folder. Where we create all of our React Components.

7. delete all of src (source) folder, and create new folder and files from scratch.
8. So create new src folder.
9. then create index.js file.
    - import React from 'react'
    - import ReactDOM from 'react-dom' (allow us to hook our react app to index.html)
    - ReactDOM.render(<App />, document.getElementById('root'))
    - import App from './App' (we don't have this file, but we'll create it soon)

9. inside of src create new file App.js
    - rafce (es7 snippets by dsznajder) (create react functional component).
    - then just create an <h1> tag and say GPT-3, to test on localhost.
    - npm start (on terminal to test on localhost)

10. install dependency (only one, minimal dependencies).
    - npm install react-icons
    (we are turning the figma design into a compelling website).
    - "soon filled, with assets, color, background... look and feel amazing".

### Folder and File structure:

11. Let's create basic folder and file structure for entire project.
    - inside src, create components folder
    - inside components, create article, brand, cta, feature, navbar
    - each component will have 2 files (1 correspondent component)
        - inside article folder create Article.jsx and article.css (styles for that component)
            - inside Article.jsx create a new functional component (rafce)
            - also inside Article.jsx import article.css
                command: import './article.css
        - then repeat the process to all the other folders in components folder. (brand, cta, feature and navbar).
        
12. Inside of components folder create index.js file.
    - So we can export all the components in a more neat way. 
    - So export all components.
    - Code:
export { default as Article } from './article/Article';
export { default as Brand } from './brand/Brand';
export { default as Cta } from './cta/Cta';
export { default as Feature } from './feature/Feature';
export { default as Navbar } from './navbar/Navbar';

    - then in App.js import all components in one liner (phenomenal trick)
        - code: import { Article, Brand, Cta, Feature, Navbar } from './components'
        - but delete it (it was just so you know the trick), because we will import our components inside of our containers. 
    - ps. we are going to structure our react application in a few files and folders

13. Create a new folder called containers inside of src folder.
        - this will be for our bigger components, containing multiple components
        - You can think of containers like a bigger section of the page.

14. So let's repeat the process for our containters.
    - inside containers folder create: blog, features, footer, header, possibility, whatGPT3
    - then for each of these folders create the respective component file and css file.

15. then for each jsx component file paste the (rafce) react functional component and import the css file path.

16. Then create index.js inside of containers, and export all of the components from containers folder. 
    - Ex:
export { default as Blog } from './blog/Blog'
export { default as Features } from './features/Features'
export { default as Footer } from './footer/Footer'
export { default as Header } from './header/Header'
export { default as Possibility } from './possibility/Possibility'
export { default as WhatGPT3 } from './whatgpt3/WhatGPT3'

17. (24:15)

Ps. this is the whole point of react, have everything in a single page, and separate everything in smaller components, and code it separately. Compared to an hmtl index file with "thousands of lines".

17. (48:27), (1:21:52),