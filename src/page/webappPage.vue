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
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>


      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>

  <div class="w-full">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900">Related the Web Application</h2>

        <div class="mt-10 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
          <div v-for="callout in callouts" :key="callout.name" class="group relative p-2">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img 
                :src="Array.isArray(callout.imageSrc) ? callout.imageSrc[0] : callout.imageSrc" 
                :alt="callout.imageAlt" 
                class="h-full w-full object-cover object-center cursor-pointer" 
                @click="openModal(callout)"
              />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a :href="callout.href">
                <span class="absolute inset-0" @click="openModal(callout)"/>
                {{ callout.name }}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal -->
  <TransitionRoot as="template" :show="open">
  <Dialog class="relative z-10" @close="open = false">
    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    </TransitionChild>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl"> <!-- Increased max-width to 4xl -->
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left align-center">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">{{ selectedCallout.name }}</DialogTitle>
                  <div class="mt-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      <img 
                        v-for="(img, index) in selectedCallout.imageSrc" 
                        :key="index" 
                        :src="img" 
                        :alt="selectedCallout.imageAlt" 
                        class="h-64 w-full object-cover object-center item" 
                      />
                    </div>
                  </div>
                  <div class="mt-4">
                    <p class="text-sm text-gray-500">{{ selectedCallout.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</TransitionRoot>


</template>

<script setup>
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline';

const open = ref(false);  // Modal open state
const selectedCallout = ref({
  name: '',
  description: '',
  imageSrc: [],
  imageAlt: '',
});

// Navigation items
const navigation = [
  { name: 'Profile', href: '#Profile', current: true },
  { name: 'Interest', href: '#Interest', current: false },
  { name: 'Projects', href: '#Projects', current: false },
  { name: 'Hobby', href: '#Hobby', current: false },
];

import cp_1 from '../assets/image/Camping/Screenshot 2024-10-23 134443.png';
import cp_2 from '../assets/image/Camping/Screenshot 2024-10-23 135014.png';
import cp_3 from '../assets/image/Camping/Screenshot 2024-10-23 135108.png';

// Callout items
const callouts = [
  {
    name: 'Booking CampingGround',
    description: 'The online tent booking system is designed to facilitate easy reservation of tents for various events. Utilizing HTML, CSS, and JavaScript, the platform provides a user-friendly interface where customers can search for available tents, view their details, and make bookings through a simple form. JSON Server serves as a mock database, enabling CRUD operations for tent and booking data. This responsive web application ensures seamless navigation across devices, enhancing the user experience while streamlining the booking process for customers.',
    imageSrc: [cp_1, cp_2, cp_3],
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Movie App Layout',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'E-PriceSync',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'E-Business Card',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

const mobileMenuOpen = ref(false);

// Function to open the modal with the selected callout
function openModal(callout) {
  console.log("click แล้ว");
  selectedCallout.value = callout; // Set the selected callout
  open.value = true; // Open the modal
}
</script>

<style scoped>
.item {
  width: 45rem; /* Initial width */
  transition: 0.5s cubic-bezier(.87, -1.38,.03,1.54); /* Smooth transition */
}
.item:hover {
  width: 60rem; /* Width on hover */
}
</style>
