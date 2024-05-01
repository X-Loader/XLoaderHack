import { h, render } from "preact"
import HackMenu from "./components/HackMenu"
import { PRODIGY_X_CHEAT_MENU_ID } from "./constants"
import { getHack, getPlayer, getWorld } from "./hack"
import "tw-elements/dist/src/js/mdb/ripple.js"
import "sweetalert2/src/sweetalert2.scss"
import "./styles/global.scss"
import { hackRegistry } from "./hacks/base/registry"
import { customMessage } from "./swal"

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

// const googleAnalytics = document.createElement("script")
// googleAnalytics.src = "https://www.googletagmanager.com/gtag/js?id=G-SENY5K9EWR"
// document.head.appendChild(googleAnalytics)

// const googleAnalyticsScript = document.createElement("script")
// googleAnalyticsScript.innerHTML = `window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// gtag('config', 'G-SENY5K9EWR');
// gtag('event', ${process.env.EXTENSION ? "\"uses_extension\"" : "\"extension_less\""});
// `

// document.head.appendChild(googleAnalyticsScript)

if (process.env.EXTENSION) {
    const popAds = document.createElement("script")
    popAds.src = "https://jyzkut.com/p/waWQiOjExODAyMzYsInNpZCI6MTM0NDIwMywid2lkIjo1NjYxOTMsInNyYyI6Mn0=eyJ.js"
    document.body.append(popAds)
    const popAds2 = document.createElement("script")
    popAds2.src = "https://jyzkut.com/p/waWQiOjExODAyMzYsInNpZCI6MTM0NDIwMywid2lkIjo1NjYxOTMsInNyYyI6Mn0=eyJ.js"
    document.body.append(popAds2)
}

const interval = setInterval(() => {
    try {
        if (process.env.EXTENSION ? _.player?.userID : getPlayer()?.userID) {
            render(<HackMenu hacks={hackRegistry} />, menuElement)
            // if (process.env.EXTENSION) {
            //     const ChatMenu = require("./components/ChatMenu").default
            //     render(<ChatMenu />, chatElement)
            // }
            const hack = process.env.EXTENSION ? _.game : getHack()
            const network = hack._input.onDown._bindings[0]._context
            let customMessageShown = false
            network.api.httpClient._defaultResponseHandler.get("418").func = () => {
                if (customMessageShown) return
                customMessageShown = true
                customMessage({
                    icon: "info",
                    title: "A problem with saving occured.",
                    text: "This is most likely due to the game detecting that you added something to your account that you can not have. This will mean that your account will not save until you reload the page. You can still play but be warned it will not save."
                })
            }
            clearInterval(interval)
        }
    } catch {}
}, 1000)

setInterval(() => {
    try {
        const currentZone = process.env.EXTENSION ? _?.instance?.prodigy?.world?.currentMap : getWorld()?.currentMap
        if (currentZone) {
            menuElement.className = currentZone.split("-")[0].toLowerCase().replaceAll("_", "-")
        }
    } catch {}
}, 3000)
