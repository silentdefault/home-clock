const ChromecastAPI = require('chromecast-api');
var CronJob = require('cron').CronJob;

function runChime(sound) {
	const client = new ChromecastAPI();
	client.on('device', function (device) {
		if (device.friendlyName == 'Mini') {
			console.log('Shiming');
			device.play(
				sound,
				function (err) {
					if (!err) {
						console.log('chime start');
					}
				}
			);
			device.on('finished', function () {
				device.close();
				console.log('chime end');
			});
		}
	});
}
var job = new CronJob(
	'0 8-22 * * *',
	function () {
		runChime('https://docs.google.com/uc?id=1FEhT6cr3UvaNnrg9qv7KDqHeitszRg6N');
	},
	null,
	true,
	'America/Chicago'
);
