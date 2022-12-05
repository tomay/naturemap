<!-- +layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte'
  import '$lib/styles/style.scss'
</script>
  
<Header />

<main class="content">
  <slot />
</main>

<footer>Hello, I'm the footer.</footer>