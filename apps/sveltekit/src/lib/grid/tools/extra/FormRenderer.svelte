<script lang="ts">
	import { onMount } from 'svelte';
	import type ExtraFooter from '$lib/grid/tools/extra/ExtraFooter.svelte';
	import { isEqual } from 'lodash-es';

  export const ssr = false;

  export let id: string;
  export let visible = false;
  export let footer: ExtraFooter;

  let container: HTMLDivElement;
  let form: any;
  let originalSubmission = {
    data: {
      darkmode: true,
      noCors: true,
    }
  };

  const port = 5173;
  const baseUrl = `http://localhost:${port}`;

  onMount(async () => {
    const { Formio } = await import(/* @vite-ignore */'formiojs');
    const res = await fetch(`${baseUrl}/api/tools/${id}/form.json`);
    const schema = await res.json();

    form = await Formio.createForm(container, schema);

    form.on('change', () => {
      const isChanged = !isEqual(form.submission.data, originalSubmission.data);
      console.log({
        originalSubmission,
        submission: form.submission,
        isChanged,
      });

    });

    bindFooter();
  });

  function bindFooter() {
    footer.$on('cancelExtra', () => {
      // console.log(`cancelExtra from ${id} !!`);
      // maybe reload values from BE.
    });
    footer.$on('saveExtra', () => {
      console.log(`saveExtra from ${id} !!`);
      form.submit();
      // Disable the button until another change is made.
    });
  }

</script>


<div
  id="container"
  bind:this={container}
  class:visible={visible}
></div>


<style lang="scss">
  #container {
    flex-grow: 1;
    opacity: 0;
    transition: 0.2s;

    &.visible {
      opacity: 1; 
    }

    :global(.formio-component-form) {
      margin: 8px;
    }
  }
</style>
