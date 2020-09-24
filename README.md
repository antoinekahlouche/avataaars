# Vue.js component for Avataaars

The Vue.js component is based on the Sketch library [Avataaars](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley). 

This has been derivated from <a href="https://github.com/fangpenlin/avataaars" target="_blank">fangpenlin/avataaars</a>, so if you need the React component : **go check it out !!**

<p align="center"><img src="example.png" style="width: 300px; height: 300px;" /></p>

## Usage

First, you need to install the avataaars component package, here you run

```
npm install @antoinekahlouche/avataaars --save
```

Second import the Avataaar component

```js
import Avatar from "@antoinekahlouche/avataaars"
```

```js
<Avatar
    avatarStyle="Circle"
    topType="LongHairMiaWallace"
    accessoriesType="Prescription02"
    hairColor="BrownDark"
    facialHairType="Blank"
    clotheType="Hoodie"
    clotheColor="PastelBlue"
    eyeType="Happy"
    eyebrowType="Default"
    mouthType="Smile"
    skinColor="Light"
/>
```