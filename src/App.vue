<script lang="ts" setup>
import {} from './ok'; // import ts source
import {} from 'mock'; // paths defined in tsconfig.json, expect no errors
import.meta.env; // expect an error here! because types:['node'] overwrites types:['vite/client']. See main.ts line 7
</script>
<template>
</template>
