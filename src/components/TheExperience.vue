<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

const { scene } = await useGLTF('public/models/tdb.gltf', { draco: true })
</script>
<template>
  <Suspense>
    <TresCanvas shadows alpha>
      <TresScene>
        <TresMesh v-bind="scene" />
      </TresScene>
    </TresCanvas>
  </Suspense>
</template>