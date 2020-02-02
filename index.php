<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins&display=swap">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script defer src="http://52.6.55.163:3000/socket.io/socket.io.js"></script>
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<script src="https://kit.fontawesome.com/426991ed3e.js" crossorigin="anonymous"></script>
	<script defer type="text/javascript" src="script.js"></script>
</head>
<body class = "mainbody">



	<div id="container">
		<div id="navigation">
			<div class="backlink"><i class="fas fa-times" ></i></div> 
			<div id="developer">
				<div id="demimgwrapper">
					<div id="developerImage">
					
					</div>
				</div>
				<div id="devname">
					Developed By
					<h3>Riad Hossain</h3>
				</div>
			</div>				
			<div id="documents" >
				<p class="link"><i class="far fa-file-alt"></i><span class="point"></span>Shared Documents</p> 
			</div>
			<div id="images" >	
				<p class="link"><i class="far fa-file-image"></i><span class="point"></span>Shared Images</p>	
			</div>	
			<div id="resources" >
				<p class="link"><i class="fab fa-google-drive"></i><span class="point"></span>Resources</p>
			</div>
			<div id="job_news" >
				<p class="link"><i class="far fa-newspaper"></i><span class="point"></span>Job News</p>
			</div>
			<div class="logout"><i class="fas fa-sign-out-alt"></i>Logout</div>
		</div>
		<div id="people" >
			<div class="backlink"><i class="fas fa-times" ></i></div>
			<div class="frndlist">
				<h3><i class="fas fa-users"></i>Friends<i class="fas fa-chevron-down Down"></i></h3>
				<p>60 members</p>
				<div id="searchBox">
					<input type="text" name="" placeholder="Search a friend...">
					<i class="fas fa-search"></i>
				</div>
			</div>
			<div class="frnd">
				<div class="frndimg">
				</div>	
				<div class="frndname">
					<p>Riad Hossain</p>
					<p id="frndappr">Last seen 12.34pm</p>
				</div>
			</div>
			<div class="frnd">
				<div class="frndimg">
				</div>	
				<div class="frndname">
					<p>Riad Hossain</p>
					<p id="frndappr">Last seen 12.34pm</p>
				</div>
			</div>
			<div class="frnd">
				<div class="frndimg">
				</div>	
				<div class="frndname">
					<p>Riad Hossain</p>
					<p id="frndappr">Last seen 12.34pm</p>
				</div>
			</div>
			<div class="frnd">
				<div class="frndimg">
				</div>	
				<div class="frndname">
					<p>Riad Hossain</p>
					<p id="frndappr">Last seen 12.34pm</p>
				</div>
			</div>
			<div class="frnd">
				<div class="frndimg">
				</div>	
				<div class="frndname">
					<p>Riad Hossain</p>
					<p id="frndappr">Last seen 12.34pm</p>
				</div>
			</div>

		</div>
		<div id="chatbody" class="activate">
			<div class=" menubar"><i class="fas fa-ellipsis-h menubar"></i></div> 
			<div id="chat_header">
				
				<button id="newmessege" >
					New Messages
				</button>
				<ul id="buttons">
					<li class="help_icons" style="color:#2C3A47"><i class="fas fa-phone-square-alt"></i></li>
					<li class="help_icons" style="color:#2C3A47"><i class="fas fa-paperclip"></i></li>
					<li class="help_icons" style="color:#2C3A47"><i class="fas fa-microphone-alt"></i></li>
				</ul>
			</div>
			<div id="messages">
				<div class="msg_row sender_msg">
					<div class="msg_content">
						<div class="sender_img"></div>
						<div class="msg_txt">So nice of you.I would love to help .It will be a greate pleasure for me to be a part of your works.
						</div>
						<div class="msg_time">16 apr</div>
					</div>
				</div>
				<div class="msg_row my_msg">
					<div class="msg_content">
						<div class="msg_txt">Very sweet of you</div>
						<div class="msg_time">16 apr</div>
					</div>
				</div>
			</div>
			
			<form id="msg_typesection">
				<ul id="msg_pins">
					<li class="pin_icons"><i class="far fa-grin-beam"></i></li>
					<li class="pin_icons"><i class="far fa-images"></i></li>
				</ul>
				<textarea id="msg_input" name="message" rows="" cols="40" rows="40" placeholder="Write a message..."></textarea>
				<button id="send"><i class="fas fa-paper-plane"></i></button>
			</form>
			
		</div>
	</div>
	<div class="menu">
		<i class="fas fa-times"></i>
		<ul>
			<li class="menu_link">Friends</li>
			<li class="menu_link">Department</li>
		</ul>
	</div>



</body>
</html>
