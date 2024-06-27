<script>
  export let title = "";
</script>

<div
  class={`authlayout font-space-grotesk flex flex-col justify-center items-center min-h-screen bg-repeat-x relative`}
>
  <div class={`w-full flex items-center justify-center`}>
    <div
      class={"form-content flex flex-col w-[360px] lg:w-[450px] px-5 py-10 md:px-8 md:py-12 gap-y-5 rounded-2xl items-center justify-center bg-[#05070AFF] shadow-md shadow-[#ff3e00]"}
    >
      <p class="title">{title}</p>
      <slot></slot>
    </div>
  </div>
</div>

<style>
  .title {
    letter-spacing: 2px;
    font-weight: 800;
    font-size: 24px;
  }

  .form-content {
    z-index: 10;
    box-shadow:
      0px 0px 30px rgba(0, 0, 0, 1),
      0px 0px 30px rgba(255, 0, 0, 1); /* Update shadow to a cutout effect with red behind */
  }

  .authlayout {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small.jpg);
    background-size: "unset";
    background-position: "top";
  }
</style>
