<script lang="ts">
	import Code from '$lib/svgs/code.svelte';
	import Design from '$lib/svgs/design.svelte';
	import Docker2 from '$lib/svgs/docker2.svelte';
	import Golang from '$lib/techImages/go.svelte';
	import K8s2 from '$lib/svgs/k8s2.svelte';
	import Mobile2 from '$lib/svgs/mobile2.svelte';
	import Terminal from '$lib/svgs/terminal.svelte';
	import Github from '$lib/techImages/github2.svelte';
	import Svelte from '$lib/techImages/svelte.svelte';
	import DockerImage from '$lib/techImages/docker2.svelte';
	import Gcp2 from '$lib/techImages/gcp4.svelte';
	import Azure from '$lib/techImages/azure.svelte';
	import Bash from '$lib/techImages/bash.svelte';
	import C from '$lib/techImages/c.svelte';
	import Cpp from '$lib/techImages/cpp.svelte';
	import K8s from '$lib/techImages/k8s.svelte';
	import Rust from '$lib/techImages/rust.svelte';
	import Download from '$lib/svgs/download2.svelte';
import Python from '$lib/techImages/python.svelte';
import Devops from '$lib/techImages/devops.svelte';
import Ts from '$lib/techImages/ts.svelte';
import Postgres from '$lib/techImages/postgres.svelte';
import Mongo from '$lib/techImages/mongo.svelte';
import Mysql from '$lib/techImages/mysql.svelte';
import Redis from '$lib/techImages/redis.svelte';
import Database from '$lib/svgs/database.svelte';
	import { goto } from '$app/navigation';
	const resume = new URL('../resume/SkShahriarAhmedRaka.pdf', import.meta.url).href;

</script>

<div class=" flex h-fit  w-full flex-col sm:mb-5 sm:flex-wrap ">
	<p class=" -mt-5 xs:mt-2  ml-8 font-Poppins text-3xl  xs:text-2xl font-bold text-[#fafafa] sm:mt-2 ">About Me</p>
	<div class=" mt-3 ml-8 h-[5px] w-12 rounded-xl bg-gradient-to-r from-[#fbd66d] to-[#ffbc5d]" />
	<!-- resume -->
	<a
		download
		href={resume}
		class=" float-right -mt-6 xs:-mt-10 sm:-mt-10 ml-8 mr-4 xs:mr-2 flex h-fit w-fit gap-2 self-end rounded-2xl bg-[#212123] p-2 px-3 font-OpenSans text-[#ffdb70]  transition-all duration-150 hover:cursor-pointer  hover:bg-slate-800 "
		style=" align-items:center; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
	>
		<!-- <Sent class="h-6 w-6 fill-[#ffdb70]" /> -->
		<Download class="h-6 w-6 fill-[#ffdb70]" />
		<button class=""> Resume </button>
	</a>
	<p class=" ml-8 mt-4  h-fit w-[90%] font-OpenSans text-[#fafafa] xs:text-sm xs:ml-4 ">
		I’m a middle-level Full-Stack Software Engineer, and Specialized in Server Side Software Development . I have some years
		of development experience. All the time in the professional experience, I had to adapt with
		lightning speed to the fast-changing frameworks and tools, and this has built my current
		extensive professional skills set. Because of this, I can give recommendations and solutions for
		a variety of technologies.
		<br />
		<br />
	</p>
	<p class="ml-8 h-fit w-[90%] font-OpenSans text-[#fafafa] xs:text-sm xs:ml-4 ">
		Here are my skills and strengths:<br />
		⭐️ Expert in Software Development Using <b>Golang</b> <br />
		⭐️ Expert in <b>Gorilla Mux</b> , <b>Gin</b> Framework & <b>Fiber</b> framework (using Golang)<br/>
		⭐️ Expert in  <b class="">Docker</b>, <b class="">Kafka</b>, <b class="">Jenkins</b> <br/>
		⭐️ Expert in database design, development & optimization <br/>(<b class="">PostgreSQL, MySQL, MongoDB, ScyllaDB, Apache Cassandra</b>)<br/>
		✓ Experienced in ( <b>Grpc</b>, <b>protocol buffer</b> )<br />
		✓ Experienced in ( <b>WebSocket, Socket.io, WebRTC</b> ) for real-time client and server
		applications<br />
		✓ Experienced in ( <b class="">TailwindCSS</b>, <b>Svelte.js & SvelteKit</b> ) and some knowledge in ( <b>TypeScript</b> )<br
		/>
		✓ Good understanding of ( <b class=""> Kubernetes, Bash, PowerShell, Git, Nginx</b> ) <br />
		
		
	</p>
	<p class="mt-5 ml-8 font-Poppins text-3xl xs:text-2xl xs:-ml-2 xs:self-center font-bold text-[#fafafa]">What I'm Doing</p>
	<div class="flex flex-row flex-wrap justify-center gap-x-5  ">
		<!-- frontend -->
		<div
			class="mt-5 flex h-[142px] w-[406px] flex-row  items-center justify-center gap-5 rounded-2xl border-[1px] border-gray-700 bg-[#343434] bg-opacity-25 "
			style=" background-color: #212123 ; box-radius:16px; box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.15); background:linear-gradient(135deg, #404040 0%, rgba(64, 64, 64, 0) 48.44%);box-sizing:border-box; margin-right:2rm "
		>
			<Design class=" -mt-8 w-[10%]" />
			<div class="flex w-[75%]  flex-col">
				<p class="font-Poppins text-xl xs:text-lg font-bold text-[#fafafa]">Web Frontend development</p>
				<p class=" font-OpenSans text-slate-300 xs:text-base line-clamp-3">
					Performant & Responsive UX & UI development using Svelte & SvelteKit
					<!-- High-quality development of sites at the professional level. -->
				</p>
			</div>
		</div>
		<!-- backend -->
		<div
			class="mt-5 flex h-[142px] w-[406px] flex-row  items-center justify-center gap-5 rounded-2xl border-[1px] border-gray-700 bg-[#343434] bg-opacity-25 "
			style=" background-color: #212123 ; box-radius:16px; box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.15); background:linear-gradient(135deg, #404040 0%, rgba(64, 64, 64, 0) 48.44%);box-sizing:border-box; margin-right:2rm "
		>
			<Code class=" -mt-8 w-[10%]" />
			<div class="flex w-[75%]  flex-col">
				<p class="font-Poppins text-xl xs:text-lg font-bold text-[#fafafa]">Web Backend development</p>
				<p class=" font-OpenSans text-slate-300 xs:text-base line-clamp-3">
					Robust, high Performant & Bug free Server Design and development in GO
				</p>
			</div>
		</div>
		<!-- database -->
		<div
			class="mt-5 flex h-[142px] w-[406px] flex-row  items-center justify-center gap-5 rounded-2xl border-[1px] border-gray-700 bg-[#343434] bg-opacity-25 "
			style=" background-color: #212123 ; box-radius:16px; box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.15); background:linear-gradient(135deg, #404040 0%, rgba(64, 64, 64, 0) 48.44%);box-sizing:border-box; margin-right:2rm "
		>
		<Database class=" -mt-8 w-[10%]  fill-[#ffdb70]   stroke-0" />
			<!-- <Mobile2 class=" -mt-8 w-[10%]" /> -->
			<div class="flex w-[75%]  flex-col">
				<p class="font-Poppins text-xl xs:text-lg font-bold text-[#fafafa]">Database Design and Management</p>
				<p class=" font-OpenSans text-slate-300 xs:text-base line-clamp-3">
					Clean, Performant & robust database designing, maintaining & migration
					<!-- High-quality development of sites at the professional level. -->
				</p>
			</div>
		</div>
		<!-- CLI -->
		<div
			class="mt-5 flex h-[142px] w-[406px] flex-row  items-center justify-center gap-5 rounded-2xl border-[1px] border-gray-700 bg-[#343434] bg-opacity-25 "
			style=" background-color: #212123 ; box-radius:16px; box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.15); background:linear-gradient(135deg, #404040 0%, rgba(64, 64, 64, 0) 48.44%);box-sizing:border-box; margin-right:2rm "
		>
			<Terminal class=" -mt-4 -mr-3  h-[60px] w-[60px]  fill-[#ffdb70]" />
			<div class="flex w-[75%]  flex-col">
				<p class="font-Poppins text-xl xs:text-lg font-bold text-[#fafafa]">Golang CLI Application</p>
				<p class=" font-OpenSans text-slate-300 xs:text-base line-clamp-3">
					Beautify, concise, clean CLI application development using Go
				</p>
			</div>
		</div>
		<!-- Docker -->
		<div
			class="mt-5 flex h-[142px] w-[406px] flex-row  items-center justify-center gap-5 rounded-2xl border-[1px] border-gray-700 bg-[#343434] bg-opacity-25 "
			style=" background-color: #212123 ; box-radius:16px; box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.15); background:linear-gradient(135deg, #404040 0%, rgba(64, 64, 64, 0) 48.44%);box-sizing:border-box; margin-right:2rm "
		>
			<Docker2 class="-mt-4 -mr-1 h-[60px]  w-[60px] fill-[#ffdb70]  " />
			<div class="flex w-[75%]  flex-col">
				<p class="font-Poppins text-xl xs:text-lg font-bold text-[#fafafa]">Docker Images</p>
				<p class=" font-OpenSans text-slate-300 xs:text-base line-clamp-3">
					Secure, Small, multi stage portable docker & docker compose images 
				</p>
			</div>
		</div>
		<!-- kubernetes -->
		<div
			class="mt-5 flex h-[142px] w-[406px] flex-row  items-center justify-center gap-5 rounded-2xl border-[1px] border-gray-700 bg-[#343434] bg-opacity-25 "
			style=" background-color: #212123 ; box-radius:16px; box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.15); background:linear-gradient(135deg, #404040 0%, rgba(64, 64, 64, 0) 48.44%);box-sizing:border-box; margin-right:2rm "
		>
			<K8s2 class=" -mt-4 h-[50px] w-[50px] fill-[#ffdb70]   stroke-0" />
			<div class="flex w-[75%]  flex-col">
				<p class="font-Poppins text-xl xs:text-lg font-bold text-[#fafafa]">
					Kubernetes Container Orchestration
				</p>
				<p class=" font-OpenSans text-slate-300 xs:text-base line-clamp-3">
					Secure , Scalable and Deployable Kubernetes configaration 
				</p>
			</div>
		</div>
		
	</div>
	<p class="mt-10 ml-8 xs:-ml-0  font-Poppins text-3xl xs:text-2xl xs:self-center font-bold text-[#fafafa]">Technology Stack</p>
	<div class=" mt-5 ml-2 mr-2 mb-3 xs:ml-0 xs:mb-3 sm:-ml-2 lg:mb-10 flex flex-row flex-wrap items-center justify-center space-x-10 sm:space-x-8 space-y-4 lg:flex-wrap">
		<Golang on:click={()=>{goto("https://pkg.go.dev/std")}} class=" hover:cursor-pointer h-16 w-32  fill-sky-400 " />
		<Ts class="h-16 w-16 " />
		<Python class="h-16 w-16 " /> 
		<Bash class="h-20  w-20 scale-150" />
		<C class=" h-16 w-20 " />
		<Cpp class="h-16 w-20" />
		<Rust class="h-16 w-16" />
		<Svelte class=" mx-5 h-fit w-12" />
		<DockerImage class=" h-fit w-20 " />
		<K8s class="h-16 w-16 " />
		<Github class="  h-16 w-16 fill-slate-50 " />
		<Gcp2 class="h-16 w-20" />
		<Azure class="h-16 w-20" />
		<Devops class="h-16 w-20" />
		<Postgres  class="h-16 w-20" />
		<Mongo class="h-16 w-20" />
		<Mysql  class="h-16 w-20" />
		<Redis  class="h-16 w-20" />
	</div>
</div>

<style>
</style>
