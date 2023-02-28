<script lang="ts">
	import { partition } from 'lodash-es';
	import { defLayout, layout } from '$lib/store/layout';
	import GroupLayout_Queue from '$lib/groupLayout/queue/GroupLayout_Queue.svelte';
	import GroupLayout_Grid from '$lib/groupLayout/grid/GroupLayout_Grid.svelte';
  import Tool from '$lib/grid/tools/Tool.svelte';
	import { tools } from '$lib/tools/tools.store';
	import type { ToolManifest } from '$lib/tools/tools.model';

	export let data: { toolManifests: ToolManifest[] };
	tools.set(data.toolManifests);

	const [ spacialTools, normalTools ] = partition(data.toolManifests, { id: 'app-header' });
	const headerToolManifests = [spacialTools.find(t => t.id === 'app-header') as ToolManifest];
	const lovedToolManifests = normalTools.filter(t => ['loc-assoc', 'chrome', 'pomodoro', 'spreadsheet', 'checklist'].includes(t.id));
	const toolManifests = normalTools;

	interface ToolLocalVars {
		isSelected?: boolean;
	}
	enum GroupLayoutType {
		GRID = 'GRID',
		QUEUE = 'QUEUE',
	}
	interface Collection {
		title?: string;
    toolLocalVars: Record<string, ToolLocalVars>;
    toolManifests: ToolManifest[];
    groupLayout: {
      type: any;
			onChange?: Function;
    };
	}

	let { columns } = defLayout;

	layout.subscribe(async val => (columns = val.columns));

  let allCollections: Collection[] = [
    { title: undefined, toolManifests: headerToolManifests, groupLayout: { type: GroupLayout_Grid } },
    { title: 'LOVED',		toolManifests: lovedToolManifests,	groupLayout: { type: GroupLayout_Queue } },
    //{ title: 'ALL', toolManifests, groupLayout: { type: GroupLayoutType.QUEUE } },
  ].map(collection => ({
		...collection,
		toolLocalVars: Object.fromEntries(
			collection.toolManifests.map(man => [man.id, {} as ToolLocalVars])
		)
	}));

	let collections: Collection[] = allCollections;

	function selectTool(
		id: string,
		toolLocalVars: Record<string, ToolLocalVars>
	) {
		return (event: any) => {
			const vars = toolLocalVars[id];

			if (event.detail.event.ctrlKey) {
				vars.isSelected = event.detail.isSelected;
			} else {
				Object.values(toolLocalVars).forEach(oVars => (oVars.isSelected = oVars === vars));
			}

			collections = collections;
		};
	}

</script>

<main>
	{#each collections as { title, toolManifests, groupLayout, toolLocalVars }}
		<section>
			{#if title}
				<h2>{ title }</h2>
			{/if}
			<svelte:component
				this={groupLayout.type}
				bind:onChange={groupLayout.onChange}
			>
				{#each toolManifests as manifest}
					{@const { id } = manifest}
					{@const local = toolLocalVars[id]}
					<div
						class="grid-stack-item"
						class:selected={local.isSelected}
						gs-w="1"
					>
						<Tool
							{manifest}
							h={1}
							isSelected={local.isSelected}
							on:afterUpdate={groupLayout.onChange}
							on:select={ selectTool(id, toolLocalVars) }
						></Tool>
					</div>
				{/each}
			</svelte:component>
		</section>
	{/each}
</main>

<style lang="scss">
	section {
		margin-bottom: var(--grid-margin);
	}
	h2 {
		font-size: var(--font-size);
		text-align: right;
		margin: 0 var(--grid-margin);
	}
	main {
		height: 100vh;
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		text-align: center;
		margin: 0;
	}
	.grid-stack-item {
		&.selected {
			background-color: var(--secondary);
			border-radius: 6px;
	
			&:global(.no-top-left) { border-top-left-radius: 0; }
			&:global(.no-top-right) { border-top-right-radius: 0; }
			&:global(.no-bottom-left) { border-bottom-left-radius: 0; }
			&:global(.no-bottom-right) { border-bottom-right-radius: 0; }
		}
	}
</style>