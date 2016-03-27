Forum Item Statuses
===================

Currently there are 5 different binary statuses I can think of:
- sticky
- hot
- locked
- poll
- new-content

Of these, there are only a few restrictions:
- 'locked' mutex with ('hot', 'new-content')

This sets up two logical groups:
- Locked statuses: 4 possible:
	- sticky
	- locked=true
	- poll
	- hot=false
	- new-content=false
- Unlocked statuses: 16 possible:
	- locked=false
	- sticky
	- hot
	- poll
	- new-content

This thus gives a total of 20 possible statuses.

Determining the icons used is a bit trickier:
- if the item is a poll:
	- use the poll icon.
	- if the item has new content, apply the bright color.
	- if the item is hot but has no new content, apply the hot color.
- if the item is sticky:
	- add the sticky icon.
		- this icon is always the bright color.
- if the item is locked:
	- add the locked icon.
		- this icon is always the error color.
- if the item does not yet have any icons:
	- if new content, use the new content icon.
	- otherwise, use the normal icon.
