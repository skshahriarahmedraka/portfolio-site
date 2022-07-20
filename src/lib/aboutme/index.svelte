<script lang="ts">
import Code from "$lib/svgs/code.svelte"
import Design from "$lib/svgs/design.svelte";
import Docker2 from "$lib/svgs/docker2.svelte";
import Golang from "$lib/techImages/go.svelte"
import K8s2 from "$lib/svgs/k8s2.svelte";
import Mobile2 from "$lib/svgs/mobile2.svelte";
import Terminal from "$lib/svgs/terminal.svelte";
import Github from "$lib/techImages/github2.svelte";
import Svelte from "$lib/techImages/svelte.svelte";
import DockerImage from "$lib/techImages/docker2.svelte"
import Gcp2 from "$lib/techImages/gcp4.svelte";
import Azure from "$lib/techImages/azure.svelte";
import Bash from "$lib/techImages/bash.svelte";
import C from "$lib/techImages/c.svelte";
import Cpp from "$lib/techImages/cpp.svelte";
import K8s from "$lib/techImages/k8s.svelte";
import Rust from "$lib/techImages/rust.svelte";
</script>

<div class=" flex h-full w-full flex-col  ">
	<p class=" -mt-5 ml-8 font-Poppins text-3xl font-bold text-[#fafafa] ">About Me</p>
	<div class=" mt-3 ml-8 h-[5px] w-12 rounded-xl bg-gradient-to-r from-[#fbd66d] to-[#ffbc5d]" />
	<p class=" ml-8 mt-8  h-fit w-[90%] font-OpenSans text-[#fafafa] ">
		I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and
		print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
		<br />
		<br />
	</p>
	<p class="ml-8 h-fit w-[90%] font-OpenSans text-[#fafafa]  ">
		My job is to build your website so that it is functional and user-friendly but at the same time
		attractive. Moreover, I add personal touch to your product and make sure that is eye-catching
		and easy to use. My aim is to bring across your message and identity in the most creative way. I
		created web design for many famous brand companies.
	</p>
	<p class="mt-5 ml-8 font-Poppins text-3xl font-bold text-[#fafafa]">What I'm Doing</p>
	<div class="flex flex-row flex-wrap  justify-center ">
		<div
			class="flex flex-row justify-center gap-5 items-center mt-5 h-[142px] w-[406px] rounded-2xl bg-[#343434] "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<Design class=" -mt-8 w-[10%]"/>
			<div class="flex flex-col  w-[70%]">
				<p class="font-Poppins text-xl font-bold text-[#fafafa]">Web Frontend development</p> 
				<p class=" text-slate-300 font-OpenSans">High-quality development of sites at the professional level.</p>
			</div>
		</div>
        <div
			class="flex flex-row justify-center gap-5 ml-5 items-center mt-5 h-[142px] w-[406px] rounded-2xl bg-[#343434] "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<Code class=" -mt-8 w-[10%]"/>
			<div class="flex flex-col  w-[70%]">
				<p class="font-Poppins text-xl font-bold text-[#fafafa]">Web Backend development</p> 
				<p class=" text-slate-300 font-OpenSans">High-quality development of sites at the professional level.</p>
			</div>
		</div>
		<div
			class="flex flex-row justify-center gap-5 items-center mt-5 h-[142px] w-[406px] rounded-2xl bg-[#343434] "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<Mobile2 class=" -mt-8 w-[10%]"/>
			<div class="flex flex-col  w-[70%]">
				<p class="font-Poppins text-xl font-bold text-[#fafafa]">Hybrid Mobile development</p> 
				<p class=" text-slate-300 font-OpenSans">High-quality development of sites at the professional level.</p>
			</div>
		</div>
		<div
			class="flex flex-row justify-center gap-5 ml-5 items-center mt-5 h-[142px] w-[406px] rounded-2xl bg-[#343434] "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<Terminal class=" h-[60px] w-[60px]  fill-[#ffdb70] -mt-4  -mr-3"/>
			<div class="flex flex-col  w-[70%]">
				<p class="font-Poppins text-xl font-bold text-[#fafafa]">Golang CLI Application</p> 
				<p class=" text-slate-300 font-OpenSans">High-quality development of sites at the professional level.</p>
			</div>
		</div>
		<div
			class="flex flex-row justify-center gap-5 items-center mt-5 h-[142px] w-[406px] rounded-2xl bg-[#343434] "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<Docker2 class="h-[60px] w-[60px] -mt-4  -mr-1 fill-[#ffdb70]  "/>
			<div class="flex flex-col  w-[70%]">
				<p class="font-Poppins text-xl font-bold text-[#fafafa]">Docker Images</p> 
				<p class=" text-slate-300 font-OpenSans">High-quality development of sites at the professional level.</p>
			</div>
		</div>
		<div
			class="flex flex-row justify-center gap-5 items-center ml-5 mt-5 h-[142px] w-[406px] rounded-2xl bg-[#343434] "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<K8s2 class=" h-[50px] w-[50px] stroke-0 -mt-4   fill-[#ffdb70]"/>
			<div class="flex flex-col  w-[70%]">
				<p class="font-Poppins text-xl font-bold text-[#fafafa]">Kubernetes Container Orchestration</p> 
				<p class=" text-slate-300 font-OpenSans">High-quality development of sites at the professional level.</p>
			</div>
		</div>
		
	</div>
	<p class="mt-10 ml-8   font-Poppins text-3xl font-bold text-[#fafafa]">Technology Stack</p>
	<div class=" mt-5 ml-8 flex flex-row flex-wrap space-x-10 justify-center items-center space-y-4">
		<Golang class=" fill-sky-400 h-16 w-36 "/>
		<Github class=" fill-slate-50 h-16 w-16 "/>
		<Svelte class=" w-12 mx-5 h-fit"/>
		<DockerImage class=" h-fit w-20 "/>
		<K8s class="h-16 w-16 "/>
		<Gcp2 class="h-16 w-20"/>
		<Azure class="h-16 w-20"/>
		<Bash class="h-20  scale-150 w-20"/>
		<C class=" h-16 w-20 "/>
		<Cpp class="h-16 w-20"/>
		<Rust class="h-16 w-16"/>
		
	</div>
</div>

<style>
</style>
