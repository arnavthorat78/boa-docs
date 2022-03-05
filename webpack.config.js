const path = require("path");

const entryPath = (filename, extension = ".ts") => {
	return `./src/${filename}${extension}`;
};

module.exports = {
	mode: "development", // TODO Change this to 'production'
	entry: {
		index: entryPath("index"),
		"shared/admin-button": entryPath("shared/admin-button"),
		"docs/default-doc": entryPath("docs/default-doc"),
		"docs/parser-doc": entryPath("docs/parser-doc"),
		"docs/link-doc": entryPath("docs/link-doc"),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist/js"),
	},
	watch: true,
};
