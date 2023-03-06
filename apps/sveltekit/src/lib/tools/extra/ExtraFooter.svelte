<script lang="ts">
  import Button, { Group, Label } from '@smui/button';
	import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  function onCancel() {
    dispatch('cancelExtra');
  }

  function onSave() {
    dispatch('saveExtra');
  }
</script>


<Group id="footer-buttons">
  <Button on:click={onCancel}>
    <Label>Cancel</Label>
  </Button>
  <Button on:click={onSave}>
    <Label>Save</Label>
  </Button>
</Group>

<style lang="scss">
  :global(#footer-buttons) {
    display: flex;
    justify-content: stretch;
    
    :global(button) {
      flex-grow: 1;
    }
  }
</style>
