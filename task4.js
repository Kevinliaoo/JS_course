let end = prompt('Insert a number (smaller than 100): ');

end = parseInt(end);

for (let i = 0; i < 20; i++) {
	console.log(i);
	if (i === end) {
		break;
	}
}
