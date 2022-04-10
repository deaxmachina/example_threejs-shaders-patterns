<script>
  import global from './global.css'
  import TestPattern from './lib/Components/TestPattern/index.svelte'
  import Pattern1 from './lib/Components/Pattern1/index.svelte'
  import Pattern2 from './lib/Components/Pattern2/index.svelte'
  import Pattern3 from './lib/Components/Pattern3/index.svelte'
  import Pattern4 from './lib/Components/Pattern4/index.svelte'
  import Pattern5 from './lib/Components/Pattern5/index.svelte'
  import Pattern6 from './lib/Components/Pattern6/index.svelte'
  import Pattern7 from './lib/Components/Pattern7/index.svelte'
  import Pattern8 from './lib/Components/Pattern8/index.svelte'
  import Pattern11 from './lib/Components/Pattern11/index.svelte'
  import Pattern12 from './lib/Components/Pattern12/index.svelte'
  import Pattern14 from './lib/Components/Pattern14/index.svelte'
  import Pattern16 from './lib/Components/Pattern16/index.svelte'
  import Pattern17 from './lib/Components/Pattern17/index.svelte'
  import Pattern18 from './lib/Components/Pattern18/index.svelte'
  import Pattern19 from './lib/Components/Pattern19/index.svelte'
  import Pattern20 from './lib/Components/Pattern20/index.svelte'
  import Pattern21 from './lib/Components/Pattern21/index.svelte'
  import Pattern22 from './lib/Components/Pattern22/index.svelte'
</script>

<main>
  <h1>Shader Patterns</h1>
</main>

<section>
  <!-- <TestPattern id='test' /> -->
  <Pattern1 id='1' />
  <Pattern2 id='2' />
  <Pattern3 id='3' />
  <Pattern4 id='4' />
  <Pattern5 id='5' />
  <Pattern6 id='6' />
  <Pattern7 id='7' />
  <Pattern8 id='8' />
  <Pattern11 id='11' />
  <Pattern12 id='12' />
  <Pattern14 id='14' />
  <Pattern16 id='16' />
  <Pattern17 id='17' />
  <Pattern18 id='18' />
  <Pattern19 id='19' />
  <Pattern20 id='20' />
  <!-- <Pattern21 id='21' />
  <Pattern22 id='22' /> -->
</section>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  main {
    margin: 100px auto;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

  }

  h1 {
    color: #ffffff;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.1;
    margin: 30px;
    text-align: center;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
