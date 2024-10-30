<template>
  <div class="flex flex-wrap">
    <CharacterCard
      v-for="{ id, name, image, status, species, location } in data?.characters
        ?.results"
      :id="id"
      :key="id"
      :name="name"
      :image="image"
      :status="status"
      :species="species"
      :location="location?.name"
    />
  </div>
</template>

<script setup lang="ts">
type CharactersResults = {
  characters: {
    results: {
      id: string;
      name: string;
      image: string;
      status: string;
      species: string;
      location: {
        name: string;
      };
    }[];
  };
};
const { data } = await useAsyncGql<CharactersResults>({
  operation: "GetCharacters",
});
</script>
