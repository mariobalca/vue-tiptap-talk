<template>
  <section>
    <section class="center">
      <h3>Tiptap's Core Concepts</h3>
    </section>
    <section data-auto-animate class="center">
      <h3>Tiptap's Core Concepts</h3>
      <p>
        <a
          class="text-xl"
          target="_blank"
          href="https://tiptap.dev/docs/editor/core-concepts/introduction"
          >https://tiptap.dev/docs/editor/core-concepts/introduction</a
        >
      </p>
    </section>
    <section data-auto-animate class="center">
      <h3 class="text-left">Structure</h3>
      <ul>
        <li>
          ProseMirror works with a strict
          <a href="https://tiptap.dev/docs/editor/core-concepts/schema" target="_blank">Schema</a>,
          which defines the allowed structure of a document.
        </li>
        <li>
          A document is a tree of headings, paragraphs and others elements, so called
          <a href="https://tiptap.dev/docs/editor/extensions/nodes" target="_blank">nodes</a>.
        </li>
        <li>
          <a href="https://tiptap.dev/docs/editor/extensions/marks" target="_blank">Marks</a> can be
          attached to a node, e. g. to emphasize part of it.
        </li>
        <li>
          <a href="https://tiptap.dev/docs/editor/api/commands" target="_blank">Commands</a> change
          that document programmatically.
        </li>
      </ul>
    </section>
    <section data-auto-animate class="center">
      <h3 class="text-left">Content</h3>
      <ul>
        <li>The document is stored in a state.</li>
        <li>All changes are applied as transactions to the state.</li>
        <li>The state has details about the current content, cursor position and selection.</li>
        <li>
          You can hook into a few different events, for example to alter transactions before they
          get applied.
        </li>
      </ul>
    </section>
    <section data-auto-animate class="center">
      <h3 class="text-left">Extensions</h3>
      <ul>
        <li>
          Extensions add
          <a h="https://tiptap.dev/docs/editor/extensions/nodes" target="_blank">nodes</a>,
          <a href="https://tiptap.dev/docs/editor/extensions/marks" target="_blank">marks</a>
          and/or
          <a href="https://tiptap.dev/docs/editor/extensions/functionality" target="_blank"
            >functionalities</a
          >
          to the editor.
        </li>
        <li>
          A lot of those extensions bound their commands to common
          <a href="https://tiptap.dev/docs/editor/core-concepts/keyboard-shortcuts" target="_blank"
            >keyboard shortcuts</a
          >.
        </li>
      </ul>
    </section>
    <section data-auto-animate class="center">
      <h3 class="text-left">Vocabulary</h3>
      <p class="text-left text-xl">
        ProseMirror has its own vocabulary and you’ll stumble upon all those words now and then.
        Here is a short overview of the most common words we use in the documentation.
      </p>
      <table class="text-xl">
        <thead>
          <tr>
            <th>Word</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Schema</td>
            <td>Configures the structure your content can have.</td>
          </tr>
          <tr>
            <td>Document</td>
            <td>The actual content in your editor.</td>
          </tr>
          <tr>
            <td>State</td>
            <td>Everything to describe the current content and selection of your editor.</td>
          </tr>
          <tr>
            <td>Transaction</td>
            <td>A change to the state (updated selection, content, …)</td>
          </tr>
          <tr>
            <td>Extension</td>
            <td>Registers new functionality.</td>
          </tr>
          <tr>
            <td>Node</td>
            <td>A type of content, for example a heading or a paragraph.</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Can be applied to nodes, for example for inline formatting.</td>
          </tr>
          <tr>
            <td>Command</td>
            <td>Execute an action inside the editor, that somehow changes the state.</td>
          </tr>
          <tr>
            <td>Decoration</td>
            <td>Styling on top of the document, for example to highlight mistakes.</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>
<script setup lang="ts"></script>
