0.53.0 / 2015-08-06
===================

* Make user json files mode `600` [#26](https://github.com/PonyChat/Shuo/pull/26)
* Disallow free connections on a restricted bouncer [#27](https://github.com/PonyChat/Shuo/pull/27)
* Add aliases for frequently used commands [#30](https://github.com/PonyChat/Shuo/pull/30)
* Fixed the link plugin text [#31](https://github.com/PonyChat/Shuo/pull/31)
* Add a new logo/favicon [#35](https://github.com/PonyChat/Shuo/pull/35)
* Only allow one unread marker [5915e96](https://github.com/PonyChat/Shuo/commit/5915e960d6062914565b44239406bebc1089647d)

0.52.1 / 2015-08-05
===================

* Move config root to `~/.shuo` [61f36ac](https://github.com/PonyChat/Shuo/commit/61f36acf1876d5f6363a2ffe2fa1fa928d26b4b1)

Breaking Changes
----------------

The configuration root has been changed. Users, logs and your configuration will not be automatically migrated.

To mitigate this change please move ~/.shout to ~/.shuo or use `--home`.

0.52.0 / 2015-08-05
===================

* Add theme selector [#18](https://github.com/PonyChat/Shuo/pull/18)
* Load backlog from the filesystem [2c00acc](https://github.com/PonyChat/Shuo/commit/2c00acc71dbc357177ae8235b64c4d785f84ddc0)
* Unread messages marker [92460a3](https://github.com/PonyChat/Shuo/commit/92460a354a0607994b8fbf5084821f69c6b97c3f)

Breaking Changes
----------------

This release will break configurations unless you add the `themes` object
from the example configuration into your configuration.

0.51.2 / 2015-08-04
===================

* Mark this as a PonyChat fork

0.51.1 / 2015-04-29
===================

* Increase process.setMaxListeners to prevent link preview to cause a crash

0.51.0 / 2015-04-16
==================

 * Added 'Crypto' theme by @aynik
 * Link preview now ignores links from localhost
 * Added 'displayNetwork' setting

0.49.3 / 2015-01-04 
===================

 * Fully expand chat when userlist is hidden
 * Remove vertical whitespace in chat windows
 * Support @mention

0.49.2 / 2015-01-04 
===================

 * Fix crash on broken links

0.49.1 / 2015-01-04 
===================

 * Fix undefined content-type (link plugin)

0.49.0 / 2014-12-23 
===================

 * Replaced superagent with request
 * Solves a problem where some links would crash the server

0.48.0 / 2014-12-12
===================

  * Fetch max 1 link per message
  * Fix '/me' message color
  * Periodically hide older messages for inactive channels
  * Only confirm exit in public mode
  * Added '/ns' NickServ and '/cs' ChanServ shortcuts

0.47.0 / 2014-11-19
===================

  * Shout now supports fullscreen on iOS

0.46.0 / 2014-11-14
===================

  * Fix commands being removed from user.json
  * Added dynamic title
  * Turn off input autocomplete

0.45.5 / 2014-11-05
===================

  * Minor bugfixes

0.45.4 / 2014-11-05
===================

  * Added username input
  * Added 'morning' theme by @rikukissa

0.45.3 / 2014-10-27
===================

  * Remove password argument from add command
  * Support MIRC style terminators
	* Fix edit command
  * Fix URLs preventing proper closure of bold and color tags
  * Send NOTICE messages to the correct channel

0.45.2 / 2014-10-16
===================

  * Fix crash on failed TLS connect
  * Hide mode from badge count

0.45.0 / 2014-10-14
===================

  * Added identd daemon
  * Remember user networks and channels on restart
  * Show link thumbnails
  * Pull link description from meta tags
  * Allow binding to local IP via `--bind <ip>`
  * Change 'users/' folder structure
  * Change 'logs/' location

0.44.0 / 2014-10-11
===================

  * Added text color
  * Added 'prefetch' option
  * Added drag-and-drop tolerance
  * Always show right toggle

0.43.1 / 2014-10-09
===================

  * Disable login button on authentication
  * Fix 'shout edit' command 

0.43.0 / 2014-10-08
===================

  * Smarter nick completion
  * Prevent multiple logins
  * Fix highlight checking by lower-casing everything
  * Allow relative '--home' path

0.42.0 / 2014-10-04
===================

  * Split users by mode in the sidebar
  * Show user mode in channel

0.41.1 / 2014-10-03
===================

  * Now installs properly on Windows

0.41.0 / 2014-10-03
===================

  * Use 'bcrypt-nodejs' package
  * No need to compile with node-gyp during install

0.40.3 / 2014-10-02
===================

  * Fix issue where actions from other users do not display

0.40.2 / 2014-10-01
===================

  * Fix existsSync

0.40.1 / 2014-10-01
===================

  * Fix config overwrite

0.40.0 / 2014-10-01
===================

  * Prevent private mode when no user exists
  * Move config to ~/.shout/

0.39.1 / 2014-09-30
===================

  * Scrolling now works correctly when loading thumbnails
  * List users on server start

0.39.0 / 2014-09-30
===================

  * Added changelog
  * Added colored nicknames (optional)
