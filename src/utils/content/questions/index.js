import q10 from './q10';
import q20 from './q20';
// We split these files up just for easier finding of questions - limit at 10
// We combine each array into one giant array of objects so we can access that from the store.
const questions = [
  ...q10,
  ...q20,
];

export default questions;