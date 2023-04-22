<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import 'iconify-icon';

	const links: {
		name: string;
		href: string;
	}[] = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Projects', href: '/projects' }
	];

	const socials: {
		icon: string;
		href: string;
	}[] = [
		{
			icon: 'iconoir:github',
			href: 'https://github.com/Brandon-Ritchie'
		},
		{
			icon: 'iconoir:twitter',
			href: 'https://twitter.com/ritchietrumpet'
		},
		{
			icon: 'iconoir:linkedin',
			href: 'https://www.linkedin.com/in/brandon-ritchie-70106219a/'
		}
	];
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar slotTrail="place-content-end">
			<div class="flex flex-row text-center">
				{#each links as link, i}
					<a
						class="w-24 py-2 mx-1 hover:shadow hover:bg-surface-active-token rounded-container-token"
						href={link.href}
					>
						{link.name}
					</a>
				{/each}
			</div>

			<svelte:fragment slot="trail">
				{#each socials as social}
					<a
						class="pt-2 px-2 hover:shadow hover:bg-surface-active-token rounded-token"
						href={social.href}
					>
						<iconify-icon icon={social.icon} />
					</a>
				{/each}
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
