type ModalProps = {
  show?: boolean;
  onClose?: () => void;
};

function Modal({ show = true, onClose }: ModalProps) {
  if (!show) return null;
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-900/50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gray-900 text-gray-100 rounded">
        <button
          className="text-red-600 p-2 rounded-full absolute top-2 right-2"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <div className="flex flex-col h-full text-center py-4">
          <div>
            <h1 className="text-5xl text-gray-100">Foreword</h1>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <p>
              This is an app to display 3D models.
              <br />
              By clicking and moving the mouse, you can rotate the camera. If
              you scroll, you can zoom in or out. You can choose your own 3D
              model, but only .glb formats are allowed.
              <br />
              The models will <strong> not </strong>be uploaded and
              <strong> not </strong>
              saved.
              <br />
              Depending on the size of the model, you may need to zoom in or
              out.
              <br />
            </p>
          </div>
          <div>
            <button
              onClick={onClose}
              className="px-4 py-2 mb-4 bg-green-500 rounded "
            >
              OK
            </button>
          </div>
          <div>
            <p className="text-sm">
              <span>
                Thanks to&nbsp;
                <a href="https://github.com/KhronosGroup/glTF-Sample-Models">
                  KhronosGroup
                </a>
                &nbsp;for the fox model.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
