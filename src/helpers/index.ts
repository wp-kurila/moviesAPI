export const getId = (query: string): string => {
	if (!query) return '';

	return query.split('=')[1];
};
