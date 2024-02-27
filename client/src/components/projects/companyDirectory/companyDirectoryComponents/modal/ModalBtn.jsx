import React from "react";

function ModalBtn({
  label,
  modal,
  modalId,
  className,
  modalDismiss,
  type,
  onClick,
  onSubmit,
}) {
  return (
    <div>
      <button
        class={className}
        data-bs-toggle={modal}
        data-bs-target={modalId}
        data-bs-dismiss={modalDismiss}
        type={type}
        onClick={onClick}
        onSubmit={onSubmit}
      >
        {label}
      </button>
    </div>
  );
}

export default ModalBtn;
