<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 rounded-lg shadow-lg w-11/12 max-w-3xl relative">
      <button @click="closeDialog" class="absolute top-2 right-2 text-red-500">
        <!-- Close Icon -->
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="mb-4">
        <h2 class="text-xl font-semibold mb-2">{{ $t('quill.french_title') }}</h2>
        <quill-editor v-model:value="content.fr" :options="editorOptions" :disabled="disabled" @focus="onEditorFocus"
          @ready="onEditorReady" @change="onEditorChange('fr', $event)" />
      </div>

      <div>
        <h2 class="text-xl font-semibold mb-2">{{ $t('quill.english_title') }}</h2>
        <quill-editor v-model:value="content.en" :options="editorOptions" :disabled="disabled" @focus="onEditorFocus"
          @ready="onEditorReady" @change="onEditorChange('en', $event)" />
      </div>
    </div>
  </div>
</template>


<script>
import { quillEditor } from 'vue3-quill';
import { reactive, toRefs } from 'vue';

export default {
  name: 'QuillEditorDialog',
  components: { quillEditor },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const state = reactive({
      content: {
        fr: '<p>Bonjour, voici le contenu par défaut en français !</p>',
        en: '<p>Hello, this is the default content in English!</p>'
      },
      editorOptions: {
        placeholder: 'Start typing...',
        modules: {
          // Custom toolbar or module options can be defined here.
        },
      },
      disabled: false
    });

    // Handle editor events
    const onEditorBlur = () => console.log('Editor blur!');
    const onEditorFocus = () => console.log('Editor focus!');
    const onEditorReady = () => console.log('Editor ready!');
    const onEditorChange = (lang, { html }) => {
      console.log(`Editor change for ${lang}!`, html);
      state.content[lang] = html;
    };

    // Close dialog
    const closeDialog = () => {
      emit('close');
    };

    return {
      ...toRefs(state),
      onEditorBlur,
      onEditorFocus,
      onEditorReady,
      onEditorChange,
      closeDialog
    };
  }
};
</script>
<style scoped>
/* Dialog Styling */
h2 {
  color: #333;
  /* Couleur du titre */
}

.quill-editor {
  border: 1px solid #ddd;
  /* Bordure pour l'éditeur */
  border-radius: 4px;
  /* Coins arrondis pour l'éditeur */
}
</style>
