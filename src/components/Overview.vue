<script setup>

import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const ordersCount = ref(0);
const usersCount = ref(0);
const shoes = ref([]);

//make a new Primus connection
let primus = new Primus("https://sneaker-api-4zoy.onrender.com");
primus.on("open", () => {
  console.log("Connection is alive and kicking");
});
primus.on("data", (json) => {
  console.log("Received a new message from the server", json);
  if (json.action == "update") {
    //update the order counter
    ordersCount.value = json.data.count;
    shoes.value = json.data.shoes;
  }
  if (json.action == "post") {
    //update the order counter
    shoes.value.push(json.data.shoe);
    ordersCount.value = shoes.value.length;
  }
  if (json.action == "updateStatus") {
    //update the order counter
    const index = shoes.value.findIndex(
      (shoe) => shoe._id === json.data.shoe._id
    );
    shoes.value[index] = json.data.shoe;
  }
});
const searchQuery = ref("");
const filteredShoes = computed(() => {
  return shoes.value.filter((shoe) => {
    return shoe._id.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});
onMounted(async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/login");
  }
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://sneaker-api-4zoy.onrender.com/users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    usersCount.value = data.data.users.length;
    const ordersResponse = await fetch(
      "https://sneaker-api-4zoy.onrender.com/api/v1/shoes",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!ordersResponse.ok) {
      throw new Error(`HTTP error! status: ${ordersResponse.status}`);
    }
    const ordersData = await ordersResponse.json();
    ordersCount.value = ordersData.data.shoes.length;
    shoes.value = ordersData.data.shoes;
    if (primus.readyState == Primus.OPEN) {
      primus.write(
        JSON.stringify({
          action: "update",
          data: {
            ordersCount: ordersCount.value,
            shoes: shoes.value,
          },
        })
      );
    }
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
});
const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/#/";
};
const sortOptions = ref({
  field: "date",
  order: "asc",
});
const changeSort = (field) => {
  if (sortOptions.value.field === field) {
    sortOptions.value.order =
      sortOptions.value.order === "asc" ? "desc" : "asc";
  } else {
    sortOptions.value.field = field;
    sortOptions.value.order = "asc";
  }
};
const sortedShoes = computed(() => {
  const sorted = [...filteredShoes.value];
  const { field, order } = sortOptions.value;
  return sorted.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];
    if (order === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
});
</script>

<template :class="{ 'theme-dark': dark }">
 <main class="h-full pb-16 overflow-y-auto">
    <div class="container grid px-6 mx-auto">
      <!-- With actions -->
      <div class="mt-4">
        <div class="flex flex-wrap gap-6 bg-green-400 p-6">
          <!-- New Users Card -->
          <div class="w-full sm:w-1/2 xl:w-1/3">
            <div class="flex items-center p-6 bg-white shadow-sm ">
              <div class="p-3 bg-green-400 bg-opacity-75 ">
                <svg
                  class="w-8 h-8 text-white"
                  viewBox="0 0 28 30" width="40px" height="40px"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <div class="ml-5">
                <h4 class="text-2xl font-semibold text-black">
                  {{ usersCount }}
                </h4>
                <div class="text-black">New Users</div>
              </div>
            </div>
          </div>

          <!-- Total Orders Card -->
          <div class="w-full mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div class="flex items-center p-6 bg-white shadow-sm ">
              <div class="p-3 bg-green-400 bg-opacity-75 ">
                <svg
                class="w-8 h-8 text-white"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <div class="ml-5">
                <h4 class="text-2xl font-semibold text-black">
                  {{ ordersCount }}
                </h4>
                <div class="text-black">Total Orders</div>
              </div>
            </div>
          </div>
          <div class="w-2/3 mt-6 sm:w-1/2 xl:w-1/4 sm:mt-0 flex flex-col">
          <div class="flex items-center p-6 bg-white shadow-sm flex-1">
    <div class="p-3 bg-green-400 bg-opacity-75 ">

      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="30px" height="30px">
  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
    <g transform="scale(5.12,5.12)">
      <path d="M47.16,21.221l-5.91,-0.966c-0.346,-1.186 -0.819,-2.326 -1.411,-3.405l3.45,-4.917c0.279,-0.397 0.231,-0.938 -0.112,-1.282l-3.889,-3.887c-0.347,-0.346 -0.893,-0.391 -1.291,-0.104l-4.843,3.481c-1.089,-0.602 -2.239,-1.08 -3.432,-1.427l-1.031,-5.886c-0.084,-0.478 -0.499,-0.828 -0.985,-0.828h-5.5c-0.49,0 -0.908,0.355 -0.987,0.839l-0.956,5.854c-1.2,0.345 -2.352,0.818 -3.437,1.412l-4.83,-3.45c-0.399,-0.285 -0.942,-0.239 -1.289,0.106l-3.887,3.887c-0.343,0.343 -0.391,0.883 -0.112,1.28l3.399,4.863c-0.605,1.095 -1.087,2.254 -1.438,3.46l-5.831,0.971c-0.482,0.08 -0.836,0.498 -0.836,0.986v5.5c0,0.485 0.348,0.9 0.825,0.985l5.831,1.034c0.349,1.203 0.831,2.362 1.438,3.46l-3.441,4.813c-0.284,0.397 -0.239,0.942 0.106,1.289l3.888,3.891c0.343,0.343 0.884,0.391 1.281,0.112l4.87,-3.411c1.093,0.601 2.248,1.078 3.445,1.424l0.976,5.861c0.079,0.481 0.496,0.834 0.985,0.834h5.5c0.485,0 0.9,-0.348 0.984,-0.825l1.045,-5.89c1.199,-0.353 2.348,-0.833 3.43,-1.435l4.905,3.441c0.398,0.281 0.938,0.232 1.282,-0.111l3.888,-3.891c0.346,-0.347 0.391,-0.894 0.104,-1.292l-3.498,-4.857c0.593,-1.08 1.064,-2.222 1.407,-3.408l5.918,-1.039c0.479,-0.084 0.827,-0.5 0.827,-0.985v-5.5c0.001,-0.49 -0.354,-0.908 -0.838,-0.987zM25,32c-3.866,0 -7,-3.134 -7,-7c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7z"></path>
    </g>
  </g>
</svg>
    </div>

    <div class="ml-5">
  <h4 class="text-2xl font-semibold text-black">

    {{ thirdCardCount }}
  </h4>
  <div class="text-black">

    <router-link to="/settings" class="text-white-500 font-bold hover:underline">Go to settings</router-link>
  </div>
</div>
</div>
          </div>        
        </div>

        <!-- Order table -->

        <div
        class="flex flex-col items-center justify-flex-start min-h-screen bg-gray-100 text-gray-800 pb-8">
        >
          <h1 class="w-full text-4xl font-bold mb-10 pt-10 text-left pl-10">
            Order overview
          </h1>
          <input
            v-model="searchQuery"
            type="text"
            class="w-11/12 p-2 border border-gray-300 transition-all duration-300 focus:outline-none focus:border-green-500"
            placeholder="Search order..."
          />
          <table
            class="w-11/12 bg-white shadow-md overflow-hidden mx-auto"
            style="table-layout: fixed"
          >
            <thead class="bg-gray-800 text-white">
              <tr
                class="text-green-500 dark:text-green-500"
                style="color: #69ff47"
              >
                <th
                  @click="changeSort('date')"
                  class="px-8 py-4 space-x-4 font-semibold text-center cursor-pointer"
                >
                  Order ID
                  <span v-if="sortOptions.field === 'date'"
                    >&nbsp;{{ sortOptions.order === "asc" ? "▲" : "▼" }}</span
                  >
                </th>
                <th
                  @click="changeSort('price')"
                  class="px-8 py-4 text-center cursor-pointer"
                >
                  Price
                  <span v-if="sortOptions.field === 'price'"
                    >&nbsp;{{ sortOptions.order === "asc" ? "▲" : "▼" }}</span
                  >
                </th>
                <th
                  @click="changeSort('status')"
                  class="px-8 py-4 text-center cursor-pointer"
                >
                  Status
                  <span v-if="sortOptions.field === 'status'"
                    >&nbsp;{{ sortOptions.order === "asc" ? "▲" : "▼" }}</span
                  >
                </th>
                <th
                  @click="changeSort('date')"
                  class="px-8 py-4 text-center cursor-pointer"
                >
                  Date
                  <span v-if="sortOptions.field === 'date'"
                    >&nbsp;{{ sortOptions.order === "asc" ? "▲" : "▼" }}</span
                  >
                </th>
                <th class="px-8 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(shoe, index) in sortedShoes"
                :key="index"
                class="text-gray-700 dark:text-gray-400 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
              
                <td class="px-8 py-4 space-x-4 text-center">
                  ORDER#{{ shoe._id }}
                </td>
                <td class="px-8 py-4 text-center">{{ shoe.price }} €</td>
                <td class="px-8 py-4 text-center">
                  <span
                    class="px-3 py-1 font-semibold leading-tigh dark:text-white"
                    :class="{
                      ' bg-red-200 text-red-700': shoe.status === 'denied',
                      'bg-green-200 text-green-700': shoe.status === 'accepted',
                      ' bg-orange-200 text-orange-700':
                        shoe.status === 'in progress',
                    }"
                    >{{ shoe.status }}
                  </span>
                </td>
                <td class="px-8 py-4 text-center">
                  {{ new Date(shoe.date).toLocaleDateString() }}
                </td>
                <td class="px-8 py-4 text-center">
                  <div
                    class="flex items-center justify-center space-x-4 text-sm"
                  >
                    <router-link :to="`/orders/${shoe._id}`">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#69FF47"
                      >
                        <path
                          d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
                        />
                      </svg>
                    </router-link>
                  </div>
                </td>
                <!-- Voeg andere gewenste kolommen toe -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Log out -->
     </div>
  </main>
</template>

<style scoped>
  input {
    width: 93%;
    box-sizing: border-box;
  }

  table {
    width: 93%;
    box-sizing: border-box;
    border-collapse: collapse; /* Voeg dit toe */
  }

  tbody tr:last-child {
    margin-bottom: 20px; /* Voeg hier de gewenste padding toe */
  }


  @media (max-width: 640px) {
    /* Responsive styling for small screens (mobile) */
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
    th, td {
      min-width: 150px; /* Adjust as needed for your content */
    }
  }

  @media (min-width: 641px) and (max-width: 768px) {
  /* Responsive styling for medium screens (tablets) */
  table {
    display: block;
    overflow-x: auto; /* Enables horizontal scrolling for the table */
    white-space: nowrap;
  }
  th, td {
    min-width: 100px; /* Adjust as needed for your content */
  }}


  @media (max-width: 1024px) {
    /* Responsive styling for tablets */
    th, td {
      min-width: 100px; /* Adjust as needed for your content */
    }
  }

</style>
