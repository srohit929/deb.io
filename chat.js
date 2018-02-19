window.addEventListener("load", function(){
    // FIXES FOR COLOR PICKER
    document.getElementById('pickerMenuBody').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    document.getElementById('toggleStatusMenu').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Collapsing chat on nav click
    document.getElementById("navWrapper").addEventListener("click", minimizeChat);
    var minimize = document.getElementsByTagName('main')[0];
    
    function minimizeChat(event) {
        document.getElementById("navWrapper").classList.toggle('clicked');
        event.preventDefault();
        event.stopPropagation();
        minimize.classList.toggle('collapsed');
    }
    // ONLINE STATUS CHANGE BUTTON-MENU
    document.getElementById('yourStatus').addEventListener("click", showYourStatus);
    var statusMenu = document.getElementById('toggleStatusMenu');
    statusMenu.classList.add('collapsed');
    
    function showYourStatus(event) {
        
        event.preventDefault();
        event.stopPropagation();
        statusMenu.classList.toggle('collapsed');
    }
    // ONLINE STATUS COLOR OF USER
        var changeUserColor = document.getElementsByClassName('status');
       
        
        function changeOnlineStatus(event) {
            
            document.getElementById('yourStatus').style.backgroundColor = this.getAttribute("value");
            document.getElementById('yourStatus').style.borderColor = this.getAttribute("value");
        }
        
            for (var i = 0; i < changeUserColor.length; i++) {
                
                changeUserColor[i].addEventListener("click", changeOnlineStatus);
                
            }
        
    // Quasi sending message to contact

    let mmsg;
    let breply;
    let speech;
    let rreplay;
    document.getElementById("send-btn").addEventListener("click", sendMessage);
    function sendMessage() {
        if(document.getElementById("msg-text").value != '') {
            var newMsg = document.getElementById("msg-text").value;
            //console.log(newMsg);
            var messageIn = document.createTextNode(newMsg);
            var msgDiv = document.createElement("div");
            var msgSpan = document.createElement("span");
            msgSpan.appendChild(messageIn);
            msgDiv.appendChild(msgSpan);
            msgDiv.className += 'msg me';
            } else {
                return false;
            }
    // Background color change of new message ( if user has changed background via colorpicker )
        var bgColor = document.getElementById("navWrapper").style.backgroundColor;
        msgDiv.getElementsByTagName('span')[0].style.backgroundColor = bgColor;
        
        document.getElementById("messages").appendChild(msgDiv);
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
        document.getElementById("msg-text").value = "";
        mmsg = newMsg;

        let bot = new RiveScript();
        
        bot.loadFile("brain.rive", brainReady, brainError);

        function brainReady() {
            console.log('Chatbot ready!');
            bot.sortReplies();
            rreplay = bot.reply('local-user', mmsg);
            console.log(rreplay);
            
speech.setRate(0.6);
    speech.setPitch(0.1);            
            recieveMessage(rreplay);
        }

        function brainError() {
            console.log('Chatbot Error!');
        }    }


function recieveMessage(breply) {
        if(breply != '') {
            var newMsg = breply;
            ///console.log("hehehehe");
            var messageIn = document.createTextNode(newMsg);
            var msgDiv = document.createElement("div");
            var msgSpan = document.createElement("span");
            msgSpan.appendChild(messageIn);
            msgDiv.appendChild(msgSpan);
            msgDiv.className += 'msg him';
            } else {
                return false;
            }
    // Background color change of new message ( if user has changed background via colorpicker )
        var bgColor = document.getElementById("navWrapper").style.backgroundColor;
        msgDiv.getElementsByTagName('span')[0].style.backgroundColor = bgColor;
        
        document.getElementById("messages").appendChild(msgDiv);
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
        document.getElementById("msg-text").value = "";
    }

document.getElementById("emoji-btn").addEventListener("click", soundSystem);

function soundSystem() {
    speech = new p5.Speech();
    speech.setRate(0.6);
    speech.setPitch(0.1);
    speech.setVoice('Microsoft Zira - English (United States)');
    speech.speak(rreplay);
}
    // Quasi login lul
    document.getElementById("promptAnswer")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("promptButton").click();
    }
    // var userName = prompt("Please enter your user name.");
    document.getElementById("promptButton").addEventListener("click", quasiLogin);
    function quasiLogin() {
        document.getElementsByTagName('main')[0].style.display = 'block';
        var userName = document.getElementById('promptAnswer').value;
        document.getElementById("user-info-btn").innerHTML = userName;
        document.getElementById('messages').style.display = 'block';
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
        document.getElementById('promptWrapper').style.display = 'none';
    }
    
});


    var color = document.getElementById('color');
    var applyColor = document.getElementById('apply');
    
    // COLORPICKER TOGGLE
    var colorPickerBtn = document.getElementById('colorPickerBtn');
    
    /*colorPickerBtn.addEventListener('click', function(e){
        e.stopPropagation();
        document.getElementById('pickerMenuBody').style.display = "block";
    });*/
    
    document.getElementById('applyColor').addEventListener("click", function(e) {
        e.stopPropagation();
        document.getElementById('pickerMenuBody').style.display = "none";
    });
    
    // APPENDING USER INFO ON CLICK
            
    var focusedMSG = document.getElementById("msg-text");
    
    focusedMSG.addEventListener('click', scroolMSG);
    
    function scroolMSG() {

        if ( document.activeElement === focusedMSG ) {
            document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
        }
    }


});
