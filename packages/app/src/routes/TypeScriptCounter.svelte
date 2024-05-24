<script lang="ts">
  import { Teller } from "test-ts-lib";
  let myTeller: Teller = new Teller();
  let count = myTeller.current;
  const increment = () => {
    myTeller.increase();
    count = myTeller.current;
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
