// Importing guest lists from different files
import { guestList } from './14-guest-list';
import { guestLists } from './15-change-guest-list';
import { moreGuest } from './16-more-guest';
import { shrinkingGuestList } from './17-shrinking-guest-list';

// Displaying the number of guests in each list
console.log(`Number of guests in the first Guest List: ${guestList.length}`);
console.log(`Number of guests in the second Guest List: ${guestLists.length}`);
console.log(`Number of guests in the third Guest List: ${moreGuest.length}`);
console.log(`Number of guests in the fourth Guest List: ${shrinkingGuestList.length}`);
