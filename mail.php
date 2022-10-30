<?php

	$recepient = "rustamyanarsen@gmail.com";
	$sitename = "ArsenRustamyanPortfolio.ru";
	$name = trim($_POST["name"]);
	$email = trim($_POST["email"]);
	$message = trim($_POST["message"]);
	$messages = "Имя: $name \nКак связаться: $email \nСообщение: $message";

	$pagetitle = "Новая заявка с сайта \"$sitename\"";
	mail($recepient, $pagetitle, $messages, "Content-type: text/plain; charset=\"utf-8\" \n From: $recepient");
?>