- Firestore is only good for quick prototyping. The data structure seems unwieldy and difficult to maintain.

## Architecture

- Firestore provides real-time update for free. This means we do not need to write our own server code.

## Firestore

- Firestore charges per read, and write on per document basis
  - Hence add pagination or a teaser for each enemy
- DM's edit should ideally be done through an edit and confirmation flow. This would allow us to reduce the amount of requests needed to be made.
- Having the firestore console open counts as a read.
- 55.5 reads/min at 6 hour

## Functions
