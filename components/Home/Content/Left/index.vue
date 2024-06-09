<template>
  <div
    class="flex flex-col w-full sm:w-2/6 lg:w-2/6 2xl:w-1/5 h-fit bg-white gap-4 items-center shadow-md"
  >
    <p
      class="w-min whitespace-nowrap font-bold text-xl leading-[2] text-center border-b-4 border-b-green-500"
    >
      Recent News
    </p>
    <HomeContentLeftCardLatest
      image="/images/LatestPostImage.png"
      title="New Year Message Of The Governor Of Lagos State. Mr Babajide Sanwo-Olu"
      date="Jan 14, 2024"
    />
    <div class="flex flex-col gap-2.5">
      <HomeContentLeftCard
        v-for="item in items"
        :image="item.image"
        :title="item.title"
        :date="item.date"
      />
    </div>
    <div class="border-t-2 w-5/6 flex justify-center items-center p-5">
      <p class="text-primaryColor text-sm cursor-pointer font-bold">
        View More
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    id: 1,
    title: 'New Year Message Of The Governor Of Lagos State. Mr Babajide Sanwo',
    date: 'Jan 14, 2024',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: 2,
    title: 'New Year Message Of The Governor Of Lagos State. Mr Babajide Sanwo',
    date: 'Jan 14, 2024',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: 3,
    title: 'New Year Message Of The Governor Of Lagos State. Mr Babajide Sanwo',
    date: 'Jan 14, 2024',
    image: 'https://picsum.photos/200/200',
  },
  {
    id: 4,
    title: 'New Year Message Of The Governor Of Lagos State. Mr Babajide Sanwo',
    date: 'Jan 14, 2024',
    image: 'https://picsum.photos/200/200',
  },
]
</script>
