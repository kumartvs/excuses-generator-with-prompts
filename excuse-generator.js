#!/usr/bin/env node

"use strict";

const who = ["My dog", "My grandma", "The mailman", "My neighbor"];
const action = ["ate", "broke", "forgot", "lost"];
const what = ["my homework", "the car keys", "my phone", "the bus pass"];
const when = ["today", "yesterday", "this morning", "last night"];
const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];
const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

console.log(excuse);
