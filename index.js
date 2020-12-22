const ChromecastAPI = require('chromecast-api');
var CronJob = require('cron').CronJob;

const client = new ChromecastAPI();

function runChime() {
	client.on('device', function (device) {
		if (device.friendlyName == 'Mini') {
			var mediaURL =
				'https://docs.google.com/uc?id=1FEhT6cr3UvaNnrg9qv7KDqHeitszRg6N';
			device.play(mediaURL, function (err) {
				if (!err) {
                    console.log("chime start");
                }
            });
            device.on('finished', function (){
                device.close();
                console.log("chime end");
            });
		}
	});
}

var job = new CronJob(
	'0 9/22 * * *',
	runChime(),
	null,
	true,
	'America/Chicago'
);