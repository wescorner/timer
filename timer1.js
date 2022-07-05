const args = process.argv.slice(2);
const unsorted = [];
for (const arg of args) {
	if (arg >= 0 && !isNaN(arg)) {
		unsorted.push(parseInt(arg));
	}
}
const sorted = unsorted.sort((a, b) => a - b);
for (const number of sorted) {
	setTimeout(() => {
		process.stdout.write("\x07");
	}, number * 1000);
}
