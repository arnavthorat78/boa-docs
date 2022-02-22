import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, DocumentData } from "firebase/firestore";

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

// Get collection data
if (!localStorage.getItem("docs")) {
	// Only get data if the data isn't in local storage, to save the amount of reads and writes.
	getDocs(colRef)
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
		})
		.catch(console.log);
}
