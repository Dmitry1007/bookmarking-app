<template>
  <div id="app">
  <sidebar
    :categories="categories"
    v-on:category-selected="setSelectedCategory">
    <!-- bind 'selected-category event to the event handler setSelectedCategory' -->
  </sidebar>
  <bookmark-list
    :bookmarks="bookmarks | filterByCategory selectedCategory"
    :categories="categories">
  </bookmark-list>
  </div>
</template>

<script>
// the JS for our component
// We will export a Vue component options object here
</script>
