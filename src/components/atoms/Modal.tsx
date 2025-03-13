
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-full h-full bg-white p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}