
<script lang="ts">
    import Sent from "$lib/svgs/sent.svelte";

    let MyMessage={
        "name":"",
        "email":"",
        "message":""
    }
    const ValidateEmail = (E: string) => {
		return String(E)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
    function ValidateUserName(e: string) {
		return e.match(/^[a-zA-Z\s]*$/);
	}
    let errormsg=false 

    function ErrorCheck(){
      
        if ( ValidateEmail(MyMessage.email) && ValidateUserName(MyMessage.name) && MyMessage.email.trim()!="" && MyMessage.message.trim()!="" && MyMessage.name.trim()!="" ){
            errormsg=false 
            console.log("OK boss")
        }else {
            errormsg=true 
        }
    }

</script>

<style>

</style>

<div class="flex h-full w-full flex-col ">
    <p class=" -mt-5 ml-8 font-Poppins text-3xl font-bold text-[#fafafa] ">Contact</p>
	<div class=" mt-3 ml-8 h-[5px] w-12 rounded-xl bg-gradient-to-r from-[#fbd66d] to-[#ffbc5d]" />

    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.13673771221!2d90.41932575!3d23.780636450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1658218094788!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
    <div class="h-fit w-full mt-5 flex justify-center">

        <iframe  class=" w-[90%] rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.13673771221!2d90.41932575!3d23.780636450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1658218094788!5m2!1sen!2sbd" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <p class=" mt-5 ml-8 font-Poppins text-2xl font-bold text-[#fafafa] ">Contact Form</p>

    <div class=" mt-5 w-[90%] flex flex-row justify-start">
        <div class="flex flex-col  ">
            <div class=" ml-8 mt-2 self-start text-left text-base font-semibold text-gray-300 ">
                User Name :
            </div>
            <input
            bind:value={MyMessage.name}
                    placeholder="Your Name"
                    type="text"
                    class=" ml-6 mt-2 h-12 w-[415px] self-center rounded-2xl border-2 border-[#24262b] bg-[#303338]  p-4 text-lg font-medium text-[#98999e] outline-0 focus:outline-0  focus:border-[#ffcd37]  font-OpenSans "
                />
        </div>
        <div class="flex flex-col  ">
            <div class=" ml-8 mt-2 self-start text-left text-base font-semibold text-gray-300 ">
                Email :
            </div>
            <input
                    bind:value={MyMessage.email}
                    placeholder="Email Address"
                    type="email"
                    class=" ml-6 mt-2 h-12 w-[415px] self-center rounded-2xl border-2 border-[#24262b] bg-[#303338]  p-4 text-lg font-medium text-[#98999e] outline-0 focus:outline-0  focus:border-[#ffcd37]  font-OpenSans "
                />
        </div>
    </div>
  
        <div class="flex flex-col justify-center w-full ">
            <div class=" ml-8 mt-2 self-start text-left text-base font-semibold text-gray-300 ">
                Your Message :
            </div>
            <textarea
            bind:value="{MyMessage.message}"
                    placeholder="Write Your Message"
                    type="text"
                    class="  mt-2  h-80 w-[95%] self-center rounded-2xl border-2 border-[#24262b] bg-[#303338]  p-4 text-lg font-medium text-[#98999e] outline-0 focus:outline-0  focus:border-[#ffcd37]  font-OpenSans "
                />
        </div>
        
        <div class="flex flex-row items-center">
        <div
        on:click="{()=>{ErrorCheck()}}"
            class=" flex gap-2 mt-4  ml-8 h-fit font-OpenSans bg-[#212123] hover:bg-slate-800 transition-all duration-150 hover:cursor-pointer  w-fit p-4 text-[#ffdb70]  rounded-2xl "
            style=" align-items: center; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
        >
        <Sent class="h-6 w-6 fill-[#ffdb70]"/>
            Send message
        </div>

        {#if errormsg}
					<div class=" mt-4 ml-8 inline-flex ">
						<svg
							class="h-5 w-5  fill-red-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
								clip-rule="evenodd"
							/></svg
						>
						<p class="text-sm text-red-300 ">email/username is invalid</p>
					</div>
				{:else}
					<!-- else content here -->
				{/if}
    </div>

</div>
