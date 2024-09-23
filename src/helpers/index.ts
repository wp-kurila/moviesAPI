export const getId = (query: string): string => {
	if (!query) return '';

	const searchParams = new URLSearchParams(query);
	const queryObject: Record<string, string> = {};
	for (const [key, value] of searchParams.entries()) {
		queryObject[key] = value;
	}

	return queryObject.id;
};
