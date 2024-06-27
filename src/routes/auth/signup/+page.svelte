<script>
  import { signup } from "../../../stores/auth";
  import { goto } from "$app/navigation";
  import Layout from "../../../components/AuthLayout.svelte";
  import Input from "../../../components/Input.svelte";
  import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../utils/constants";
  import { onMount } from "svelte";
  import { whoami } from "../../../utils/whoami";

  let email = "";
  let password = "";
  let confirmPassword = "";
  let isValidPassword = true;
  let errorMsg = null;

  function validatePassword() {
    if (!PASSWORD_REGEX.test(password)) {
      isValidPassword = false;
      errorMsg = "Please enter a valid password.";
      return false;
    } else {
      isValidPassword = true;
      return true;
    }
  }

  function validateEmail() {
    if (!EMAIL_REGEX.test(email)) {
      errorMsg = "Please provide a valid email";
      return false;
    } else {
      errorMsg = null;
      return true;
    }
  }

  function handleSignup() {
    errorMsg = null;
    isValidPassword = true;

    if (!email) {
      errorMsg = "Email is required";
      return;
    }

    if (!password) {
      errorMsg = "Password is required";
      return;
    }

    if (!confirmPassword) {
      errorMsg = "Please confirm your password";
      return;
    }

    const validEmail = validateEmail();
    if (!validEmail) {
      return;
    }
    const validPassword = validatePassword();
    if (!validPassword) {
      return;
    }
    if (password === confirmPassword) {
      signup(email, password);
      goto("/auth/login");
    } else {
      errorMsg = "Passwords do not match";
    }
  }
</script>

<Layout title="Sign up">
  <p class="text-base text-[#848DA6]">
    Already a Flix member ? <a class="font-bold" href="/auth/login">Login</a>
  </p>
  <form
    class="flex flex-col items-center justify-center gap-y-5"
    on:submit|preventDefault={handleSignup}
  >
    <Input type="text" id="email" bind:value={email} placeholder="Email" />
    <div class="flex flex-col gap-y-2 justify-center items-center">
      <Input
        type="password"
        id="password"
        bind:value={password}
        placeholder="Password"
        on:input={validatePassword}
      />
      {#if !isValidPassword}
        <p class="text-sm text-start w-full text-[#848DA6] px-10">
          <!-- Password criteria:<br />- At least 8 characters long<br />-
          Contain at least one uppercase letter, one lowercase letter, a number
          and any special-character -->

          Password should contain alpha numerics values clubed with special character and uppercase
        </p>
      {/if}
    </div>
    <Input
      type="password"
      id="confirmPassword"
      bind:value={confirmPassword}
      placeholder="Confirm Password"
    />

    {#if errorMsg}
      <p class="text-sm text-center w-full text-[#ff3e00]">{errorMsg}</p>
    {/if}
    <button
      type="submit"
      class="border-0 px-3 py-2 rounded-md cursor-pointer text-[#FAFBFC] font-bold text-base bg-[#ff3e00] w-full text-center tracking-wider"
    >
      Submit
    </button>
  </form>
</Layout>
