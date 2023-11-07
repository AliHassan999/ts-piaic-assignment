"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing guest lists from different files
const _14_guest_list_1 = require("./14-guest-list");
const _15_change_guest_list_1 = require("./15-change-guest-list");
const _16_more_guest_1 = require("./16-more-guest");
const _17_shrinking_guest_list_1 = require("./17-shrinking-guest-list");
// Displaying the number of guests in each list
console.log(`Number of guests in the first Guest List: ${_14_guest_list_1.guestList.length}`);
console.log(`Number of guests in the second Guest List: ${_15_change_guest_list_1.guestLists.length}`);
console.log(`Number of guests in the third Guest List: ${_16_more_guest_1.moreGuest.length}`);
console.log(`Number of guests in the fourth Guest List: ${_17_shrinking_guest_list_1.shrinkingGuestList.length}`);
