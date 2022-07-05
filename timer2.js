const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const timerInput = function () {
	rl.question(
		"Press 'b' to beep instantly, input a number (1 - 9) for a delay, 'exit' to exit.\n",
		(answer) => {
			if (answer === "exit") return rl.close();
			if (answer === "b") {
				rl.write("\x07\r");

				// rl.write("\x07");
				timerInput();
			}
			if (answer > 0 && answer < 10) {
				rl.write(`setting timer for ${answer} seconds...\n`);
				setTimeout(() => {
					rl.write("\x07\r");
					// rl.write("\x07");
					timerInput();
				}, answer * 1000);
			}
		}
	);
};
timerInput();
