<script lang="ts">
	import Dot from '$lib/svgs/dot.svelte';

	const imgUrl = new URL('../images/1.png', import.meta.url).href;
	const imgUrl2 = new URL('../images/2.png', import.meta.url).href;
	// const imgUrl = new URL('../lib/images/1.png', import.meta.url).href;
	// const imgUrl = new URL('../lib/images/1.png', import.meta.url).href;
	const b9 = new URL('../images/9.MInimize Docker Container in NodeJS.png', import.meta.url).href;
	// const  b8= new URL('../images', import.meta.url).href;
	// const  b= new URL('../images', import.meta.url).href;
	// const  b9= new URL('../images', import.meta.url).href;
	// const  b9= new URL('../images', import.meta.url).href;
	const b4 = new URL('../images/4.Create sveltekit Nodejs docker container(2).png', import.meta.url)
		.href;
	const b3 = new URL(
		'../images/3.Run Golang App in Browser using web assembly.png',
		import.meta.url
	).href;
	const b2 = new URL('../images/2.Build Minimized Docker Images in Golang(1).png', import.meta.url)
		.href;
	const b1 = new URL('../images/1.Golang godotenv.png', import.meta.url).href;
</script>

<div class="flex h-full w-full flex-col ">
	<p
		class=" -mt-5 ml-8 font-Poppins text-3xl font-bold text-[#fafafa] sm:mt-2 sm:text-3xl xs:mt-2 xs:text-2xl "
	>
		Blog
	</p>
	<div class=" mt-3 ml-8 h-[5px] w-12 rounded-xl bg-gradient-to-r from-[#fbd66d] to-[#ffbc5d]" />
	<div
		class="mb-10 flex flex-row flex-wrap justify-center gap-4 sm:flex-col sm:items-center sm:justify-center md:flex-col md:items-center md:justify-center xs:flex-col xs:items-center xs:justify-center"
	>
		<!-- blog -->
		<div
			on:click={() => {
				window.open('https://raka.hashnode.dev/minimize-docker-container-for-nodejs', '_blank');
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b9} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Minimize Docker Container for NodeJS</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Aug 31, 2022 <Dot class="mx-1 mb-[2px]" /> 5 min read
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					What is Node.js? Node.js is a software platform for scalable server-side and networking
					applications. Node.js applications are written in JavaScript...
				</p>
			</div>
		</div>
		<!-- blog -->
		<div
			on:click={() => {
				window.open(
					'https://raka.hashnode.dev/run-golang-app-in-browser-using-web-assembly',
					'_blank'
				);
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b3} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">
					Run Golang App in Browser using web assembly
				</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Jul 27, 2022 <Dot class="mx-1 mb-[2px]" /> 3 min read
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					Here we will write a simple website and run a golang application inside a browser using
					web assembly . WebAssembly is a new type of code that can be...
				</p>
			</div>
		</div>
		<!-- blog -->
		<div
			on:click={() => {
				window.open(
					'https://raka.hashnode.dev/create-and-deploy-sveltekit-inside-a-nodejs-docker-container',
					'_blank'
				);
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b4} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">
					Create and Deploy Sveltekit inside a Nodejs Docker Container
				</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
		
					Jul 26, 2022 <Dot class="mx-1 mb-[2px]" /> 3 min read
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					Node js is a great environment for deploying Sveltekit project . It runs smoothly. Install Nodejs adapter for Sveltekit . This is a official package...
				</p>
			</div>
		</div>
		<!-- blog -->
		<div
			on:click={() => {
				window.open(
					'https://raka.hashnode.dev/build-minimized-docker-images-in-golang',
					'_blank'
				);
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b2} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">
					Build Minimized Docker Images in Golang
				</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Jul 18, 2022 <Dot class="mx-1 mb-[2px]" /> 2 min read
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					For most of the production ready application the size of the Docker file matters . A minified docker image will run smoothly and securely . One of...
				</p>
			</div>
		</div>
		
		<!-- blog -->
		<div
			on:click={() => {
				window.open(
					'https://raka.hashnode.dev/best-way-to-use-environment-variables-in-golang',
					'_blank'
				);
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b1} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">
					Best Way to Use Environment Variables in Golang
				</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Jul 17, 2022 <Dot class="mx-1 mb-[2px]" /> 1 min read
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					There are lots of ways to import Environment variable inside a golang project , godotenv is a Go (golang) port of the Ruby dotenv project (which...
				</p>
			</div>
		</div>

		
	</div>
</div>

<style>
</style>
