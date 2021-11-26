<script>
  import { space } from 'svelte/internal';
import '../styles/tailwind-output.css';
</script>

<main class="bg-kindblue flex flex-col min-h-screen">
  <section class="flex-grow w-full container flex flex-col items-start pt-6 max-w-3xl mx-auto px-4 sm:px-6 xl:px-0">
      <h1
        class="text-gold text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem]"
      >
        Ecrans connectés
      </h1>
      <p class="text-lg text-white mb-6">
        Accédez aux dernières infos, alertes. Jetez un coup d'oeil à votre emploi du
        temps.
      </p>
      <slot />
  </section>

  <footer class="bg-gray-900">
    <div
      class="container px-5 py-5 mx-auto flex items-center justify-center sm:flex-row flex-col"
    >
      <a
        class="flex title-font font-medium items-center md:justify-between justify-center text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <div class="ml-5 sm:ml-12 flex flex-col">
          <p class="flex-1 text-xl">Ecrans connectés</p>
          <span class="flex-1 text-sm text-gray-300">
            Créé par l'équipe 2021: Thomas Cardon, Baraka Ahmed, Alexandre
            Arniaud, Manaud Calixte, Bénigne Demetz, Mohamed Labidi.
          </span>
        </div>
      </a>
    </div>
  </footer>
</main>