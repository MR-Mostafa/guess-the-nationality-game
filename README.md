# Tiny Game with ReactJs (Guess the nationality)

### Question description

**Please note we will be assessing the following criteria when reviewing your assessment:**

-   Approach to problem solving
-   Attention to details and professionalism
-   Ability to write minimal, clean and brief code while adhering to best practices and separation of concerns
-   Object design, naming skills and domain-driven thinking, Avoiding code duplication
-   Communication skills, and asking the right questions at the right time

**Specification:**

-   Your task is to create a tiny game. You should write the following game using your technologies including HTML, JavaScript, jQuery, React, or Angular.
-   Along with the source code, please record a screenshot video of the game running and a step by step instruction of setting - up and running the assessment.
-   Upload the source code into a public Github repository and send us the link.

**Instructions:**

-   A white screen with 4 boxes on the 4 corners of the screen.
-   Each box will have a text on it reading "Japanese", "Chinese", "Korean" and "Thai".
-   From the middle top of the screen, the photo of a person should drop and slowly go to the bottom of the screen within 3 seconds.
-   As the image is dropping down, the user should guess the nationality of the person before it reaches the bottom, and throw it towards one of the 4 nationality boxes by panning it (for about 20px or more). The photo should then animate towards that box and slowly fade out.
-   If the user guessed correctly, it will be a positive 20 points. If it was wrong it will be -5 points.
-   The total points should be displayed at the bottom of the screen.
-   Immediately after the picture has disappeared, the next picture should drop.
-   This should continue for 10 or more pictures and then the game will stop, showing the user's total score, with a button to play again.

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
