<template>
	<div :class="{'modal-active': modalBg}">
		<div>
			<img :src="publicPath + 'logo.png'" alt="logo" class="logo ml-auto mt-5 mr-auto mb-5 d-block"/>
		</div>
		<div class="d-flex flex-wrap ml-auto mt-3 mr-auto mb-5 photos">
			<div
				class="photo"
				v-for="(photo, n) in photos"
				:key="photo.name"
			>
				<div>
					<div :style="backgroundImage(photo.name)" :class="{'show': photo.show}" @click="id = n + 1"></div>
					<div class="close-photo" @click="reset">&times;</div>
				</div>
			</div>

			<div
				v-if="modalBg"
				@click="reset"
				class="modal-bg"
			>
			</div>
			
			<div
				v-if="modalBg"
				@click="reset"
				class="reset"
			>
			</div>
			
			<div
				v-if="modalBg && id > 1"
				@click="prev"
				class="prev"
			>
				&larr;
			</div>
			<div
				v-if="modalBg && id < photos.length"
				@click="next"
				class="next"
			>
				&rarr;
			</div>
		</div>
	</div>
</template>

<script>
import Photos from '@/photos';

export default {
	name: "homepage",
	data () {
		return {
			photos: Photos,
			publicPath: process.env.BASE_URL,
			modalBg: false,
			id: 0
		}
	},
	methods: {
		backgroundImage (file) {
			return {backgroundImage: `url(${ this.publicPath }photos/${ file })`};
		},

		showPhoto (n) {
			if(n < 0) return;
			this.photos.forEach((photo, i) => photo.show = i == n - 1);
			this.modalBg = true;
		},

		reset () {
			this.modalBg = false;
			this.photos.forEach(photo => photo.show = false);
			this.id = 0;
		},

		prev () {
			if(this.id > 0) --this.id;
		},

		next () {
			if(this.id < this.photos.length) ++this.id;
		}
	},
	watch: {

		id () {
			if(this.id && this.id < this.photos.length + 1) this.showPhoto(this.id);
		}
	},
	mounted () {

		if(this.id && this.id < this.photos.length + 1) this.showPhoto(this.id);

		document.addEventListener('keydown', (e) => {
			console.log(e.code);
			if(!this.modalBg) return;
			if(e.code == 'Escape') this.reset();
			if(e.code == 'ArrowLeft' && this.id > 0) --this.id;
			if(e.code == 'ArrowRight' && this.id < this.photos.length) ++this.id;
		});

		// Detect touch events to navigate through photos
		let touchstartX = 0
		let touchendX = 0

		const overlay = document.querySelector('.photos');

		const handleSwipe = () => {
			// Swiped left
			if(touchendX < (touchstartX - 100)) this.next();
			// Swiped right
			if(touchendX > (touchstartX + 100)) this.prev();
		}

		overlay.addEventListener('touchstart', e => {
			if(e.target.className == 'reset') touchstartX = e.changedTouches[0].screenX
		})

		overlay.addEventListener('touchend', e => {
			if(e.target.className == 'reset') {
				touchendX = e.changedTouches[0].screenX
				handleSwipe();
			}
		})

	}
};
</script>

<style lang="scss">
body {
	background: rgb(20, 20, 20);
}

.modal-active {
	overflow: hidden;
	height: 100vh;
}

.logo {
	border-radius: 100%;
	max-width: 80px;
}

.d-flex {
	width: 300px;
}

.close-photo {
	display: none;
}

@mixin photo {
	width: 100px;
	height: 100px;
	background-size: cover;
	cursor: pointer;
}

@mixin button {
	display: block;
	width: 30px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	border-radius: 30px;
	font-size: 20px;
	background: rgba(255, 255, 255, 0.5);
	position: fixed;
	z-index: 5;
	cursor: pointer;
}

.photo {
	& > div {
		border: 3px solid black;
		@include photo();

		div:not(.close-photo) {
			transition: opacity 0.2s;
			@include photo();
			&.show {
				position: fixed;
				top: 50px;
				left: 50px;
				width: calc(100% - 100px);
				height: calc(100vh - 100px);
				background-size: contain;
				background-repeat: no-repeat;
				background-position: 50% 50%;
				z-index: 2;

				& + .close-photo {
					@include button();
					top: 20px;
					right: 20px;
				}
			}
		}
	}
}

.modal-bg,
.reset {
	position: fixed;
	background: #000;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 1;
}

.reset {
	background: none;
	z-index: 4;
}

@mixin nav {
	top: 50%;
	@include button();
}

.prev {
	@include nav();
	left: 10px;
}

.next {
	@include nav();
	right: 10px;
}
</style>