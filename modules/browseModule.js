let mod = $jSpaghetti.module("browse")
mod.config.debugMode = true

//*****************************************************//
// SEQUENCES INSTRUCTIONS ↓ ↓ ↓
//_____________________________________________________//

mod.sequence("browse-on-internet").instructions = [
    {"start":             ["get-first-links"]},
    {"start-browsing":    ["access-next-link", {"exit": "!*.isThereLinks"}, "scrap-page-links", {"jumpif":[1, "start-browsing"]}]}
]

//*****************************************************//
// PROCEDURES ↓ ↓ ↓
//_____________________________________________________//

mod.procedure("get-first-links", function(shared){
    shared.links = ["https://www.google.com.br","https://www.mercadolivre.com.br"]
    return true
})

mod.procedure("access-next-link", function(shared, hooks){
    var link = shared.links.shift()
    shared.isThereLinks = false
    hooks.next()
    if(link){
        shared.isThereLinks = true
        window.location.replace(link)
    } else {
        console.warn("no links")
    }
})

mod.procedure("scrap-page-links", function(shared){
    if(shared.isThereLinks){
        var links = document.getElementsByTagName('a')
        console.warn(`${links.length} links captured`)
        Array.prototype.forEach.call(links, (l) => {
            shared.links.push(l.href)
        })
    } 
    return true
})