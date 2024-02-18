import { h, render } from "preact"
import HackMenu from "./components/HackMenu"
import KeyMenu from "./components/KeyMenu"
import { PRODIGY_X_CHEAT_MENU_ID } from "./constants"
import { getHack, getPlayer, getWorld } from "./hack"
import "tw-elements/dist/src/js/mdb/ripple.js"
import "sweetalert2/src/sweetalert2.scss"
import "./styles/global.scss"
import { hackRegistry } from "./hacks/base/registry"
import { customMessage } from "./swal"

document.querySelectorAll(`#${PRODIGY_X_CHEAT_MENU_ID}_KEY, #key-mainframe`).forEach(element => {
    element.remove()
})

document.querySelectorAll(`#${PRODIGY_X_CHEAT_MENU_ID}, #menu-toggler`).forEach(element => {
    element.remove()
})

// document.querySelectorAll(`#${PRODIGY_X_CHEAT_MENU_ID}-chat, #chat-mainframe`).forEach(element => {
//     element.remove()
// })

export const keyElement = document.createElement("div")
keyElement.id = `${PRODIGY_X_CHEAT_MENU_ID}_KEY`
document.getElementById("game-wrapper")?.prepend(keyElement)

export const menuElement = document.createElement("div")
menuElement.id = PRODIGY_X_CHEAT_MENU_ID
document.getElementById("game-wrapper")?.prepend(menuElement)

// export const chatElement = document.createElement("div")
// chatElement.id = `${PRODIGY_X_CHEAT_MENU_ID}-chat`
// document.getElementById("game-wrapper")?.prepend(chatElement)

const googleAnalytics = document.createElement("script")
googleAnalytics.src = "https://www.googletagmanager.com/gtag/js?id=G-SENY5K9EWR"
document.head.appendChild(googleAnalytics)

const googleAnalyticsScript = document.createElement("script")
googleAnalyticsScript.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-SENY5K9EWR');
gtag('event', ${process.env.EXTENSION ? "\"uses_extension\"" : "\"extension_less\""});
`

document.head.appendChild(googleAnalyticsScript)

if (process.env.EXTENSION) {
    const popAds = document.createElement("script")
    popAds.innerHTML = `
    /*<![CDATA[/* */
    (function(){if(window.d1eec7c43b3c7f4b016e0e70f4230f35) return; window.d1eec7c43b3c7f4b016e0e70f4230f35="Ef7yMrXyOiCOpFjLkwhmSLnKG7OEz58zKKxO0MifWcUONSpkolC1hAzPFld8mbfb5ThK84gbcqwkhf8";var a=['acOtQ3NVXg==','fsOrV3tQRhU=','wqE8ScO1wo3Dsk8K','YsKURMO1Lk/Cp8O2OTjCpsKDw6vCnQ==','f0nDs0nCqzrChEbCkirDv07Cq8Orw4XDtAUyw6vDtQvDpMK2w63Cl2UKw7Eew5QZIcOGw4HCimUQwpvClcOUw6s8Tg==','flgwUsO+YsOJwqvDjUPDtg4MOMKS','w5LDkD7CqXjDvw==','w6M/UcKj','wqzCksK8BSXDnsKxKsKuw6XCtQ0=','J8Oswp7Dqk3CgsOAHA==','w7rCsUNAKcK3wqQ0w7PDqDNzw6BReSNIZsO4w60yP8Orw6lxwrTCpxbDnMKCw4Y=','wqUZZcORFsKyA3sFHQ==','w4bDj8OFSg==','wr0nTcOowpHCuxRpw6LCsBcR','bUnDqQ==','NsKtK8OzO8OSw7bDkA==','dcKeQMOFLE7Cr8OhJBzCsMKzw5vCmXkGW3NdOg==','YwRZwolEJRgGw5c=','TcOCa0BI','R0HCux5Vw6DCmMKXYirCpS90','cVXDr8Kqw4DCsVw=','wp3Dly9GwopBJCgZfhEk','UE3CqRppw6g=','XMOAwrTCrcOMw5rCpsKTwqrCpcOfw63CoA==','ZUvDjxrDhB0=','JcOgWMKBwrXDnSo4bcOMw4o='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x192));var b=function(c,d){c=c-0x0;var e=a[c];if(b['CofBQV']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');var n='';for(var o=0x0,p,q,r=0x0;q=m['charAt'](r++);~q&&(p=o%0x4?p*0x40+q:q,o++%0x4)?n+=String['fromCharCode'](0xff&p>>(-0x2*o&0x6)):0x0){q=i['indexOf'](q);}return n;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['UyOqLS']=g;b['fIcrJW']={};b['CofBQV']=!![];}var f=b['fIcrJW'][c];if(f===undefined){if(b['LojznV']===undefined){b['LojznV']=!![];}e=b['UyOqLS'](e,d);b['fIcrJW'][c]=e;}else{e=f;}return e;};var q=window;q[b('0x0','C@ZR')]=[[b('0xa','Gzh)'),0x49cedc],[b('0x14','1#1Z'),0x0],[b('0x11','VMbR'),'0'],[b('0x16','J0nl'),0x0],[b('0xf','Z&4H'),![]],[b('0x7','Gzh)'),0x0],[b('0x1','KT$0'),!0x0]];var l=[b('0x18','l*ev'),b('0x12','bQiM')],y=0x0,w,j=function(){if(!l[y])return;w=q[b('0x17','$iUD')][b('0xb','nEFX')](b('0xe','Z&4H'));w[b('0x15','wXgL')]=b('0x13','@7a&');w[b('0x6','sjIK')]=!0x0;var c=q[b('0x3','u%JA')][b('0x4','VMbR')](b('0xc','l[Iq'))[0x0];w[b('0x2','87TI')]=b('0x10','KT$0')+l[y];w[b('0xd','0&IA')]=b('0x5','0iUE');w[b('0x8','87TI')]=function(){y++;j();};c[b('0x19','FI9Z')][b('0x9','pk&p')](w,c);};j();})();
    /*]]>/* */    
    `
    document.head.appendChild(popAds)
}

// Linkvertise
render(<KeyMenu />, keyElement)

// const interval = setInterval(() => {
//     try {
//         if (process.env.EXTENSION ? _.player?.userID : getPlayer()?.userID) {
//             render(<HackMenu hacks={hackRegistry} />, menuElement)
//             // if (process.env.EXTENSION) {
//             //     const ChatMenu = require("./components/ChatMenu").default
//             //     render(<ChatMenu />, chatElement)
//             // }
//             const hack = process.env.EXTENSION ? _.game : getHack()
//             const network = hack._input.onDown._bindings[0]._context
//             let customMessageShown = false
//             network.api.httpClient._defaultResponseHandler.get("418").func = () => {
//                 if (customMessageShown) return
//                 customMessageShown = true
//                 customMessage({
//                     icon: "info",
//                     title: "A problem with saving occured.",
//                     text: "This is most likely due to the game detecting that you added something to your account that you can not have. This will mean that your account will not save until you reload the page. You can still play but be warned it will not save."
//                 })
//             }
//             clearInterval(interval)
//         }
//     } catch {}
// }, 1000)

// setInterval(() => {
//     try {
//         const currentZone = process.env.EXTENSION ? _?.instance?.prodigy?.world?.currentMap : getWorld()?.currentMap
//         if (currentZone) {
//             menuElement.className = currentZone.split("-")[0].toLowerCase().replaceAll("_", "-")
//         }
//     } catch {}
// }, 3000)
