window.addEventListener("message", receiveMessage, false);

function handleMessage(message)
{
    const parts = message.split(/(?<=\d)/);
    setTimeout(()=>{window.location.href = `index.html?lastScore=${parts[0].charAt(parts[0].length - 1)}&retriesLeft=${parts[1].charAt(parts[1].length - 1)}&bestScore=${parts[2].charAt(parts[2].length - 1)}`,3000});
}
function getNumericPart(str)
{
    return str.replace(/\D/g, '');
}
function SendMessageToReact(message)
{
    handleMessage(message);
}