<div align="center"> 
    <img src='/Resources/Pictures/Sierrapfp.webP' alt="acegoal07" width=200px height=200px/>
</div>
<h3 align="center">Sierra project</h3>
<p align="center">
    <a href="#about">About</a> &#xa0 | &#xa0 
    <a href="#commands">Commands</a> &#xa0 | &#xa0 
    <a href="#dependencies">Dependencies</a> &#xa0 | &#xa0
    <a href="https://discord.com/api/oauth2/authorize?client_id=878980386590429204&permissions=8&scope=bot%20applications.commands">Add bot</a> &#xa0 | &#xa0 
    <a href="https://github.com/acegoal07" target="_blank">Author</a>
</p>

---

<h1 id="about">About</h1>
Sierra is a multi purpose discord bot and is a small time projects which is still a working progress meaning more commands are being add and things are subject to change. Due to it being a small time project please bare with me when it comes to crashes, issues, bugs and Discord.js compatibility issues as i am on the only person working on the bot and need time to do the work.
<br><br>
Sierra does support slash commands but most of them are not finished yet so only a small amount are available to the public.
<br><br>
Ideas for what i should add to Sierra would be much appreciated because i want to make the bot as user friendly and useful as possible you can find ways of contacting me on the homepage of my website.
<br><br>
You can find the Discord.js documentation <a href="https://discord.js.org/#/docs/main/stable/general/welcome">here</a> which has details on how to use Discord.js to create your own bot, you can also find Discord.js guide here which shows in more depth how to work with Discord.js <a href="https://discordjs.guide/#before-you-begin">here</a>.
<br><br>
If you forget your custom server prefix use the built in command $prefix$ to have the bot tell you what the prefix is for your server
<br><br>
I have used the Sierra project as a way to learn a lot about JavaScript and with this project i have released multiple dependencies which were built specifically for Sierra
<br><br>

```md
Current Bot Version: V2.4.7
```
<h1 id="commands">Commands</h1>
<h3>General:</h3>

|Command|Description|
|-------|-----------|
help|This command will display all of the commands the bot has corresponding to the section you choose
serverinfo|This server will show all the info about the server you will need to know|   
serverinvite|This command will send an invite to the current text channel which can be shared outside of the server
botinfo|This command will show you all the info you will need to know about Sierra
roles|This command will display all roles on the server and which ones you have
userinfo or userinfo ```(mention)```|Will display all needed information about a user
addsierra|This command sends you the link required to invite Sierra to your own server
channelinfo|Shows the user info about the channel they are using
donate|Shows donation options available to support Sierra
<h3>Admin:</h3>

|Command|Description|
|-------|-----------|
announce ```(message)```|This command takes the message and posts it in the announcement channel
clear ```(1-100)```|Deletes the amount of messages that is defined
clearchannel|Completely empties the current channel of all messages and items
Kick ```(mention)```|Kick's the mentioned user from the server
ban ```(mention)``` ```(reason)```|Bans the mentioned user from the server
tempban ```(mention)``` ```(days)``` ```(reason)```|Bans the specified user for a specified amount of days
unban ```(user ID)```|Unban's the specified user
timeout ```(mention)``` ```(minutes)``` ```(reason)```|Stops the user from talking in the server for a set period of time
stoptimeout ```(mention)```|Removes the timeout from a user
<h3>Music:</h3>

|Command|Description|
|-------|-----------|
play ```(name or URL)```|Plays the song you specified either with a link or the name of the song
disconnect|Clears the server queue and disconnects the bot from the voice channel
skip|Skips to the next song in the server song queue
skipto ```(queue position)```|Skips you to the specified position in the queue
queue|Displays the server song queue
pause|Pauses the current song playing in the voice channel
unpause|Unpauses the current song playing in the voice channel
remove ```(queue position)```|Removes the song which is in the specified queue position
nowplaying|Displays information about the song that is currently playing
loop|Loops the current song playing until Sierra is disconnected or the loop is disabled
loopqueue|Loops the server queue
searchyt ```(name)```|Searches YouTube for a track with the corresponding name
searchytpl ```(name)```|Searches YouTube for a playlist with the corresponding name
searchsc ```(name)```|Searches SoundCloud for a track with the corresponding name
searchscpl ```(name)```|Searches SoundCloud for a playlist with the corresponding name
searchsp ```(name)```|Searches Spotify for a track with the corresponding name
searchsppl ```(name)```|Searches Spotify for a playlist with the corresponding name
shuffle|Shuffles the music queue randomizing what song comes up next
clearqueue|Clears the queue of all songs
volume ```(1-100)```|Allows you to adjust the volume of the music
wheretolisten|Searches Spotify, SoundCloud and YouTube and provides you with links
lyrics|Gets the lyrics to the song that's currently playing
restartsong|Goes to the beginning of the song that's currently playing
<h3>Utility:</h3>

|Command|Description|
|-------|-----------|
nsfw|When used will switch the current channel between an NSFW channel and a normal channel
rename ```(name)```|This command changes the nickname of Sierra in your server
imdb ```(name of show or film)```|Creates a poll in the channel and collects the votes and after a certain amount of time displays the results
poll ```(question)```|Creates a poll in the channel and collects the votes and after a certain amount of time displays the results
ping|Used to see the latency for sierra and the ping for the Discord API
lock|Locks a channel stopping messages from being sent
unlock|Unlocks a channel allowing for messaged to be sent
<h3>Setup:</h3>

|Command|Description|
|-------|-----------|
settings|Allows you to see all the settings for Sierra specific to your server
setprefix ```(prefix)```|Allows you to set a custom prefix for Sierra
setcolor|Changes the color of Sierra's embed messages in your server
setwelcome|Used to setup welcome message for your server
setbye|Command is used to setup and use leaving messages on your server
setdeletelog|Used to setup deleted message logging in your server
setbanlog|Used to setup ban logging for your server
setannounce|Used to setup the announcement command in your server
setclear|Used to setup the clear command for your server
setadmintools|Used to enable kick, ban and unban commands in the server
setautorole|Used to setup autorole for your server
setmusicstyle|Used to edit settings for the music commands
setdjrole|Used to set a role that is required to use the music commands
setadminrole|Used to set a role that is required to use the admin commands
setcommandchannel|Used to setup a command channel
setvoicelog|Used to setup voice channel activity logging
setuserupdatelog|Used to setup user update logging

<h1 id="dependencies">Dependencies</h1>

```cmd
sierra@2.4.8
├── @acegoal07/discordjs-pagination@1.3.0
├── @acegoal07/progressbar-builder@1.0.2
├── @discordjs/opus@0.5.3
├── @discordjs/rest@0.3.0
├── @discordjs/voice@0.8.0
├── @sapphire/snowflake@3.2.2
├── @supercharge/collections@4.3.0
├── ciql-json@1.9.6
├── cpu-stat@2.0.1
├── discord-api-types@0.26.1
├── discord.js@13.8.0
├── enmap@5.9.0
├── ffmpeg-static@4.4.1
├── ffmpeg@0.0.4
├── fluent-ffmpeg@2.1.2
├── fs@0.0.1-security
├── genius-lyrics@4.3.8
├── imdb-api@4.4.1
├── libsodium-wrappers@0.7.10
├── moment-duration-format@2.3.2
├── moment@2.29.3
├── opusscript@0.0.8
├── prism-media@1.3.2
├── public-ip@4.0.4
├── scdl-core@1.0.20
├── soundcloud-downloader@1.0.0
├── spotify-info.js@1.0.4
├── spotify-url-info@2.2.9
├── systeminformation@5.11.16
├── ytdl-core@4.11.0
├── ytpl@2.3.0
└── ytsr@3.8.0
```