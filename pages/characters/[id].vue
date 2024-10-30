<template>
  <div>
    <NuxtLink to="/" class="ml-3">Back</NuxtLink>

    <CharacterCard
      :id="data.character?.id"
      :name="data.character?.name"
      :image="data.character?.image"
      :status="data.character?.status"
      :species="data.character?.species"
      :location="data.character?.location.name"
    />

    />
  </div>
</template>

<script setup lang="ts">
type Character = {
  character: {
    name: string;
    image: string;
    status: string;
    id: string;
    species: string;
    location: {
      name: string;
    };
  };
};
const id = useRoute().params.id;
const { data, error } = await useAsyncGql<Character>({
  operation: "getCharacter",
  variables: {
    id: id,
  },
});
</script>

<style scoped></style>
