// Days
const days = require('./days');

console.log(`
*********************************************************\n
   *            *****      *****    ***    *****   ***** \n
  * *    ****  *     *    *     *  *   *  *     * *     *\n
 *   *  *    * *                * *     *       *       *\n
*     * *    * *           *****  *     *  *****   ***** \n
******* *    * *          *       *     * *             *\n
*     * *    * *     *    *        *   *  *       *     *\n
*     *  ****   *****     *******   ***   *******  ***** \n
*********************************************************
`);

for (let day in days) {
	console.log(
		`***** ${day[0].toUpperCase() + day.slice(1, 3)} ${day.slice(3)} *****`
	);
	console.log(`Puzzle 1: ${days[day].puzzle1()}`);
	console.log(`Puzzle 2: ${days[day].puzzle2()}`);
}
