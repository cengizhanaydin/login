# LOGIN

Login flow is created using context api and react navigation.

## Libraries

| Libraries | README |
| ------ | ------ |
| React Navigation | https://reactnavigation.org |
| Context API | https://tr.reactjs.org/docs/context.html |


## React Navigation

In the web browser, there is a global stack structure and additions and extractions are made on this stack. When it comes back, it pops up and actually comes to the previous page. React Navigation provides the expected movements and animations on the iOS and Android side.

We can call the method of React navigation used in authentication flows as protected routes.

Protected routes, allow us to separate the screens shown when there is no token from other screens. Thus, the user is prevented from entering without a token.

## Context API

Context provides data transmission through the component tree. Thus, it is difficult to constantly pass props to child components.
