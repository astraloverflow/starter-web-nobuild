import './@deps/preact-debug@10.5.7/debug.module';
import htm from './@deps/htm@3.0.4/htm.module.js';
import { h, Component, render } from './@deps/preact@10.5.7/preact.module.js';
import {
  useState,
  useCallback,
} from './@deps/preact-hooks@10.5.7/hooks.module.js';

const html = htm.bind(h);

function App() {
  const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  return html`
    <div class="bg-white shadow rounded-lg p-4">
      <h1>Hello World</h1>
      <p class="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p><strong>Times button Has been clicked:</strong> ${value}</p>
      <button
        class="bg-gray-300 rounded shadow px-5 py-3 mt-4 font-semibold"
        onClick="${increment}"
      >
        Increment
      </button>
    </div>
  `;
}

render(html`<${App} />`, document.querySelector('#app'));
