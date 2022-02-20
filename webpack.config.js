const path = require("path");

const entryPath = (filename, extension = ".ts") => {
	return `./src/${filename}${extension}`;
};

module.exports = {
	mode: "development", // TODO Change this to 'production'
	entry: {
		index: entryPath("index"),
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
