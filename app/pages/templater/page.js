'use strict';

function wrap( contents, context ) {
	context = Object.assign({
		pageTitle: "Space Theme",
	}, context || {} );

	return (
`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>${ context.pageTitle }</title>

	<!-- <link rel="stylesheet" href="fonts.css"> -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2:400,700,400italic,700italic|Advent+Pro:400,700,300">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="font-awesome.css">
	<link rel="stylesheet" href="theme.css">

	<!-- ****** faviconit.com favicons ****** -->
	<link rel="shortcut icon" href="./images/favicon/favicon.ico">
	<link rel="icon" sizes="16x16 32x32 64x64" href="./images/favicon/favicon.ico">
	<link rel="icon" type="image/png" sizes="196x196" href="./images/favicon/favicon-192.png">
	<link rel="icon" type="image/png" sizes="160x160" href="./images/favicon/favicon-160.png">
	<link rel="icon" type="image/png" sizes="96x96" href="./images/favicon/favicon-96.png">
	<link rel="icon" type="image/png" sizes="64x64" href="./images/favicon/favicon-64.png">
	<link rel="icon" type="image/png" sizes="32x32" href="./images/favicon/favicon-32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="./images/favicon/favicon-16.png">
	<link rel="apple-touch-icon" href="./images/favicon/favicon-57.png">
	<link rel="apple-touch-icon" sizes="114x114" href="./images/favicon/favicon-114.png">
	<link rel="apple-touch-icon" sizes="72x72" href="./images/favicon/favicon-72.png">
	<link rel="apple-touch-icon" sizes="144x144" href="./images/favicon/favicon-144.png">
	<link rel="apple-touch-icon" sizes="60x60" href="./images/favicon/favicon-60.png">
	<link rel="apple-touch-icon" sizes="120x120" href="./images/favicon/favicon-120.png">
	<link rel="apple-touch-icon" sizes="76x76" href="./images/favicon/favicon-76.png">
	<link rel="apple-touch-icon" sizes="152x152" href="./images/favicon/favicon-152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="./images/favicon/favicon-180.png">
	<meta name="msapplication-TileColor" content="#FFFFFF">
	<meta name="msapplication-TileImage" content="./images/favicon/favicon-144.png">
	<meta name="msapplication-config" content="./images/favicon/browserconfig.xml">
	<!-- ****** faviconit.com favicons ****** -->

	<script src="./vendor.js"></script>
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
