<script setup>
import { ref, onMounted } from 'vue'
</script>

<template>
<h1 class="text-3xl font-bold mb-4">Overview orders of this week</h1>
        <div class="order" v-for="order in orders" :key="order.id">
            <h2>Order {{ order.id }}</h2>
            <p>Order date: {{ order.order_date }}</p>
            <p>Order status: {{ order.status }}</p>
            <p>Order price: {{ order.price }}</p>
            <p>Order user: {{ order.user_id }}</p>
            <p>Order sneaker: {{ order.sneaker_id }}</p>
    </div>
    <!DOCTYPE html>
<html :class="{ 'theme-dark': dark }" x-data="data()" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/tailwind.output.css" />
  </head>
  <body>
    <h3><a href="/#/Orders/:id">View order</a></h3>
 
        <main class="h-full pb-16 overflow-y-auto ">
          <div class="container grid px-6 mx-auto">
           

          
            <!-- With actions -->
            <h2 class="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-300">
              Order Dashboard
            </h2>
            <div class="mt-4">
              <div class="flex flex-wrap -mx-6 bg-69FF47">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div class="flex items-center px-5 py-6 bg-69FF47 shadow-sm">
                <div class="p-3 bg-1C1B1F bg-opacity-75">
                    <svg class="w-8 h-8 text-FFFFFF " viewBox="0 0 28 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                            fill="currentColor"></path>
                        <path
                            d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                            fill="currentColor"></path>
                        <path
                            d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                            fill="currentColor"></path>
                        <path
                            d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                            fill="currentColor"></path>
                        <path
                            d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                            fill="currentColor"></path>
                        <path
                            d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                            fill="currentColor"></path>
                    </svg>
                </div>

                <div class="mx-5 bg-69FF47">
                    <h4 class="text-2xl font-semibold  text-FFFFFF bg-69FF47">8,282</h4>
                    <div class="text-FFFFFF bg-69FF47">New Users</div>
                </div>
            </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0 ">
            <div class="flex items-center px-5 py-6 bg-69FF47 shadow-sm">
                <div class="p-3 bg-FFFFFF bg-opacity-75 full">
                    <svg class="w-8 h-8 text-1C1B1F" viewBox="0 0 28 28" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                            fill="currentColor"></path>
                        <path
                            d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                            fill="currentColor"></path>
                        <path
                            d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                            fill="currentColor"></path>
                    </svg>
                </div>

                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-1C1B1F">200,521</h4>
                    <div class="text-1C1B1F">Total Orders</div>
                </div>
            </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div class="flex items-center px-5 py-6 bg-69FF47">
                <div class="p-3 bg-69FF47 bg-opacity-75">
                    <svg class="w-8 h-8 text-FFFFFF" viewBox="0 0 28 28" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor"
                            stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                        <path
                            d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                            stroke="currentColor" stroke-width="2"></path>
                    </svg>
                </div>

                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-FFFFFF">215,542</h4>
                    <div class="text-FFFFFF">Available Products</div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full overflow-hidden shadow-xs">
        <div class="w-full overflow-hidden shadow-xs">
            <div class="w-full overflow-x-auto">
                <table class="w-full mb-4 whitespace-no-wrap bg-FFFFFF border border-gray-300 shadow-md"
                    style="table-layout: fixed;">
                    <thead>
                        <tr class="text-xs font-semibold tracking-wide text-left text-gray-800 uppercase border-b bg-1C1B1F">
                            <th class="px-8 py-3">Client</th>
                            <th class="px-8 py-3">Amount</th>
                            <th class="px-8 py-3">Status</th>
                            <th class="px-8 py-3">Date</th>
                            <th class="px-8 py-3">Visibility</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>

    <div class="w-full max-w-full">
  <table class="w-full" style="table-layout: fixed;">
    <tr class="text-gray-700 dark:text-gray-400">
      <td class="px-8 py-4">
        <div class="flex items-center text-sm">
          <div>
            <a href="/#/Orders/456789" class="font-semibold">Order #456789</a>
          </div>
        </div>
      </td>
      <td class="px-8 py-4 text-sm">€ 863.45</td>
      <td class="px-8 py-4 text-xs relative">
        <div x-data="{ open: false }">
          <button @click="open = !open" type="button" class="inline-flex items-center justify-between px-3 py-1 font-semibold leading-tight text-slate-800 bg-green-100 dark:bg-green-700 dark:text-green-100 focus:outline-none">
            Approved

            <svg class="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </button>

          <div x-show="open" @click.away="open = false" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
            <div class="rounded-md bg-white shadow-xs">
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Approved</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Pending</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Denied</a>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td class="px-8 py-4 text-sm">12/01/2023</td>
      <td class="px-8 py-4">
        <div class="flex items-center space-x-4 text-sm">
          <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-69FF47 dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="View" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#69FF47">
              <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  </table>
</div>


  <div class="w-full max-w-full">
    <table class="w-full" style="table-layout: fixed;">
      <tr class="text-gray-700 dark:text-gray-400">
        <td class="px-8 py-3">
          <div class="flex items-center text-sm">
            <div>
              <a href="/#/Orders/987123" class="font-semibold">Order #987123</a>
            </div>
          </div>
        </td>
        <td class="px-8 py-3 text-sm">€ 369.95</td>
        <td class="px-8 py-3 text-xs">
          <span class="px-3 py-1 font-semibold leading-tight text-orange-700 bg-orange-100  dark:text-white dark:bg-orange-600">Pending</span>
        </td>
        <td class="px-8 py-3 text-sm">12/01/2023</td>
        <td class="px-8 py-3">
          <div class="flex items-center space-x-4 text-sm">
            <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-69FF47 dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="View" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#69FF47">
              <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>
          </button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>
                    



<div class="w-full max-w-full">
  <table class="w-full" style="table-layout: fixed;">
    <tr class="text-gray-700 dark:text-gray-400">
      <td class="px-8 py-4">
        <div class="flex items-center text-sm">
          <div>
            <a href="/#/Orders/987654" class="font-semibold">Order #987654</a>
          </div>
        </div>
      </td>
      <td class="px-8 py-4 text-sm">€ 1276.45</td>
      <td class="px-8 py-4 text-xs">
        <span class="px-3 py-1 font-semibold leading-tight text-slate-800 bg-green-100 dark:bg-green-700 dark:text-green-100">Approved</span>
      </td>
      <td class="px-8 py-4 text-sm">12/01/2023</td>
      <td class="px-8 py-4">
        <div class="flex items-center space-x-4 text-sm">
          <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-69FF47 dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="View" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#69FF47">
              <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>
          </button>
        </div>
      </td>
    </tr>

    <tr class="text-gray-700 dark:text-gray-400">
      <td class="px-8 py-4">
        <div class="flex items-center text-sm">
          <div>
            <a href="/#/Orders/135792" class="font-semibold">Order #135792</a>
          </div>
        </div>
      </td>
      <td class="px-8 py-4 text-sm">€73.99</td>
      <td class="px-8 py-4 text-xs">
        <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700">Denied</span>
      </td>
      <td class="px-8 py-4 text-sm">12/01/2023</td>
      <td class="px-8 py-4">
        <div class="flex items-center space-x-4 text-sm">
          <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-69FF47 dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="View" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#69FF47">
              <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  </table>
</div>

                    

<div class="w-full max-w-full">
  <table class="w-full" style="table-layout: fixed;">
    <tr class="text-gray-700 dark:text-gray-400">
      <td class="px-8 py-4">
        <div class="flex items-center text-sm">
          <div>
            <a href="/#/Orders/135792" class="font-semibold">Order #135792</a>
          </div>
        </div>
      </td>
      <td class="px-8 py-4 text-sm">€ 863.45</td>
      <td class="px-8 py-4 text-xs">
        <span class="px-3 py-1 font-semibold leading-tight text-slate-800 bg-green-100 dark:bg-green-700 dark:text-green-100">Approved</span>
      </td>
      <td class="px-8 py-4 text-sm">12/01/2023</td>
      <td class="px-8 py-4">
        <div class="flex items-center space-x-4 text-sm">
          <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-69FF47 dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="View" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#69FF47">
              <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>
          </button>
        </div>
      </td>
    </tr>

    <tr class="text-gray-700 dark:text-gray-400">
      <td class="px-8 py-4">
        <div class="flex items-center text-sm">
          <div>
            <a href="/#/Orders/987654" class="font-semibold">Order #987654</a>
          </div>
        </div>
      </td>
      <td class="px-8 py-4 text-sm">€ 863.45</td>
      <td class="px-8 py-4 text-xs">
        <span class="px-3 py-1 font-semibold leading-tight text-slate-800 bg-green-100 dark:bg-green-700 dark:text-green-100">Approved</span>
      </td>
      <td class="px-8 py-4 text-sm">12/01/2023</td>
      <td class="px-8 py-4">
        <div class="flex items-center space-x-4 text-sm">
          <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-69FF47 dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="View" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#69FF47">
              <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>
          </button>
        </div>
      </td>
    </tr>

    <tr class="text-gray-700 dark:text-gray-400">
      <td class="px-8 py-4">
        <div class="flex items-center text-sm">
          <div>
            <a href="#" class="font-semibold">Order #654321</a>
          </div>
        </div>
      </td>
      <td class="px-8 py-4 text-sm">€ 863.45</td>
      <td class="px-8 py-4 text-xs">
        <span class="px-3 py-1 font-semibold leading-tight text-slate-800 bg-green-100 dark:bg-green-700 dark:text-green-100">Approved</span>
      </td>
      <td class="px-8 py-4 text-sm">12/01/2023</td>
      <td class="px-8 py-4">
        <div class="flex items-center space-x-4 text-sm">
          <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-69FF47 dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="View" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#69FF47">
              <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>
          </button>
        </div>
      </td>
    </tr>

    <tr class="text-gray-700 dark:text-gray-400">
      <td class="px-8 py-4">
        <div class="flex items-center text-sm">
          <div>
            <a href="/#/Orders/145712" class="font-semibold">Order #145712</a>
          </div>
        </div>
      </td>
      <td class="px-8 py-4 text-sm">€ 103.45</td>
      <td class="px-8 py-4 text-xs">
        <span class="px-3 py-1 font-semibold leading-tight text-slate-800 bg-green-100 dark:bg-green-700 dark:text-green-100">Approved</span>
      </td>
      <td class="px-8 py-4 text-sm">12/01/2023</td>
      <td class="px-8 py-4">
        <div class="flex items-center space-x-4 text-sm">
          <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-69FF47 dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="View" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#69FF47">
              <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  </table>
</div>
                </div>
              
              <div class="grid px-12 py-4 text-sm font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
  <span class="flex items-center col-span-3">Showing 21-30 of 100</span>
  <span class="col-span-2"></span>
  <!-- Pagination -->
  <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
    <nav aria-label="Table navigation">
      <ul class="inline-flex items-center">
        <li>
          <button class="px-4 py-2  focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
            <svg class="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 20 20">
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
          </button>
        </li>
        <!-- Page buttons (adjust as needed) -->
        <li><button class="px-4 py-2  focus:outline-none focus:shadow-outline-purple">1</button></li>
        <li><button class="px-4 py-2  focus:outline-none focus:shadow-outline-purple">2</button></li>
        <li><button class="px-4 py-2 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 focus:outline-none focus:shadow-outline-purple">3</button></li>
        <li><button class="px-4 py-2  focus:outline-none focus:shadow-outline-purple">4</button></li>
        <li><span class="px-4 py-2">...</span></li>
        <li><button class="px-4 py-2  focus:outline-none focus:shadow-outline-purple">8</button></li>
        <li><button class="px-4 py-2  focus:outline-none focus:shadow-outline-purple">9</button></li>
        <!-- End of page buttons -->
        <li>
          <button class="px-4 py-2 focus:outline-none focus:shadow-outline-purple" aria-label="Next">
            <svg class="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </span>
</div>

              
          
        </main>
       </body>
    </html>
</template>

<style scoped>

</style>
