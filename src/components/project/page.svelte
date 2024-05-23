<script lang="ts">
	import IconLink from "../iconlink/page.svelte";

	export let name: string;
	export let description: string;
	export let github: string | null;
</script>

<div class="shadow-sm border-1 rounded-md p-2">
	<div class="flex flex-row">
		<p class="text-xl">{name}</p>
	</div>
	<p class="text-secondary">{description}</p>
</div>