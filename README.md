# A swipeable side menu made with ReactJS

_bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)_

## Menu
* [About](#about)
* [Description](#description)
* [Credits](#credits)

## About

This is just a simple implementation of a swipeable side menu for mobile browsers using ReactJS.

## Description

I am using [Touch Events](https://reactjs.org/docs/events.html#touch-events). The whole project
is based on [this post](http://www.hartzis.me/test-touch-events-react/) by [hartzis](https://github.com/hartzis).

I added some more interpretations of touch events detecting right swipes near the left edge of the screen
that will trigger the opening of the menu and left swipes triggering the closing of the menu.

The side menu is a modified version of the [w3schools](https://www.w3schools.com/) implementation of side navigation found [here](https://www.w3schools.com/howto/howto_js_sidenav.asp).

## Function

### Open the menu
You can open the menu either by clicking on the menu bars (&#8801;) on the top right of the screen,
or by swiping to the right from the left edge of the screen. I have put a threshold of 50 pixels, but you can change that as you wish.
I have kept this behaviour as it exists in most swipeable menus, so that right swipes don't trigger
the opening of the menu and result in a clash with other swipes of the rest of the content.

### Close the menu
You can close the menu either by clicking anywhere outside the menu (anywhere on the rest of the screen)
or by swiping to the left from anywhere on the screen.

## Usage

Just copy and paste or get inspired.

## Credits

* Thanks to [hartzis](https://github.com/hartzis) for the inspiration and code.