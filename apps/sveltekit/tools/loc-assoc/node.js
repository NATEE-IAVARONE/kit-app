const CP = require('node:child_process');

const mockedData = {
	urls: [
		"https://rxr-api-sitenv-pre-eastus.walgreens.com/v1/devenv1/testlocation",
		"https://rxr-api-sitenv-pre-eastus.walgreens.com/v1/devqe/testlocation",
	],
	temp: [

		{ "locationCode": "59262", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123456081", "username": "jmmarks"  },
	],
	map: [
		{ "locationCode": "59262", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123458688", "username": "jmmarks"  },
		{ "locationCode": "59347", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123457264", "username": "njbergma" },
		{ "locationCode": "59352", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123458688", "username": "mbsommer" },
		{ "locationCode": "59262", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123461892", "username": "bljason"  },
		{ "locationCode": "59262", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123465808", "username": "ajwright" },
		{ "locationCode": "59347", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123465096", "username": "sfsmith"  },
		{ "locationCode": "59262", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123466876", "username": "wbruther" },
		{ "locationCode": "59347", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123466520", "username": "hmroosev" },
		{ "locationCode": "59352", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123466164", "username": "nlmonroe" },
		{ "locationCode": "59262", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123472216", "username": "fwmiller" },
		{ "locationCode": "59262", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123467944", "username": "athenn01" },
		{ "locationCode": "59347", "locationType": "store", "workstationId": "pvr-1", "testEmployeeNumber": "123467588", "username": "gwthomas" },
	],
};

async function GET({ url }, { logger }) {
	const urlParam = url.searchParams.get('url') ?? '';
	const data = mockedData;

	for (const body of data.map) {
		logger.info(`Associating ${ body.username } to ${ body.locationCode }`);

		await associate(body);
	}

	async function associate(body) {
		for (const url of data.urls) {
			const request = {
				method: 'PUT',
				body: JSON.stringify(body),
				headers: { 'Content-Type': 'application/json' }
			};

			logger.info('fetch', { url, request });
			// await D.fetch(
			// 	url,
			// 	{
			// 		method: 'PUT',
			// 		body: JSON.stringify(body),
			// 		headers: { 'Content-Type': 'application/json' }
			// 	}
			// ).then(res => res.text());
		}
	}

	const res = {
		magicNumber: 42,
	};

	return new Response(JSON.stringify(res));
}

exports.GET = GET;
