<script lang="ts">
	import IconLink from '../iconlink/page.svelte';

	export let name: string;
	export let description: string;
	export let github: string | null;
	export let link: string | null;
	export let tags: string[];
</script>

<div class="mb-4 border-l-2 border-secondary/10 0 p-2">
	<div class="flex flex-row">
		<p class="text-lg">{name}</p>
		<div class="flex justify-center items-center gap-2 mx-2">
			{#if github}
				<IconLink icon="mdi:github" link={github} small />
			{/if}
			{#if link}
				<IconLink icon="mdi:link" {link} small />
			{/if}
		</div>
	</div>

	<p class="text-secondary">{description}</p>
	<div class="flex flex-row gap-2 mt-2 flex-wrap">
		{#each tags as tag}
			<div class="text-xs h-fit bg-secondary/10 text-secondary p-1 rounded">{tag}</div>
		{/each}
	</div>
</div>
