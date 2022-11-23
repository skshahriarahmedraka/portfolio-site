<script>
	// your script goes here
</script>

<div class=" h-screen w-full bg-slate-800 flex  justify-center items-center">

    <div class="loader ">
        <span class="loader-inner-1" />
	<span class="loader-inner-2" />
	<span class="loader-inner-3" />
	<span class="loader-inner-4" />
</div>
</div>

<style lang="css">
	.loader {
		
		width: 100px;
		height: 100px;
		position: absolute;
	}
	.loader .loader-inner-1,
	.loader .loader-inner-2,
	.loader .loader-inner-3,
	.loader .loader-inner-4 {
		display: block;
		width: 20px;
		height: 20px;
		border-radius: 20px;
		position: absolute;
	}
	.loader .loader-inner-1:before,
	.loader .loader-inner-2:before,
	.loader .loader-inner-3:before,
	.loader .loader-inner-4:before {
		content: '';
		display: block;
		width: 20px;
		height: 20px;
		border-radius: 20px;
		position: absolute;
		right: 0;
		animation-name: loading-1;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-duration: 2s;
	}

	.loader .loader-inner-1 {
		top: 0;
		left: 0;
		transform: rotate(70deg);
	}

	.loader .loader-inner-1:before {
		background: #06aed5;
	}

	.loader .loader-inner-2 {
		top: 0;
		right: 0;
		transform: rotate(160deg);
	}

	.loader .loader-inner-2:before {
		background: #ec008c;
	}

	.loader .loader-inner-3 {
		bottom: 0;
		right: 0;
		transform: rotate(-110deg);
	}

	.loader .loader-inner-3:before {
		background: #ffbf00;
	}

	.loader .loader-inner-4 {
		bottom: 0;
		left: 0;
		transform: rotate(-20deg);
	}

	.loader .loader-inner-4:before {
		background: #079c00;
	}
	@keyframes loading-1 {
		0% {
			width: 20px;
			right: 0;
		}

		30% {
			width: 120px;
			right: -100px;
		}

		60% {
			width: 20px;
			right: -100px;
		}
	}
	/* header {
		width: 100%;
		height: 100vh;
		background-image: url('bg.jpg');
		background-size: cover;
		font-family: 'Dosis', sans-serif;
	}
	.header_menu {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: row;
		align-items: center;

	} */
	/* .logo {
		width: 20%;
		text-align: center;
	}
	.logo img {
		height: 300px;
	} */
	/* .menu_list {
		width: 80%;
		text-align: right;
		padding-right: 50px;
	}
	.menu_list li {
		display: inline-block;
		text-transform: uppercase;
		list-style: none;
		letter-spacing: 2px;
		padding-left: 50px;
	}
	.menu_list li a {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
	}
	.menu_list li a:hover {
		color: orange;
	}
	.header_content {
		text-transform: uppercase;
		width: 100%;
		height: 200px;
		position: absolute;
		top: 50%;
		left: 50%;
		color: rgba(255, 255, 255, 0.8);
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.header_content h2 {
		margin-bottom: 50px;
		font-size: 17px;
		font-weight: 500;
		letter-spacing: 0.3em;
	}
	.header_content h1 {
		margin-bottom: 50px;
		font-size: 50px;
		font-weight: 500;
		letter-spacing: 0.7em;
	}
	.header_content button {
		height: auto;
		padding: 8px 37px;
		color: #fff;
		font-size: 12px;
		background-color: transparent;
		margin-right: 20px;
	}
	.header_content button a {
		text-transform: uppercase;
		text-decoration: none;
		color: white;
		letter-spacing: 1px;
	}
	.header_content button:hover {
		background-color: orange;
		border: 1px solid white;
	} */
</style>
