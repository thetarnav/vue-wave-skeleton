# Vue Wave Skeleton

Animated skeleton component for **Vue 3**, by moving svg wave with constant **chill animation**. A cool way to show that the text content of your page is loading, an alternative to the boring, typical skeletons.

![wave](https://user-images.githubusercontent.com/24491503/131225504-f97ca108-27c4-47fc-a089-e2e672618218.gif)

<!-- See the [DEMO](https://vue-hcyeqk.stackblitz.io) on StackBlitz. -->

## Install

```sh
npm i vue-wave-skeleton
```

## Usage

```js
import WaveSkeleton from 'vue-wave-skeleton'

// register globally
app.component('WaveSkeleton', WaveSkeleton)

// or locally
export default {
	components: { WaveSkeleton },
	// ...
}
```

```html
<!-- place the component inside the template -->
<WaveSkeleton />
```

```css
/* and set the size in css */
.wave-skeleton {
	width: 260px;
	height: 30px;
}
```

## Props

Right now there aren't a lot of these. But let me know if you need some.

#### transitionName

-  _Optional_
-  Type: `String`
-  Name of your cursom enter/leave transition, you want to use instead of the default fade.

## CSS Variables

Some css properties can be easily changed by setting css variables.

```css
/* the defaults: */
.gooey-background {
	/* name of the infinite animation, the default is a simple fade */
	--wave-skeleton-animation: wave-skeleton-fade;
	/* duration of the animation */
	--wave-skeleton-duration: 800ms;
	/* stroke color of the wave */
	--wave-skeleton-color: #828282;
	/* stroke width */
	--wave-skeleton-stroke-width: 5.2px;
	/* shape of the path cap */
	--wave-skeleton-stroke-linecap: round;
}
```

## Sizes in CSS

Right now this component doesn't have a default height or width, so it's for you to decide on it yourself and set it.

The generall rule is to have matching `height` between components you want to have looking similar.

To add other sizes e.g. to represent titles or captions, use classes, like `.title` or `.caption`.

```html
<WaveSkeleton class="title" /> <WaveSkeleton class="title smaller" />
```

```css
.wave-skeleton.title {
	width: 280px;
	height: 50px;
}
.wave-skeleton.smaller {
	width: 130px;
}
```

---

### About the effect

The original solution I've based mine is this [codepen by Varun Vachhar](https://codepen.io/winkerVSbecks/pen/EVJGVj). Also check out [my prototype codepen](https://codepen.io/thetarnav/details/bGRVbro) where I've tried to adapt this solution.

Generally I've made this component to use in my personal projects. But let me know if you have any ideas / requests regarding this component. It's a really cool effect, so I would like to tur it into an even better component.
