const log = document.getElementById('input');
const output = document.getElementById('output')
const cli = document.getElementById('commandline')
var control = 0
// 0 - command mode
// 1 - insert mode

document.addEventListener('keydown', logKey);

function logKey(e) {
    var regex = new RegExp("^[a-zA-Z0-9()\-+*/^.]");
    var key = String.fromCharCode(e.keyCode);
    if (regex.test(key)) {
        switch (control){
            case 0:
                cli.textContent += `${key}`.toLowerCase();
                break
            case 1:
                log.textContent += `${key}`.toLowerCase();
                break
        }
    }

    switch (e.keyCode){
        case 8:
            
            if (control == 1){
                if (e.ctrlKey){
                    log.textContent = " "
                }else{
                    //complex process but working
                    const text = log.textContent
                    const length = text.length
                    if (length > 0 || text != ":"){
                        var string = text.substring(0, length - 1)
                        log.textContent = string
                        console.log(string)
                    }else{
                        log.textContent = " "
                    }
                }
            }else{
                //complex process but working
                const text = cli.textContent
                const length = text.length
                if (length > 0){
                    var string = text.substring(0, length - 1)
                    cli.textContent = string
                    console.log(string)
                }else{
                    cli.textContent = " "
                }
            }
            break
        case 13:
            if (!control == 0)
            var answer = math.evaluate(log.textContent)
            output.textContent = answer
            console.log(answer)
            break
        case 32:
            log.textContent += " "
            break
        case 187:
            if (!control == 0)
            if (!e.shiftKey) break
            log.textContent += "+"
            break
        case 189:
            if (!control == 0)
            log.textContent += "-"
            break
        case 191:
            if (!control == 0)
            log.textContent += "/"
            break
    }
}