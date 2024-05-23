import './style.css';
import FilerobotImageEditor from 'filerobot-image-editor'; 

const { TABS, TOOLS } = FilerobotImageEditor;
const config = {
  source: 'https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg',
  tabsIds: [TABS.ADJUST],
  defaultTabId: TABS.ADJUST,
  defaultToolId: TOOLS.CROP,
  defaultSavedImageQuality: 1.0,
  Crop: {
      noPresets: true,
  },
  removeSaveButton: true,
  onSave: (editedImageObject, designState) => console.log('Save invoked', editedImageObject, designState),
};

// Assuming we have a div with id="editor_container"
const filerobotImageEditor = new FilerobotImageEditor(
  document.querySelector('#app'),
  config,
);

filerobotImageEditor.render({
  onClose: (closingReason) => {
    console.log('Closing reason', closingReason);
    filerobotImageEditor.terminate();
  },
});
