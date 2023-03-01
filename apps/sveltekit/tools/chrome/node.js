const CP = require('node:child_process');
const robot = require('@jitsi/robotjs');

async function GET({ url }, { logger }) {
	const urlParam = url.searchParams.get('url') ?? '';
	const modConf = {
		exe: 'c:/PROGRA~1/Google/Chrome/Application/chrome',
		flags: [
			'--force-dark-mode',
			'--disable-web-security',
			'--user-data-dir=C:/chromesession',
			'--ignore-certificate-errors',
		],
	};
	
	const psScript = `${modConf.exe} ${modConf.flags.join(' ')} ${urlParam}`;

	logger.info({ psScript });

	CP.spawn('powershell.exe',
		['-ExecutionPolicy', 'Bypass', '-NoExit', '-Command', psScript],
		{ stdio: 'ignore' }
	);

	robot.moveMouse(100, 100);

	const res = {
		magicNumber: 42,
	};

	return new Response(JSON.stringify(res));
}

exports.GET = GET;
