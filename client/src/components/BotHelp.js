import React from 'react'
import imghelp from '../images/help.jpg'
import css from '../css/Help.css'
export default function BotHelp() {
   
  return (
    <>
    <div className="help">
    <a href="https://mediafiles.botpress.cloud/ea45aba3-4333-4cfc-b4f5-ee7dc3e853ed/webchat/bot.html" target="_blank">
        <img src={imghelp} alt="BOT-HELP"></img></a>
        </div>
    </>
  )
}
