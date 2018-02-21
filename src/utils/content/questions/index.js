import q10 from './q10.json';
import q20 from './q20.json';


// We split these files up just for easier finding of questions - limit at 10
// We combine each array into one giant array of objects so we can access that from the store.
const questions = {
  ...q10,
  ...q20,
};
console.log(questions)
export default questions;