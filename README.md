# BrowserBot v0.1.1 - December 27 - 2020

## What is that for?

This software was designed mainly to be used as a automation tool for browsers, mostly on Google Chrome.

## Changelog

- **0.1.1** documentation to describe basic bot concept and UI improvements.
- **0.1.0** basic project structure. Manifest.json and extension, tasks, vendor directories.

## Directories and classes

- **extension** _directory_ contains all extension related files.
	* **Extension** _class_ represents the extension itself. It extends the Bot class.
	* **Message** _class_ describes the messages exchanged between extension scopes.
	* **BackgroundStorage** _class_ implements the Storage for jSpaghetti vendor to work with background script.
	* **background** _directory_ contains all the background scripts.
	* **UI** _directory_ contains all the html, js, css to build the user interface for the extension.
- **Bot** _class_ represents the extension itself.
- **vendor** _directory_ contains all the third-parts included on content and background scripts.
- **modules** _directory_ contains all the bot tasks. On this project, jSpaghetti modules compose all tasks especifications through its sequences: instructions using procedures.

## Basic operation

The bot execute tasks through jSpaghetti modules. The UI listens for operator orders. An order is translated to a Message that goes from UI, which lives on action script, to the Bot, which lives on content script. The Bot calls the bind sequence to the order received. jSpaghetti consumes eventually the background script as storage to save/restore the sequence state.

The UI uses the background script as storage as well to save/restore UI content inserted by operator or the Bot itself.

