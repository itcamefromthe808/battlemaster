This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Overview
This is my first project in React so bear with me here as it gets built out.

This is a tool to aid both Players and DMs when managing a 4th Edition Dungeons and Dragons game.

Some of the features are detailed below

## Battle Master
This mode allows a DM to manage a combat encounter. It will manage initiative, hit points, statuses, and all combat stats. By using a database, the state of combat can be saved so combat can be "paused" and resumed later.

## Tools
### Monster Sheet
Allows templating of monster types for easy reuse.

### Player Sheet
This is going to be a digital character sheet for 4th Edition. It will handle all aspects of maintaining a character and allow a DM to import players into new or existing battles and have all the relevant combat stats brought in.

## Helpers
Dice rollers, firebase integration, etc.

## Hierarchal Component chart
```
App (Lobby / Entry Point)
  SheetPicker
  BattlePicker
Battle (Entry Point)
  Entity(s)
  BattleOptions (act like inventory)
    Login
    BattleAdmin
      Monster
      SheetPicker
    Entity (expanded state? separate component? will contain link to sheet)
Player (Entry Point)
  Login
Monster (Entry Point)
  Login
```
If you understand this, you are amazing.

### To Do
Fix my damn grammar.
