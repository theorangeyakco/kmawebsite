<template>
	<div class="home">
		<HomeGrid />
	</div>
</template>

<script>
// @ is an alias to /src

import HomeGrid from "@/components/HomeGrid.vue";

export default {
	name: "Home",
	components: {
		HomeGrid,
	},
};
</script>
