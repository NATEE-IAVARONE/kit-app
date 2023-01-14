export async function GET() {
	const res = {
		magicNumber: 42,
	};

	return new Response(JSON.stringify(res));
}
