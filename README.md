# Plot Explorer
This React application displays figures based on user choices of variable to plot, 2 models to be compared and a time period. It's still a work in progress.

It can be seen on this URL:
https://github-pages.ucl.ac.uk/UKCORDEX-plot-explorer/

## Developer's guide

### Dependencies
This website is built using React. You will need:

* npm (Last tested with npm 8.0.0)

This project uses the following packages:
* create-react-app
* react-select
* react-bootstrap

### To run this website locally
1. Clone this repository, e.g.
  ```
git clone
  ```
1. Start the server locally
  ```
   npm start
  ```
You should see now a message in your console indicating your web is being
deployed in localhost:3000 (or different port if 3000 is busy)

### To deploy this website
This project uses React's gh-pages module. In order to deploy automatically a
new version you can:

```
npm run deploy
```

### To test this website
There are no tests just yet.

### Troubleshooting
#### If gh-pages doesn't appear to work
First, give it time, as it can take a couple minutes to deploy the latest
changes.

If it still doesn't seem to be deploying the latest changes correctly, you can
try the following:
1. Create a `deploy` version of your `feature` or `bugfix` branch with the same content.
1. Run
  ```
  npm build
  ```
1. This would have created a build directory that contains an `index.html` file, amongst other things.
1. Go to the GitHub repository and find "Settings" -> "Pages".
1. Choose to publish the new `deploy` branch you have just created.
1. Might need to wait a few minutes for the changes to propagate.
