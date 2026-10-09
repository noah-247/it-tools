<script setup lang="ts">
import { useHead } from '@vueuse/head';
import type { HeadObject } from '@vueuse/head';
import { useRoute } from 'vue-router';

const route = useRoute();

const head = computed<HeadObject>(() => ({
  title: 'About - IT Tools',
  link: [{ rel: 'canonical', href: `https://ittools.voidez.com${route.path}` }],
  meta: [{ property: 'og:url', content: `https://ittools.voidez.com${route.path}` }],
}));
useHead(head);
</script>

<template>
  <div mx-auto mt-50px max-w-600px>
    <c-markdown :markdown="$t('about.content')" />
    <c-markdown :markdown="$t('about.deploymentNotice')" />
  </div>
</template>
