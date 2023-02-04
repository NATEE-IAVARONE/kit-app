import CP from 'node:child_process';
import { defaultTo } from 'lodash-es';

export async function GET({ url }) {
	const allowed = ['it-IT', 'en-EN'];

	const lang = defaultTo(url.searchParams.get('lang'), allowed[0]);

	const psScript = `Set-WinUserLanguageList -Force '${lang}'`;

	console.log({psScript});

	CP.spawn('powershell.exe',
		['-ExecutionPolicy', 'Bypass', '-NoExit', '-Command', psScript],
		{ stdio: 'ignore' }
	);

	const res = {
		magicNumber: 42,
	};

	return new Response(JSON.stringify(res));
}
