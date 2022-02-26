/**
 * A blueprint interface for the return object of `checkQueryString`.
 */
interface QueryStringReturn {
	exists: boolean;
	data?: string | undefined;
}

/**
 * Check if a query string exists or not. If it does, it will return the value as well.
 *
 * @param key The key to search for. By default, this is `id`.
 * @returns An object with an `exists` property and a `data` property, if available.
 */
const checkQueryString = (key = "id"): QueryStringReturn => {
	const urlParams = new URLSearchParams(location.search);
	const myParam = urlParams.get(key);

	return myParam ? { exists: true, data: myParam } : { exists: false };
};

/**
 * Interface for a common document object retrieved from Firestore.
 */
interface Document {
	content: string;
	description: string;
	displayName: string;
	id: string;
	num: number;
}

export { checkQueryString, Document };
