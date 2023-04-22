<script>
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import 'iconify-icon';

	const pages = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar slotTrail="place-content-end">
			{#each pages as page}
				<a href={page.href} class="font-bold px-2">{page.name}</a>
			{/each}
			<svelte:fragment slot="trail">
				<a href="https://github.com/Brandon-Ritchie">
					<iconify-icon icon="iconoir:github" />
				</a>
				<a href="https://twitter.com/ritchietrumpet">
					<iconify-icon icon="iconoir:twitter" />
				</a>
				<a href="https://www.linkedin.com/in/brandon-ritchie-70106219a/">
					<iconify-icon icon="iconoir:linkedin" />
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<AppBar slotTrail="place-content-end">
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>
