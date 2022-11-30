#!/usr/bin/env node
import { roll } from "/lib/roll.js"
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

var sides = 6;
var dice = 2;
var rolls = 1;

sides = args.sides;
dice = args.dice;
rolls = args.rolls;

console.log(JSON.stringify(roll(sides, dice, rolls)));
process.exit(0);
