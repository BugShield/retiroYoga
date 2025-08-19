export default function SideNav({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      <nav
        className={`fixed top-0 right-0 h-full w-3/7 bg-[#cb4a3e] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:w-1/5`}
        aria-hidden={!isOpen}
        aria-label="Menu lateral"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4 px-6 py-6 xl:items-center">
          {children}
        </div>
      </nav>
    </>
  );
}