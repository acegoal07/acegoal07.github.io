<div align="center"> 
    <img src='/Resources/Pictures/Sierrapfp.webP' alt="acegoal07" width=200px height=200px/>
</div>
<h3 align="center">Sierra</h3>
<p align="center">
    <a href="#about">About</a> &#xa0; | &#xa0; 
    <a href="#commands">Commands</a> &#xa0; | &#xa0; 
    <a href="#dependencies">Dependencies</a> &#xa0; | &#xa0; 
    <a href="https://github.com/acegoal07" target="_blank">Author</a>
</p>

---

<h1 id="about">About</h1>
Sierra is a multi purpose discord bot and is a small time projects which is still a working progress meaning more commands are being add and things are subject to change
<br><br>
Sierra does support slash commands but most of them are not finished yet so only a small amount are available to the public
<br><br>
You can find the Discord.js documentation <a href="https://discord.js.org/#/docs/main/stable/general/welcome">here</a> which has details on how to use Discord.js to create your own bot you can also find Discord.js guide here which shows in more depth how to work with Discord.js <a href="https://discordjs.guide/#before-you-begin">here</a>
<br><br>

```md
Current Version: 2.3.1
Discord.js Version: 13.3.1
Prefix: ;
```
<h1 id="commands">Commands</h1>
<h3>General:</h3>

|Command|Description|
|-------|-----------|
;help|This command will display all of the commands the bot has corresponding to the section you choose
;serverinfo|This server will show all the info about the server you will need to know|   
;serverinvite|This command will send an invite to the current text channel which can be shared outside of the server
;botinfo|This command will show you all the info you will need to know about Sierra
;roles|This command will display all roles on the server and which ones you have
;userinfo or ;userinfo ```<mention>```|Will display all needed information about a user
;addsierra|This command sends you the link required to invite Sierra to your own server
;ping|Used to see the latency for sierra and the ping for the Discord API
;channelinfo|Shows the user info about the channel they are using
<h3>Admin:</h3>

|Command|Description|
|-------|-----------|
;announce ```<message>```|This command takes the message and posts it in the announcement channel
;clear ```<1-100>```|Deletes the amount of messages that is defined
;Kick ```<mention>```|Kick's the mentioned user from the server
;ban ```<mention>``` ```<reason>```|Bans the mentioned user from the server
;unban ```<user ID>```|Unban's the specified user
<h3>Music:</h3>

|Command|Description|
|-------|-----------|
;play ```<name or URL>```|Plays the song you specified either with a link or the name of the song
;disconnect|Clears the server queue and disconnects the bot from the voice channel
;skip|Skips to the next song in the server song queue
;skipto ```<queue position>```|Skips you to the specified position in the queue
;queue|Displays the server song queue
;pause|Pauses the current song playing in the voice channel
;unpause|Unpauses the current song playing in the voice channel
;remove ```<queue position>```|Removes the song which is in the specified queue position
;nowplaying|Displays information about the song that is currently playing
;loop|Loops the current song playing until Sierra is disconnected or the loop is disabled
;loopqueue|Loops the server queue
;searchyt ```<name>```|Searches YouTube for a track with the corresponding name
;searchytpl ```<name>```|Searches YouTube for a playlist with the corresponding name
;searchsc ```<name>```|Searches SoundCloud for a track with the corresponding name
;searchscpl ```<name>```|Searches SoundCloud for a playlist with the corresponding name
;shuffle|Shuffles the music queue randomizing what song comes up next
;clearqueue|Clears the queue of all songs
;volume ```<1-100>```|Allows you to adjust the volume of the music
<h3>Setup:</h3>

|Command|Description|
|-------|-----------|
;settings|Allows you to see all the settings for Sierra specific to your server
;setcolor|Changes the color of Sierra's embed messages in your server
;rename ```<name>```|This command changes the nickname of Sierra in your server
;setwelcome|Used to setup welcome message for your server
;setbye|Command is used to setup and use leaving messages on your server
;setdeletelog|Used to setup deleted message logging in your server
;setbanlog|Used to setup ban logging for your server
;setannounce|Used to setup the announcement command in your server
;setclear|Used to setup the clear command for your server
;setadmintools|Used to enable kick, ban and unban commands in the server
;setautorole|Used to setup autorole for your server
;nsfw|When used will switch the current channel between an NSFW channel and a normal channel
;setupnext|Used to adjust settings for the up next music notification
;setdjrole|Used to set a role that is required to use the music commands
;setadminrole|Used to set a role that is required to use the admin commands

<h1 id="dependencies">Dependencies</h1>
sierra@2.3.1<br>
├── @acegoal07/discordjs-pagination@1.0.8<br>
├── @acegoal07/timestamp-progress@1.0.7<br>
├── @discordjs/opus@0.5.3<br>
├── @discordjs/rest@0.1.0-canary.0<br>
├── @discordjs/voice@0.7.5<br>
├── @sapphire/snowflake@2.1.4<br>
├── ciql-json@1.9.6<br>
├── cpu-stat@2.0.1<br>
├── discord-api-types@0.24.0<br>
├── discord.js@13.3.1<br>
├── enmap@5.8.7<br>
├── ffmpeg-static@4.4.0<br>
├── ffmpeg@0.0.4<br>
├── fluent-ffmpeg@2.1.2<br>
├── fs@0.0.1-security<br>
├── libsodium-wrappers@0.7.9<br>
├── moment-duration-format@2.3.2<br>
├── moment@2.29.1<br>
├── node@16.13.1<br>
├── prism-media@1.3.2<br>
├── public-ip@4.0.4<br>
├── scdl-core@1.0.19<br>
├── soundcloud-downloader@1.0.0<br>
├── spotify-url-info@2.2.3<br>
├── ytdl-core@4.9.1<br>
├── ytpl@2.2.3<br>
└── ytsr@3.5.3<br>