const CP = require('node:child_process');
const { defaultTo } = require('lodash');

async function GET({ url }, { logger }) {
	const allowed = ['it-IT', 'en-EN'];

	const lang = defaultTo(url.searchParams.get('lang'), allowed[0]);

	const psScript = `Set-WinUserLanguageList -Force '${lang}'`;

	logger.info({ psScript });

	CP.spawn('powershell.exe',
		['-ExecutionPolicy', 'Bypass', '-NoExit', '-Command', psScript],
		{ stdio: 'ignore' }
	);

	const res = {
		magicNumber: 42,
	};

	return new Response(JSON.stringify(res));
}

exports.GET = GET;
