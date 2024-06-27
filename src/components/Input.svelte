<script lang="ts">
  export let type: string;
  export let id: string = "text";
  export let placeholder: string = "";
  export let value: string;
  export let required: boolean = false;
</script>

<!-- CONDITIONAL RENDERING BECAUSE ['type' attribute cannot be dynamic if input uses two-way bindingsvelte(invalid-type)] -->
{#if type === "text"}
  <input
    {required}
    type="text"
    {id}
    bind:value
    {placeholder}
    class="search-input w-[300px] py-[10px] px-[15px] text-base rounded-md outline-0 text-white bg-[#333]"
  />
{:else if type === "password"}
  <input
    {required}
    type="password"
    {id}
    bind:value
    {placeholder}
    class="search-input w-[300px] py-[10px] px-[15px] text-base rounded-md outline-0 text-white bg-[#333]"
  />
{:else if type === "email"}
  <input
    {required}
    type="email"
    {id}
    bind:value
    {placeholder}
    class="search-input w-[300px] py-[10px] px-[15px] text-base rounded-md outline-0 text-white bg-[#333]"
  />
{:else}
  <input
    {required}
    type="text"
    {id}
    bind:value
    {placeholder}
    class="search-input w-[300px] py-[10px] px-[15px] text-base rounded-md outline-0 text-white bg-[#333]"
  />
{/if}
