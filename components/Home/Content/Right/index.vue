<template>
  <div class="w-full sm:w-4/6 lg:w-4/6 2xl:w-4/5 bg-transparent">
    <div class="flex flex-wrap justify-center gap-x-14 gap-y-20">
      <HomeContentRightSection
        text="To be and remain the model youth and development agency in Nigeria and beyond."
        heading="Vision Statement"
        class="flex-1"
      />
      <HomeContentRightSection
        text="To create an enabling environment that promotes youth and social development services, providing support to the vulnerable, driven by highly committed and motivated personnel."
        heading="Mission Statement"
        class="flex-1"
      />
      <HomeContentRightSection
        text="To create an enabling environment that promotes youth and social development services, providing support to the vulnerable, driven by highly committed and motivated personnel."
        heading="Mandatory of the ministry"
        class="basis-full"
      >
        <ul class="list-image-[url(/images/listCircle.png)] pl-4 space-y-2.5">
          <li v-for="item in items">
            {{ item }}
          </li>
        </ul>
      </HomeContentRightSection>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [
  'Providing an enabling and empowering environment for Youth development.',
  'Promoting effective Citizenship and Leadership Training.',
  'Registering and Supervising the National Youth Council of Nigeria (Lagos State Chapter) voluntary youth and youth focused Non-Governmental Organizations.',
  'Relating with National Orientation Agency (NOA) for public enlightenment and campaign.',
  'Facilitating Medical Social Work Services to indigent citizens i.e. destitute, accident victims etc.',
  'Supervising and monitoring of Non- Governmental Organizations, Orphanages, Day Care Centre and Home relating to Social Welfare Services.',
  'Providing family and Juvenile Welfare Services, School Social Work Services, Adult Probation Services and Child Development Services.',
  'Supervising and monitoring of Youth Centres and play grounds for recreation',
  'Providing Rehabilitation and Vocational Training for Destitute and People Living with Disabilities (PWLD).',
  'Providing Institutional care for the aged/elderly citizens.',
  'Facilitating adoption, fostering, guardianship and child custody.',
  'Enhancing Juvenile Justice Administration Probation Services.',
  'Supervision of Lagos State Office for Disability Affairs (LASODA).',
]
</script>
