<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({ title: 'About - IT Tools' });
</script>

<template>
  <div mx-auto mt-50px max-w-600px>
    <c-markdown :markdown="$t('about.content')" />
    <c-markdown :markdown="$t('about.deploymentNotice')" />
  </div>
</template>
