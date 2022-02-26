import showdown from "showdown";
import { checkQueryString, Document } from "./parser-doc";

/**
 * The title of the webpage shown in the tab.
 */
const webpageTitle = document.querySelector("title")!;
/**
 * The title displayed on the webpage.
 */
const title = document.querySelector(".title")!;
/**
 * The description displayed on the webpage.
 */
const description = document.querySelector(".description")!;
/**
 * The content displayed on the webpage.
 */
const content = document.querySelector(".content")!;

/**
 * The query string from the `id`.
 */
const queryString = checkQueryString("id");
/**
 * The string of the ID. It can either be a `string` or `null`.
 */
const docId = queryString.exists ? queryString.data! : null;

/**
 * The documentss from `localStorage`.
 */
const arr: any[] = JSON.parse(localStorage.getItem("docs")!);

// If there is an ID...
if (docId) {
	// Loop over each document...
	arr.forEach((value: Document) => {
		// If the current document is equal to the query string ID...
		if (value.id === docId) {
			/**
			 * A new Showdown converter with some default options, and some from Firebase.
			 */
			const converter = new showdown.Converter({
				smartIndentationFix: true,
				openLinksInNewWindow: true,
				noHeaderId: true,
				...value.contentOptions,
			});

			// Set the document to display everything
			webpageTitle.innerHTML = `Boa Documentation | ${value.displayName}`;
			title.innerHTML = value.displayName;
			description.innerHTML = value.description;
			content.innerHTML = converter.makeHtml(value.content);
		}
	});
}
