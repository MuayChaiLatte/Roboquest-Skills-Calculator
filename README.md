# RoboQuest Skills Calculator

Theorycraft different builds in the video game RoboQuest by selecting the skills for your chosen character

## Project Status (Incomplete)

I am still building the initial skeleton and core functionality, not ready to be used yet

## Initial MVP Goals

- All below features functional for at least the Guardian class
- Selecting one of the skills available to your class increases the level displayed to the user
- All skills available to your class in-game should be included with the correct description
- Skills available for selection is dependent on your level, in-line with in-game rules, e.g. Primary skills can only be selected at levels 2,4,7 and 10 etc.

## Built With

- Typescript
- React

## Code Optimisation/Decision Highlights

- Simplifying level calculation based on number of Perks selected https://github.com/MuayChaiLatte/Roboquest-Skills-Calculator/commit/9943565e03bbeb9b644172cd0cd4208f71a510df
    - Character level should increment by 1 per new Perk chosen. Initially thought to count the number of selected perks to link level to perks. Instead opted to abstract. Level now simply knows to increment or decrement based on if the perk state change was to enabled or to disabled respectively. The cost to calculate level is now always low and static. Will not change if I want to have a very large number of perks available.