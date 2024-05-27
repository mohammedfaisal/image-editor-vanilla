import './style.css';
import FilerobotImageEditor from 'filerobot-image-editor';
import * as bootstrap from 'bootstrap'
import './main.scss' 


document.querySelector('#app').innerHTML = `
    <div class="card">
      <button id="counter" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Show Modal</button>
    </div>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <div id="editor"></div>  
              <br />
              <label style="color: black;">Choose Image File</label>
              <input type="file" id="file-input"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>   
`

const { TABS, TOOLS } = FilerobotImageEditor;
const config = {
  source: 'computer.png',
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
  document.querySelector('#editor'),
  config,
);

filerobotImageEditor.render({
  onClose: (closingReason) => {
    console.log('Closing reason', closingReason);
    filerobotImageEditor.terminate();
  },
});

document.getElementById('file-input').addEventListener('change', function (event){
  const url = URL.createObjectURL(event.target.files[0]);
  filerobotImageEditor.render({source: url});
});
