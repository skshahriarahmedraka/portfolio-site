<script lang="ts">
	import Dot from '$lib/svgs/dot.svelte';
	const imgUrl = new URL('../images/1.png', import.meta.url).href;
	const b2 = new URL('../images/accord1.png', import.meta.url).href;
	const b3 = new URL('../images/messenger.png', import.meta.url).href;
	const b4 = new URL('../images/gamesation.png', import.meta.url).href;
	const b5 = new URL('../images/Go.svg', import.meta.url).href;
	const b6 = new URL('../images/heapoverflow.png', import.meta.url).href;
</script>

<div class="flex h-full w-full flex-col  ">
	<p
		class=" -mt-5 ml-8 font-Poppins text-3xl font-bold text-[#fafafa] sm:mt-2 sm:text-3xl xs:mt-2 xs:text-2xl  "
	>
		Projects
	</p>
	<div class=" mt-3 ml-8 h-[5px] w-12 rounded-xl bg-gradient-to-r from-[#fbd66d] to-[#ffbc5d]" />

	<div class="mb-10 flex flex-row flex-wrap justify-center gap-8">
		<!-- GameStation -->
		<div
		on:keypress={()=>{}}
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka/GameStation', '_blank');
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b4} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">GameStation - A Epic GameStore Clone</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Golang <Dot class="mx-1 mb-[2px]" /> Svelte <Dot class="mx-1 mb-[2px]" /> SvelteKit <Dot
						class="mx-1 mb-[2px]"
					/> Gin Framework  <Dot class="mx-1 mb-[2px]" /> MongoDB
					<Dot class="mx-1 mb-[2px]" /> Docker <Dot class="mx-1 mb-[2px]" /> Kubernetes
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					A Game Store where you can buy games, Recharge your wallet, and play games. See all Purchesd games 
				</p>
			</div>
		</div>
		<!-- Messenger -->
		<div
		on:keypress={()=>{}}
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka/Messenger', '_blank');
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b3} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Messenger</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Golang <Dot class="mx-1 mb-[2px]" /> Svelte <Dot class="mx-1 mb-[2px]" /> SvelteKit <Dot
						class="mx-1 mb-[2px]"
					/> Gorilla Mux <Dot class="mx-1 mb-[2px]" /> PostgreSQL <Dot class="mx-1 mb-[2px]" /> MongoDB
					<Dot class="mx-1 mb-[2px]" /> Docker <Dot class="mx-1 mb-[2px]" /> Kubernetes
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					A Messaging Application , Send/Accept Friend request , Chat with your friends ,Send Money to your Friends 
				</p>
			</div>
		</div>
		<!-- accord -->
		<!-- <div
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka', '_blank');
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b2} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Accord - chating audio & video call</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Golang <Dot class="mx-1 mb-[2px]" /> Svelte <Dot class="mx-1 mb-[2px]" /> SvelteKit <Dot
						class="mx-1 mb-[2px]"
					/> Gorilla Mux <Dot class="mx-1 mb-[2px]" /> PostgreSQL <Dot class="mx-1 mb-[2px]" /> MongoDB
					<Dot class="mx-1 mb-[2px]" /> Docker <Dot class="mx-1 mb-[2px]" /> Kubernetes
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					For most of the production ready application the size of the Docker file matters . A
					minified docker image will run smoothly and securely . One of...
				</p>
			</div>
		</div> -->
		<!-- stack overflow -->
		<div
		on:keypress={()=>{}}
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka/NullPointer', '_blank');
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b6} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Null Pointer</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Golang <Dot class="mx-1 mb-[2px]" /> Svelte <Dot class="mx-1 mb-[2px]" /> SvelteKit <Dot
						class="mx-1 mb-[2px]"
					/> Gorilla Mux <Dot class="mx-1 mb-[2px]" /> PostgreSQL <Dot class="mx-1 mb-[2px]" /> MongoDB
					<Dot class="mx-1 mb-[2px]" /> Docker <Dot class="mx-1 mb-[2px]" /> Kubernetes
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					A StackOverflow/quora clone website where users can ask questions and give answers ,
					create Group for specific topics
				</p>
			</div>
		</div>
		<!-- VideoTube -->
		<div
		on:keypress={()=>{}}
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka/EcommerceGolangAPI', '_blank');
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b5} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">
					Golang Ecommerce API
				</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Golang <Dot class="mx-1 mb-[2px]" /> Gorilla Mux <Dot class="mx-1 mb-[2px]" /> PostgreSQL <Dot class="mx-1 mb-[2px]" /> MongoDB
					<Dot class="mx-1 mb-[2px]" /> Docker <Dot class="mx-1 mb-[2px]" /> Kubernetes
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					Robust Ecommerce API Backend With Database handling , Authentication , Authorization and Great Admin Panel
				</p>
			</div>
		</div>
		<!-- Amazonian -->
		<!-- <div
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka', '_blank');
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b2} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Amazonian</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Golang <Dot class="mx-1 mb-[2px]" /> Svelte <Dot class="mx-1 mb-[2px]" /> SvelteKit <Dot
						class="mx-1 mb-[2px]"
					/> Gorilla Mux <Dot class="mx-1 mb-[2px]" /> PostgreSQL <Dot class="mx-1 mb-[2px]" /> MongoDB
					<Dot class="mx-1 mb-[2px]" /> Docker <Dot class="mx-1 mb-[2px]" /> Kubernetes
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					For most of the production ready application the size of the Docker file matters . A
					minified docker image will run smoothly and securely . One of...
				</p>
			</div>
		</div> -->
		<!-- accord -->
		<!-- <div
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka', '_blank');
			}}
			class="mt-8 flex h-fit w-[45%] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600 transition-all duration-200 hover:scale-125  hover:cursor-pointer sm:w-[80%] md:w-[70%] xs:w-[90%] "
		>
			<img src={b2} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Accord - chating audio & video call</p>
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Golang <Dot class="mx-1 mb-[2px]" /> Svelte <Dot class="mx-1 mb-[2px]" /> SvelteKit <Dot
						class="mx-1 mb-[2px]"
					/> Gorilla Mux <Dot class="mx-1 mb-[2px]" /> PostgreSQL <Dot class="mx-1 mb-[2px]" /> MongoDB
					<Dot class="mx-1 mb-[2px]" /> Docker <Dot class="mx-1 mb-[2px]" /> Kubernetes
				</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					For most of the production ready application the size of the Docker file matters . A
					minified docker image will run smoothly and securely . One of...
				</p>
			</div>
		</div> -->
		
	</div>
</div>

<style>
</style>
