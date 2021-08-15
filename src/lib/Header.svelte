<script>
	import { _, isLoading } from 'svelte-i18n';
	import LangSwitch from './LangSwitch.svelte'
	export let activeUrl

	let logo = 'img/logo.png';
	let mobileNavActive = false;

	let navLinks = [
		{ link: '/', label: 'nav.home', home: true },
		{ link: '/about', label: 'nav.about' },
		{ link: '/portfolio', label: 'nav.portfolio' }
	]
</script>

<nav class="navbar fixed-top navbar-expand-md px-md-5">
	<a class="navbar-brand" href="/">
		<img class="d-inline-block align-top" src={logo} alt="logo principal" />
		<h1 class="d-inline-block align-middle align-sm-top">Yermaín Araya</h1>
	</a>

	<button
		type="button"
		class="hamburger hamburger--arrow collapsed d-md-none"
		on:click={() => { mobileNavActive = !mobileNavActive }}
		data-target="#mainNavbar"
	>
		<span class="hamburger-box">
			<span class="hamburger-inner" />
		</span>
	</button>

	{#if !$isLoading}
		<div class="navbar-collapse active" id="mainNavbar" class:active={mobileNavActive}>
			<ul class="navbar-nav ml-auto">
				{#each navLinks as { link, label, home }}
					<li class="nav-item" class:d-md-none={home}>
						<a class="nav-link" href={link} class:active={link === activeUrl}>
							{$_(label)}
						</a>
					</li>
				{/each}

				<LangSwitch />

				<div class="d-md-none pt-5 mt-5 contacto">
					<div class="mail col-12">
						<a class="p-2 align-self-middle" href="mailto:info@yermainaraya.com">
							<i class="fa fa-envelope-o fa-lg">&nbsp;</i>&nbsp;info@yermainaraya.com
						</a>
					</div>
					<div class="col-12 pt-2 mt-2">
						<a class="p-1" href="https://github.com/yerma" target="_blank">
							<i class="fa fa-github fa-2x">&nbsp;</i>
						</a>
						<a class="p-1" href="https://www.behance.net/yerma" target="_blank">
							<i class="fa fa-behance fa-2x">&nbsp;</i>
						</a>
						<a
							class="p-1"
							href="https://www.linkedin.com/in/yermain-araya-villacura-6911a1103/"
							target="_blank"
						>
							<i class="fa fa-linkedin fa-2x">&nbsp;</i>
						</a>
					</div>
				</div>
			</ul>
		</div>
	{/if}
</nav>

<style lang="scss">
	.navbar {
		background: rgba(255, 255, 255, 0.5);

		.navbar-brand {
			position: relative;

			h1 {
				position: absolute;
				top: 50%;
				left: 0;
				transform: translatey(-50%);
				font-size: 1.4em;
				font-weight: normal;
				line-height: 1;
				color: #000;
				font-family: 'Kaushan Script', cursive;
				opacity: 0;
				z-index: -1;
				transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
			}

			img {
				height: 8vw;
				max-height: 42px;
				margin-right: 1vw;
			}

			&:hover h1 {
				left: 100%;
				opacity: 1;
			}
		}
	}

	.navbar-nav {
		position: relative;
		z-index: 10;

		.nav-item {
			position: relative;
			display: block;
			outline: none;
			margin: 0 5px;

			a.nav-link {
				display: block;
				position: relative;
				padding: 0.5rem 1rem !important;
				color: #000;
				font-size: 1em;
				font-weight: 300;
				transition: color 0.5s;
				transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);

				&:focus {
					background: none;
				}

				&:before {
					content: '';
					position: absolute;
					width: 100%;
					height: 8%;
					bottom: 10%;
					left: 0;
					background-color: var(--magenta);
					visibility: hidden;
					z-index: -1;
					opacity: 0.8;
					transform: scaleX(0);
					transform-origin: 0 50%;
					transition: transform 0.5s;
					transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
				}

				&.active {
					font-weight: normal;
				}

				&.active:before,
				&:hover:before {
					visibility: visible;
					transform: scaleX(1);
				}
			}
		}
	}

	.navbar-collapse {
		justify-content: flex-end;
	}

	@media screen and (max-width: 768px) {
		.navbar-collapse {
			position: absolute;
			top: 0;
			left: 100vw;
			height: 100vh;
			width: 100vw;
			background-color: var(--turquoise);
			transition: all 0.5s ease-in-out;
			text-align: center;
			padding-top: 20vh;
			font-size: 1.3rem;

			&.active { left: 0; }

			a.nav-link {
				font-weight: normal;
				font-size: 1.5rem;
				color: #FFF;

				&:before { display: none; }

				&.active,
				&:hover { text-decoration: underline; }
			}

			.contacto a {
				font-size: 1rem;
				color: #FFF;
			}
		}
	}
</style>
