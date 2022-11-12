const sh3ll = require('shelljs');

// Script for: https://spotify-downloader.com/

/// Mandatory
const folder = 'folder-name';

sh3ll.cd(folder);
const lsRes = sh3ll.ls('*.mp3');

lsRes.forEach(item => {
	if (item.includes('SPOTIFY-DOWNLOADER.COM')) {
		let splitedItem = [];

		for (let i = item.length - 1; i > 0; i--) {
			if (item[i] === ']') break;
			splitedItem.push(item[i])
		}

		splitedItem.pop();
		const final = splitedItem.reverse().join('');

		sh3ll.mv(item, final)
	}
});