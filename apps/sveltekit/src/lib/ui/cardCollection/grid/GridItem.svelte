





<div class="grid-stack-item" gs-max-w="1">
	<section class="grid-stack-item-content">
		<slot></slot>
	</section>
</div>







<style lang="scss">
	.grid-stack-item {
		&:global(.selected) {
			background-color: var(--secondary);
			border-radius: 6px;
	
			&:global(.no-top-left) { border-top-left-radius: 0; }
			&:global(.no-top-right) { border-top-right-radius: 0; }
			&:global(.no-bottom-left) { border-bottom-left-radius: 0; }
			&:global(.no-bottom-right) { border-bottom-right-radius: 0; }
		}
	}
</style>