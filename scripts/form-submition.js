
var but = document.querySelector('.button-form-submittion');
but.onclick=
    function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.withCredentials = true;
        xmlhttp.open('POST', 'http://api.sendpulse.com/smtp/emails', true);
        xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status === 200) {
                alert('Mail sended!');
            }
        };
        xmlhttp.send(JSON.stringify(
            
        {"email":[{
            "key":"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjmWws6b8csUWLAHF/gKNEkbM4Vb6Zau79+VKudnnQ9pkELRd8bnJmMOwEZ8ltNBOUdP5c/hWEqZpO1U7YrX5CYNBD72diiOf5xEovpC7ABho6tFws0aOXD1atwhpJLFGPKYZxkY+VJ5aITxgqqQCHwMVLfJFAetkuRZcrg3XvbQIDAQAB",
            "pass":"biBQksngbrXKG64",
            "action":"send_email",
            "message":{
                "html" : '<p>'+document.getElementById('textarea_addition_info') +'</p>',
                "text" : document.getElementById('textarea_addition_info'),
                "encoding" : "utf8",
                "from" : {
                    "name" : document.getElementById('fname')+' '+ document.getElementById('lname'),
                    "email" : document.getElementById('email')
                }
            },
            "to" : [{ "email" : "darinamandarina97@gmail.com"  }]
        }]
        }));
    };


