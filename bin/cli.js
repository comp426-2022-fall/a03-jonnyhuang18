#!/usr/bin/env node
import minimist from "minimist";
import {roll} from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

var sides = 6;
var dice = 2;
var rolls = 1;

export function main(){
    console.log(JSON.stringify(roll(args.sides,args.dice,args.rolls)));
};

main();
