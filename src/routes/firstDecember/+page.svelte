<script lang="ts">
	export let data;
  let name = '';
  let dataForPerson = []

  function searchName(name: string) {
    dataForPerson = data.persons.filter(person => person.name.includes(name))
  }

  function handleClick() {
    searchName(name);
  }
</script>


<h1>First December Challange</h1>
<label for="name">Name der Person</label>
<input id="name" bind:value={name} required={true} placeholder="Pleace enter a name"/>
<button disabled={!name} on:click={() => handleClick()}>Check Person</button>

{#if dataForPerson}
  <ul>
  {#each dataForPerson as thing (thing.name)}
    <li>{thing.name} - <progress value={thing.tally} max="100">{thing.tally}</progress> </li>
  {/each}
  </ul>
{/if}
