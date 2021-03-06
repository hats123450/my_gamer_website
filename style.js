body {
    margin: 0;
    padding: 0;
}

#header {
height: 200px;
background: url('header.jpg') repeat-x;
}

#content {
height: 300px;
background-color: #B0E0E6;
border: 1px solid #999;
font-size: 12pt;
}

#footer {
height: 200px;
background: url('footert.jpg') repeeat-x;
text-align: center;
font-size: 14pt;
}

#content p {
margin: 20px;
}

.myButton {
-moz-box-shadow:inset 0px 1px 0px 0px #54a3f7;
-webkit-box-shadow:inset 0px 1px 0px 0px #54a3f7;
box-shadow:inset 0px 1px 0px 0px #54a3f7;
background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #007dc1), color-stop(1, #0061a7));
background:-moz-linear-gradient(top, #007dc1 5%, #0061a7 100%);
background:-webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%);
background:-o-linear-gradient(top, #007dc1 5%, #0061a7 100%);
background:-ms-linear-gradient(top, #007dc1 5%, #0061a7 100%);
background:linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0);
background-color:#007dc1;
-moz-border-radius:3px;
-webkit-border-radius:3px;
border-radius:3px;
border:1px solid #124d77;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:arial;
font-size:13px;
padding:6px 24px;
text-decoration:none;
text-shadow:0px 1px 0px #154682;
}
 
.myButton:hover {
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0061a7), color-stop(1, #007dc1));
    background:-moz-linear-gradient(top, #0061a7 5%, #007dc1 100%);
    background:-webkit-linear-gradient(top, #0061a7 5%, #007dc1 100%);
    background:-o-linear-gradient(top, #0061a7 5%, #007dc1 100%);
    background:-ms-linear-gradient(top, #0061a7 5%, #007dc1 100%);
    background:linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0061a7', endColorstr='#007dc1',GradientType=0);
    background-color:#0061a7;
}
 
.myButton:active {
    position:relative;
    top:1px;
}
 
.wrapper{
    width: 640px;
    height: 480px;
    margin: 10px auto;
    }
     
.left_right{
    position: absolute;
    display: none;
    cursor: pointer;
    margin: -288px 0 0 10px;
}


