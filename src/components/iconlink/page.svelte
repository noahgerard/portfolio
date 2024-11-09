<script lang="ts">
	import Icon from '@iconify/svelte';

	export let link: string;
	export let icon: string;
	export let small: boolean = false;
</script>

<a target="_blank" href={link} class="flex transition-all ease-in-out w-fit hover:text-primary hover:rotate-3 hover:scale-[1.1]">
	<Icon icon={icon} class={ small ? "w-6 h-6" : "w-8 h-8"} />
</a>