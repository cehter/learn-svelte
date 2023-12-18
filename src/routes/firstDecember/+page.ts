export async function load({ fetch }) {
	const response = await fetch(`https://advent.sveltesociety.dev/data/2023/day-one.json`);
	const persons = await response.json();
	return { persons };
}
