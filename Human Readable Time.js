function humanReadable (seconds) {
    return(`${(Math.floor(seconds/3600)).toString().length==1?"0"+(Math.floor(seconds/3600)):(Math.floor(seconds/3600))}:${(Math.floor(seconds%3600/60)).toString().length==1?"0"+(Math.floor(seconds%3600/60)):(Math.floor(seconds%3600/60))}:${(((seconds%3600%360)%60).toString().length==1?"0"+((seconds%3600%360)%60):((seconds%3600%360)%60))}`)
}