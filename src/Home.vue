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
				<div :style="backgroundImage(photo.name)">
					<router-link :to="`/view/${n+1}`" class="d-block h-100">
						<div :style="backgroundImage(photo.name)" :class="photo.orientation"></div>
					</router-link>
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
				v-if="modalBg && this.id > 1"
				@click="prev"
				class="prev"
			>
				&larr;
			</div>
			<div
				v-if="modalBg && this.id < photos.length"
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
	props: {
		id: {
			type: Number
		}
	},
	data () {
		return {
			photos: Photos,
			publicPath: process.env.BASE_URL,
			modalBg: false
		}
	},
	methods: {
		backgroundImage (file) {
			return {backgroundImage: `url(${ this.publicPath }photos/${ file })`};
		},

		showPhoto (n) {
			this.reset(false);
			document.querySelector(`.photo:nth-child(${ n }) > div > a > div`).classList.add('show');
			this.modalBg = true;
		},

		reset (resetRouter = true) {
			this.modalBg = false;
			let divs = document.querySelectorAll('.photo div');
			divs.forEach(div => div.classList.remove('show'));
			if(resetRouter) this.$router.push({path: '/'});
		},

		prev () {
			if(this.id > 0) this.$router.push({path: `/view/${ this.id - 1 }`});
		},

		next () {
			if(this.id < this.photos.length) this.$router.push({path: `/view/${ this.id + 1 }`});
		}
	},
	watch: {

		id () {
			if(this.id && this.id < this.photos.length + 1) this.showPhoto(this.id);
		}
	},
	mounted () {

		if(this.id && this.id < this.photos.length + 1) this.showPhoto(this.id);

		document.addEventListener('keyup', (e) => {
			if(e.keyCode == 27) this.reset()
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
			opacity: 0;
			&.show {
				opacity: 1;
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