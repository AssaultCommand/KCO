<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
		<meta name="title" content="Amsterdam Audio Tour by KCO">
		<meta name="description" content="Tour through Amsterdam in a fun, interactive and immersive way.">
		<meta name="keywords" content="Amsterdam, tour, audio, tourist">
		<meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'>
		<meta name="theme-color" content="#C51A1A">
		<title>Amsterdam Audio Tour</title>
		<link rel="shortcut icon" type="image/x-icon" href="images/static/favicon.ico">
		<link rel="stylesheet" href="assets/style.css" type="text/css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script src="assets/source.js" type="text/javascript"></script>
	</head>
	<body>
		<div class="container">
			<header>
				<div class="buttonback"></div>
					<h1 class="pagetitle">Amsterdam Tour</h1>
				<div class="buttoninfo"></div>
			</header>
			<nav>
				<a class="pagenav activetab" href="tour">Tour</a>
				<a class="pagenav" href="nearby">Nearby</a>
			</nav>
			<section class="view">
				<?php
					switch ($GET_['page']) //Verify input for page loading
					{
						case 'nearby':
							$page = 'page-nearby';
							break;

						case 'details':
							$page = 'page-details';
							break;

						case 'tour':
							$page = 'page-tour';
							break;

						case 'details-tour':
							$page = 'page-details-tour';
							break;

						case 'help':
							$page = 'page-help';
							break;
						
						default:
							$page = '404';
							break;
					}

					include $page . '.php'; //Include the page in the page view
				?>
			</section>
	</body>	
</html>