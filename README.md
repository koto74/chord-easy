# Chord Sampler
![image](https://github.com/koto74/chord-sampler/assets/124267041/aa7a9073-107b-4fcf-8d80-d579f11a9f94)

## Features

### Chord Playback

The user can listen to a given chord with a single click.

### Add and remove chords

Users can select chords from a list of available chords to add to the sampler or remove chords from the sampler when they are no longer needed.

### Color-coding by role

Chord buttons are color-coded according to their tonic, subdominant, and dominant roles, making it easy to visually understand the function of chords.

## Technologies

- React
- MUI
- Tone.js
- TypeScript

## Setup

### 1. Run Dev Container

Start VScode and run `Reopen in Container` from the command palette or the quick action on the left side of the status bar.

The migration procedure is performed within a container.
Connect to the VScode terminal or the container shell to execute it.

### 2. Setup yarn

Since yarn is recommended to be installed via corepack, first activate corepack.

```
corepack enable
```

Confirm that the version of yarn is 4.1.1

```
yarn -v
```

### 3. Install package

```
yarn install
```

### 4. Start the development server

```
yarn dev
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
