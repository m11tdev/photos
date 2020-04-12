<template>
	<div>
		<h1>Page not found</h1>

		<p>Sorry, the page you are looking for is not available.</p>
	</div>
</template>

<script>

export default {
	name: "ErrorPage",
	data: function() {
		return {
			breadcrumbs: {
				items: [
					{ 
						text: 'Person Query',
						routerName: 'home'
					},
					{
						text: "Page not found"
					}

				]
			}
		};
	},
	mounted() {

		// <router-view @updateBreadcrumbs="updateBreadcrumbs" /> in App.vue
		// is listening for this event, which passes data to update the last item
		// and links displayed in the breadcrumbs
		this.$emit('updateBreadcrumbs', this.breadcrumbs);
	}
};
</script>
