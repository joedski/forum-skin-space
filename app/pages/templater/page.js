'use strict';

function wrap( contents, context ) {
	context = context || {
		pageTitle: "Space Theme"
	};

	return (
`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>${ context.pageTitle }</title>
	<link rel="stylesheet" href="./fonts.css" />
	<link rel="stylesheet" href="./font-awesome.css" />
	<link rel="stylesheet" href="./theme.css" />
	<script src="./theme.js"></script>
</head>
<body>
	${ contents }
</body>
</html>`
	);
}

export default {
	wrap
};
