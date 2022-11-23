<script lang="ts">
	import Loading from '$lib/loading/solarloading.svelte';
	import Error from "$lib/error/error1.svelte"
	import { afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import '../app.postcss';
	import HashLoading from '$lib/loading/hashLoading.svelte';
	let loadingState: boolean = true;
	afterUpdate(() => {
		loadingState = false;
	});
</script>


{#if loadingState}
	<!-- <Loading class=" scale-150" /> -->
	<HashLoading />
{:else if $page.error}
	<!-- <Error1/> -->
	<Error />
{:else}


		<slot />
	
{/if}

