
<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Contact <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>      
      
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                  item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                  in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <img :src="nb_1" alt="" class="absolute w-auto  object-cover" style="height: 42rem; z-index: -100; margin-left: -200px; margin-top: 7rem;">
      <img :src="nb_2" alt="" class="absolute w-auto  object-cover" style="height: 36rem; z-index: -100; margin-left: 1300px; margin-top: 13rem;">
      <img :src="nb_3" alt="" class="absolute w-auto  object-cover opacity-50" style="height: 70rem; z-index: -100; margin-left: 350px; margin-top: -21rem;">

      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 -mt-16 ">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">

        </div>
        <div class="text-center">
          <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Web Port-Folio</h1>
          <p class="mt-8 text-pretty text-lg font-medium text-black sm:text-xl/8 kanit-regular">
            This is a website created to store JayZcodeditor's work. </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">Get
              started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span
                aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>


<!-- เกี่ยวกับฉัน -->
  <div class="bg-white" id="About">
    <div class="pt-6 grid grid-cols-1 lg:grid-cols-2 mt-40">      
      <!-- Image gallery -->
      <div class="mx-[15%] mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2  lg:gap-x-8 lg:px-8">
        <div class="aspect-h-3 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img :src="product.images[0].src" :alt="product.images[0].alt" class="h-full w-full object-cover object-center" />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img :src="product.images[1].src" :alt="product.images[1].alt" class="h-full w-full object-cover object-center" />
          </div>
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img :src="product.images[2].src" :alt="product.images[2].alt" class="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>

      <!-- Product info -->
      <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 mt-56">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>
        </div>


        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900 text-left">{{ product.description }}</p>
            </div>
          </div>

        

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Hobby</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- งานที่ผ่านมา -->
  <div class="bg-white mt-10" id="Work">
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl kanit-semibold">Past work</h2>
        <p class="mt-4 text-gray-500"></p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
  <img :src="cp_1"
       alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
       class="item-tl rounded-lg bg-gray-100" />
  
  <img :src="fn_1"
       alt="Top down view of walnut card tray with embedded magnets and card groove."
       class="item-tr rounded-lg bg-gray-100" />
  
  <img :src="da_1"
       alt="Side of walnut card tray with card groove and recessed card area."
       class="item-bl rounded-lg bg-gray-100" />
  
  <img :src="ux_1"
       alt="Walnut card tray filled with cards and card angled in dedicated groove."
       class="item-br rounded-lg bg-gray-100" />
</div>

    </div>
  </div>

<!-- เครื่องมือที่เกี่ยวข้อง -->
  <div class="bg-white py-24 sm:py-32 -pt-40" id="Framework">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-2xl font-bold leading-8 text-gray-900">Related tools and frameworks</h2>
      <div class="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" :src="l1" alt="Transistor" width="158" height="158" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" :src="l2" alt="Reform" width="158" height="158" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" :src="l3" alt="Tuple" width="158" height="158" />
        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" :src="l4" alt="SavvyCal" width="158" height="158" />
        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" :src="l5" alt="Statamic" width="158" height="158" />
        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" :src="l6" alt="Statamic" width="158" height="158" />
      </div>
    </div>
  </div>

  <!-- <div class="bg-white py-24 sm:py-32 -mt-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Everything you need to deploy your app</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div> -->

  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-2 items-center mx-auto lg:mx-0">
  <!-- คอลัมน์ซ้าย -->
  <div>
    <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-left">From the blog</h2>
    <p class="mt-2 text-lg leading-8 text-gray-600 text-left">
      Learn how to grow your business with our expert advice.
    </p>
  </div>

  <!-- คอลัมน์ขวา -->
  <div class="text-right">
    <button @click="openModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Comment
    </button>
  </div>
</div>

 <!-- Modal -->
 <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div class="bg-white p-5 rounded-lg shadow-lg w-1/2">
      <h2 class="text-xl font-semibold mb-4">Add your comment</h2>
      
<!-- Form -->
<form @submit.prevent="submitComment">
  <!-- Title -->
  <div class="mb-4">
    <label for="title" class="block text-gray-700">Title:</label>
    <input 
      id="title" 
      v-model="title" 
      type="text" 
      class="mt-1 block w-full p-2 border rounded" 
      required 
    />
  </div>

  <!-- Comment -->
  <div class="mb-4">
    <label for="comment" class="block text-gray-700">Comment:</label>
    <textarea 
      id="comment" 
      v-model="comment" 
      class="mt-1 block w-full p-2 border rounded" 
      rows="4" 
      required>
    </textarea>
  </div>

  <!-- Name -->
  <div class="mb-4">
    <label for="name" class="block text-gray-700">Name:</label>
    <input 
      id="name" 
      v-model="name" 
      type="text" 
      class="mt-1 block w-full p-2 border rounded" 
      required 
    />
  </div>

  <!-- Gmail -->
  <div class="mb-4">
    <label for="gmail" class="block text-gray-700">Gmail:</label>
    <input 
      id="gmail" 
      v-model="gmail" 
      type="email" 
      class="mt-1 block w-full p-2 border rounded" 
      required 
    />
  </div>

  <!-- Buttons -->
  <div class="flex justify-end">
    <button @click="closeModal" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2">Close</button>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
  </div>
</form>


    </div>
  </div>

  <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
  <article v-for="post in posts" :key="post._id" class="flex max-w-xl flex-col items-start justify-between">
    <div class="flex items-center gap-x-4 text-xs">
      <!-- แสดงเวลาโพสต์ -->
      <time :datetime="post.time_stamp" class="text-gray-500">{{ post.time_stamp }}</time>
      <!-- แสดงหัวข้อของโพสต์ -->
      <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.title }}</a>
    </div>
    <div class="group relative">
      <!-- แสดงคอมเมนต์ -->
      <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <span class="absolute inset-0"></span>
        {{ post.comment }}
      </h3>
      <!-- แสดงชื่อและอีเมลผู้โพสต์ -->
      <p class="mt-5 text-sm leading-6 text-gray-600">Posted by: {{ post.name }} | Gmail: {{ post.gmail }}</p>
    </div>
  </article>
</div>

    </div>
  </div>

  <!-- งานที่หา -->
  <div id="Applicant" class="pt-40">
    <div class=" sm:px-0">
      <h3 class="text-2xl font-bold leading-7 text-gray-900">Applicant Information</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Mr. Thammakit Chotchuang</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Full Stack Developer</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Jthammakit2546@gmail.com</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">฿22,000</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">I am interested in work related to frontend and backend, and in the visualization and backend work that involves complex methods.</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
          <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
              <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div class="flex w- flex-1 items-center">
                  <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <div class="ml-4 flex flex-1 gap-2">
                    <span class="truncate font-medium">resume_Thammakit.pdf</span>
                    <span class="flex-shrink-0 text-gray-400">211 KB </span>
                  </div>
                </div>
                <div class="ml-4 flex-shrink-0">
        <a href="#" @click.prevent="downloadFile" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
      </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>



  <Footer />


</template>

<script setup>








const isModalOpen = ref(false)

// สร้างตัวแปรเก็บข้อมูลจากฟอร์ม
const title = ref('')
const comment = ref('')
const name = ref('')
const gmail = ref('')

// ฟังก์ชันเปิด modal
const openModal = () => {
  isModalOpen.value = true
}

// ฟังก์ชันปิด modal
const closeModal = () => {
  isModalOpen.value = false
}

// ข้อความแสดงผลลัพธ์จากการเชื่อมต่อ
const message = ref('');
const error = ref('');

const submitComment = async () => {
  try {
    // ส่งข้อมูลไปยัง backend โดยใช้ fetch
    const response = await fetch('http://localhost:4000/api/submit-form', {
      method: 'POST', // กำหนดให้ใช้ method POST
      headers: {
        'Content-Type': 'application/json', // กำหนด header ให้เป็น JSON
      },
      body: JSON.stringify({
        title: title.value,
        name: name.value,
        gmail: gmail.value,
        comment: comment.value,
      }), // เปลี่ยนข้อมูลในฟอร์มเป็น JSON ก่อนส่งไปยัง backend
    });

    // ตรวจสอบการตอบกลับจาก backend
    if (response.ok) {
      const responseData = await response.json(); // แปลงการตอบกลับเป็น JSON
      // แสดง SweetAlert แจ้งเตือนการบันทึกข้อมูลสำเร็จ
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Comment has been submitted successfully!',
        confirmButtonText: 'OK'
      });
      closeModal()
      message.value = 'Data saved successfully!'; // ข้อความแสดงว่าการบันทึกสำเร็จ
      error.value = ''; // ล้างข้อความแสดงข้อผิดพลาด
      fetchComments()

    } else {
      throw new Error('Unexpected response from the server');
    }

    // เคลียร์ข้อมูลในฟอร์ม
    title.value = '';
    name.value = '';
    gmail.value = '';
    comment.value = '';
  } catch (err) {
    // จับข้อผิดพลาดหากการเชื่อมต่อล้มเหลว
    console.error('Error submitting comment:', err);
    error.value = `Error: ${err.message}`;
    message.value = ''; // ล้างข้อความแสดงผลสำเร็จ
  }
};




const downloadFile = () => {
  const fileUrl = pdf; // Path relative to the public folder
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', 'resume_thammakit_full_stack_developer.pdf'); // Specify the file name for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // Clean up
};


import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { PaperClipIcon } from '@heroicons/vue/20/solid'
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar.vue'
import Footer from '../components/footer.vue'

const mobileMenuOpen = ref(false)

import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'

// นำเข้าภาพจาก assets
import pdf from '../assets/Resume/resume_thammakit_full_stack_developer.pdf'

import image1 from '../assets/image/4.jpg';
import image2 from '../assets/image/1.jpg';
import image3 from '../assets/image/3.jpg';

import cp_1 from '../assets/image/CP_system/Screenshot 2024-10-23 121857.png'
import fn_1 from '../assets/image/final_Project/image (1).png'
import da_1 from '../assets/image/Data_analysis/Screenshot 2024-10-23 123951.png'
import ux_1 from '../assets/image/ux_design/Screenshot 2024-10-23 124149.png'

import nb_1 from '../assets/image/nonbg.png'
import nb_2 from '../assets/image/nonbg2.png'
import nb_3 from '../assets/image/nonbg3.png'


import l1 from '../assets/image/logoicon/Tailwind_CSS.png'
import l2 from '../assets/image/logoicon/vue.png'
import l3 from '../assets/image/logoicon/React.png'
import l4 from '../assets/image/logoicon/nextjs.png'
import l5 from '../assets/image/logoicon/Docker.png'
import l6 from '../assets/image/logoicon/php.png'


const product = {
  name: 'Thammakit Chotchuang',
  images: [
    {
      src: image1,
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: image2,
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: image3,
      alt: 'Model wearing plain gray basic tee.',
    }
  ],
  description:
    '    Thammakit Chotchuang is a motivated informatics graduate who is passionate about programming, web development, IoT, and AI. He possesses strong skills in database management, UX/UI design, and Web application development. Known for his analytical mindset, he enjoys solving complex problems and actively seeks new knowledge to enhance his expertise continuously.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'Listen to music, play games, watch movies and read books.',
}

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Web Application',
    description:
      'Vue React Javascript TypeScript Tailwind Bootstrap Vite',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'IoT & ML',
    description:
      'Micropython Python ESP32 Adafruit MLX90640 CNN-LSTM Algorithm / Data augmentation',
    icon: LockClosedIcon,
  },
  {
    name: 'Data Analysis',
    description:
      'Power BI / Kibana  SQL, NoSQL, MongoDB, SQL server, MySQL, Oracle',
    icon: ArrowPathIcon,
  },
  {
    name: 'UX/UI Design',
    description:
      'Figma Canva ',
    icon: FingerPrintIcon,
  },
]
import { ref, onMounted } from 'vue';

// ฟังก์ชันดึงข้อมูลจาก MongoDB
const fetchComments = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/comments');
    if (response.ok) {
      const data = await response.json();
      posts.value = data.data; // เก็บข้อมูลที่ดึงมาในตัวแปร 'comments'
    } else {
      console.error('Error fetching comments:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

// เรียกฟังก์ชัน fetchComments เมื่อ component ถูก mount
onMounted(() => {
  fetchComments();
});

const navigation = [
  { name: 'About', href: '#About', current: true },
  { name: 'Work', href: '#Work', current: false },
  { name: 'Framework', href: '#Framework', current: false },
  { name: 'Applicant', href: '#Applicant', current: false },
]

const posts = ref([]);

console.log()

</script>


<style scoped>
.item-tl {
  width: 300px;
  transition: 0.5s cubic-bezier(0.85, -1.38, .03, 1.54);
  transform-origin: top left; /* ขยายจากมุมบนซ้าย */
}

.item-tr {
  width: 300px;
  transition: 0.5s cubic-bezier(0.85, -1.38, .03, 1.54);
  transform-origin: top right; /* ขยายจากมุมบนขวา */
}

.item-bl {
  width: 300px;
  transition: 0.5s cubic-bezier(0.85, -1.38, .03, 1.54);
  transform-origin: bottom left; /* ขยายจากมุมล่างซ้าย */
}

.item-br {
  width: 300px;
  transition: 0.5s cubic-bezier(0.85, -1.38, .03, 1.54);
  transform-origin: bottom right; /* ขยายจากมุมล่างขวา */
}

.item-tl:hover,
.item-tr:hover,
.item-bl:hover,
.item-br:hover {
  transform: scale(2.2); /* ขยายขนาด 2.2 เท่า */
}

html {
  scroll-behavior: smooth;
}
</style>