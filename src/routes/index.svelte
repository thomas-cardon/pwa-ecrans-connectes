<script>
  export let alerts = [{
    title: 'Alerte Tempête',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat."
  }];
</script>

<div class="bg-kindblue-dark rounded-xl sm:rounded-3xl w-full sm:w-4/5 flex flex-col self-start space-y-4">
  <h2 class="text-gold tracking-tight text-3xl md:text-4xl ml-6 sm:ml-10 mt-5">Alertes</h2>
  <ul>
    {#each alerts as alert}
      <li class="">
        <a
          class="card-link ml-5 text-white bg-kindblue mx-5 rounded-lg"
          target="_blank"
          rel="noopener"
          href={alert.link | "#"}
        >
          <h3 class="text-white">{alert.title}</h3>
          <p class="text-sm text-gray-300"> {alert.content}</p>
        </a>
      </li>
    {/each}
  </ul>
</div>
<style>
  .card-link {
    padding: 8px 24px;
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    border-radius: 8px;
    margin-bottom: 16px;
    transition: .15s box-shadow ease-in-out;
  }
</style>