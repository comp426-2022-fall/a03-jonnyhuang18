#!/usr/bin/env node
import { roll } from "../lib/roll";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

var sides = 6;
var dice = 2;
var rolls = 1;

if(args.sides > 0){
    sides = args.sides
}
if(args.dice > 0){
    dice = args.dice
}
if(args.rolls > 0){
    rolls = args.rolls
}

console.log(JSON.stringify(roll(sides, dice, rolls)));
process.exit(0);
