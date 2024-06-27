<script lang="ts">
  import { auth, login } from "../../../stores/auth";
  import { goto } from "$app/navigation";

  import Layout from "../../../components/AuthLayout.svelte";
  import Input from "../../../components/Input.svelte";
  import { whoami } from "../../../utils/whoami";
  import { onMount } from "svelte";

  let email: string = "";
  let password: string = "";
  let errorMsg: string | null = null;

  // Handle login function
  function handleLogin() {
    errorMsg = null;
    login(email, password);
    auth.subscribe((value) => {
      if (value && value.isAuthenticated) {
        goto("/");
      } else {
        errorMsg = "Couldn't find your account";
      }
    });
  }

  onMount(() => {
    whoami();
	});
</script>

<Layout title="Login">
  <p class="text-base text-[#848DA6]">
    New to Flix? <a class="font-bold" href="/auth/signup">Sign up</a>
  </p>
  <form
    class="flex flex-col items-center justify-center gap-y-5"
    on:submit|preventDefault={handleLogin}
  >
    <Input
      required
      type="email"
      id="email"
      bind:value={email}
      placeholder="Email"
    />
    <Input
      required
      type="password"
      id="password"
      bind:value={password}
      placeholder="Password"
    />
    {#if errorMsg}
      <p class="text-sm text-[#ff3e00]">{errorMsg}</p>
    {/if}
    <button
      type="submit"
      class="border-0 px-3 py-2 rounded-md cursor-pointer text-[#FAFBFC] font-bold text-base bg-[#ff3e00] w-full text-center tracking-wider"
    >
      Submit
    </button>
  </form>
</Layout>
