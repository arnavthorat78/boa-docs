import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy, doc } from "firebase/firestore";
import checkQueryString from "./parser-doc";

// Only run everything if there is no ID query.
if (!checkQueryString().exists) {
	/// GET DATA ///

	/**
	 * The configuration object to initialize Firebase.
	 *
	 * _Note: This should be used with the `initializeApp` method._
	 */
	const firebaseConfig = {
		apiKey: "AIzaSyDo31KmWfV73Z7v2dIVT4IlhNQyRYdL2HM",
		authDomain: "boa-docs.firebaseapp.com",
		projectId: "boa-docs",
		storageBucket: "boa-docs.appspot.com",
		messagingSenderId: "10974677416",
		appId: "1:10974677416:web:6e69222e07b350d2e3b59d",
	};

	// Initialize the Firebase application
	initializeApp(firebaseConfig);

	// Initialize services
	/**
	 * Initialize Firestore. Uses `getFirestore`.
	 */
	const db = getFirestore();

	// Collection reference
	/**
	 * Get the collection for the documentation information. Uses `collection`.
	 */
	const colRef = collection(db, "docs");
	const q = query(colRef, orderBy("num", "asc"));

	// Get collection data
	if (!localStorage.getItem("docs")) {
		// Only get data if the data isn't in local storage, to save the amount of reads and writes.
		getDocs(q)
			.then((snapshot) => {
				/**
				 * The documentation information.
				 */
				let docs: any[] = [];
				snapshot.docs.forEach((doc) => {
					docs.push({ ...doc.data(), id: doc.id });
				});

				// Set the information in local storage.
				localStorage.setItem("docs", JSON.stringify(docs));

				// Inform the user that the page will refresh.
				alert("This page will refresh to update data.");

				// Reload the current page to apply the changes to the DOM.
				location.reload();
			})
			.catch(console.log);
	}

	/// SHOW DOCUMENTS IN DOM ///

	/**
	 * The links to display on the home documents page.
	 */
	const links = document.querySelector(".links")!;

	/**
	 * Get the documents from local storage, and reset the links.
	 */
	const documents: any[] = JSON.parse(localStorage.getItem("docs")!);
	links.innerHTML = "";

	/**
	 * Make a new HTML card (the HTML code).
	 *
	 * @param title The title to display.
	 * @param description The description/subtitle to display.
	 * @param content The content to display. Please make this short.
	 * @returns The HTML card.
	 */
	const HTMLCard = (title: string, description: string, id: string) => {
		return `<div class="card m-2 shadow-sm">
		<div class="card-body">
			<h4 class="card-title">${title}</h4>
			<h6 class="card-subtitle mb-2 text-muted">${description}</h6>
			<a href="?id=${id}" class="card-link">Read More</a>
		</div>
	</div>`;
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
	documents.forEach((document: Document) => {
		links.innerHTML += HTMLCard(document.displayName, document.description, document.id);
	});

	/// REFRESH DATA ///

	const refreshButton: HTMLButtonElement = document.querySelector(".update-data")!;

	refreshButton.addEventListener("click", () => {
		localStorage.removeItem("docs");

		// Inform the user that the page will refresh.
		alert("This page will refresh to update data. Note: It may refresh twice.");

		// Reload the current page to apply the changes to the DOM.
		location.reload();
	});

	// const arr: any[] = JSON.parse(localStorage.getItem("docs")!);
	// arr.forEach((value) => {
	// 	console.log(value.id === "1GLoVC8OeBgN2BzUYWES");
	// });
}
