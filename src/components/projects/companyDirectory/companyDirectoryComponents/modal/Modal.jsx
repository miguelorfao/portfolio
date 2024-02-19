import React from "react";

function Modal({ modal_title, children, modal_id }) {
  return (
    <div>
      <div
        class="modal fade"
        id={modal_id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">
                {modal_title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
