<!-- +layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte';
  import '$lib/styles/style.scss';

  import { onMount } from 'svelte';
  onMount(() => {
    let year = new Date().getFullYear();
    let span = document.querySelector('footer span');
    span.innerHTML = year;
  });

</script>
  
<Header />

<main class="content">
  <slot />
</main>

<footer>Hello, I'm the footer  &copy; <span></span></footer>