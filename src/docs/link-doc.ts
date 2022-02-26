import { checkQueryString, Document } from "./parser-doc";

const webpageTitle = document.querySelector("title")!;
const title = document.querySelector(".title")!;
const description = document.querySelector(".description")!;
const content = document.querySelector(".content")!;

const queryString = checkQueryString("id");
const docId = queryString.exists ? queryString.data! : null;

const arr: any[] = JSON.parse(localStorage.getItem("docs")!);
if (docId) {
	arr.forEach((value: Document) => {
		if (value.id === docId) {
			webpageTitle.innerHTML = `Boa Documentation | ${value.displayName}`;
			title.innerHTML = value.displayName;
			description.innerHTML = value.description;
			content.innerHTML = value.content;
		}
	});
}
