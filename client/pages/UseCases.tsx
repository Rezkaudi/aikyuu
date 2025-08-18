import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/ui/navbar';
import { Position } from '../types';
import { usePositionsStore } from '@/store/positionsStore';
import { useUIStore } from '@/store/uiStore';

interface EditPositionModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: Position | null;
  onSave: (name: string, description: string) => void;
}

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText: string;
}

const EditPositionModal: React.FC<EditPositionModalProps> = ({ isOpen, onClose, position, onSave }) => {
  const [name, setName] = useState(position?.name || '');
  const [description, setDescription] = useState(position?.description || '');

  useEffect(() => {
    if (position) {
      setName(position.name);
      setDescription(position.description);
    }
  }, [position]);

  const handleSave = () => {
    onSave(name, description);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[30px] p-12 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <svg className="w-10 h-10 fill-aikyuu-dark" viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.550781 34.2859C0.750926 33.402 0.928469 32.51 1.34584 31.7055C2.66913 29.1548 4.66915 27.8081 7.36124 27.7014C7.79098 27.6844 8.19424 27.5645 8.56272 27.3425C10.3323 26.2769 11.6748 24.7628 12.5315 22.7595C12.6583 22.4629 12.7448 22.1342 12.7897 21.8104C12.8691 21.2383 12.7725 20.7211 12.3377 20.3042C11.5608 19.5596 10.9283 18.6932 10.6695 17.5733C10.2374 15.7035 10.6292 14.046 11.8744 12.6819C15.5966 8.60381 19.3375 4.54583 23.0748 0.484161C23.6752 -0.168326 24.3106 -0.158075 24.9104 0.495304C29.6909 5.70216 34.4703 10.9099 39.249 16.1187C39.9246 16.8551 39.9262 17.5062 39.2529 18.2403C35.5745 22.2507 31.8977 26.2629 28.2135 30.2671C26.2358 32.4168 23.4585 32.4093 21.4745 30.2665C21.4654 30.2567 21.4566 30.2466 21.4475 30.2368C20.5064 29.219 19.9645 29.0915 18.764 29.7071C16.9142 30.6559 15.5313 32.1445 14.6026 34.1282C14.4222 34.5134 14.3299 34.9266 14.3272 35.368C14.3066 38.7728 11.9634 41.8619 8.90574 42.5449C8.67287 42.597 8.42118 42.5666 8.2062 42.7097H6.6751C6.61793 42.6838 6.5627 42.6447 6.50318 42.634C3.65216 42.1233 1.78714 40.348 0.856573 37.3897C0.718915 36.9522 0.650905 36.4888 0.550781 36.0375V34.2859ZM7.4586 40.2075C7.67286 40.2361 7.92178 40.1645 8.17409 40.133C10.0175 39.9023 11.7506 37.9841 11.9707 35.9736C12.0486 35.2626 11.9905 34.5296 12.2393 33.8429C13.3927 30.6589 15.4732 28.4627 18.36 27.2039C20.1267 26.4337 21.7351 26.7795 23.0199 28.4122C23.0779 28.4858 23.1446 28.5516 23.2094 28.6183C24.1879 29.6251 25.5413 29.6183 26.4972 28.5869C27.7384 27.2477 28.9647 25.8922 30.2111 24.5589C30.4396 24.3144 30.431 24.1844 30.2056 23.9404C27.6098 21.1298 25.0256 18.3063 22.4382 15.4866C20.8785 13.7869 19.3197 12.0864 17.7567 10.3905C17.6382 10.2619 17.5474 10.0335 17.3093 10.2972C16.0131 11.7335 14.6868 13.1379 13.3996 14.5836C12.8975 15.1476 12.7282 15.8596 12.844 16.6594C12.9531 17.4137 13.3663 17.9382 13.8527 18.4193C15.1481 19.7009 15.3988 21.2888 14.8802 23.0165C14.0507 25.7798 12.3279 27.7766 10.0941 29.2805C9.29662 29.8173 8.43243 30.1833 7.47333 30.1964C4.25679 30.24 2.51398 33.4053 2.90282 35.9191C3.27621 38.334 5.15729 40.1982 7.4586 40.2075ZM36.9506 17.1807C36.8408 17.0509 36.7502 16.9368 36.6529 16.8303C35.2404 15.2852 33.8295 13.7386 32.4134 12.1975C29.6893 9.2329 26.962 6.27198 24.2375 3.30782C24.0959 3.15372 23.9968 3.00609 23.7822 3.24263C22.2946 4.88187 20.7976 6.51109 19.2955 8.13462C19.125 8.3188 19.1777 8.40782 19.3212 8.56036C19.9047 9.18087 20.4746 9.81642 21.0517 10.4441C24.6672 14.3769 28.2837 18.3087 31.8971 22.2439C32.0242 22.3824 32.0966 22.4992 32.282 22.2955C33.7802 20.6482 35.2894 19.0129 36.7947 17.3733C36.8464 17.317 36.8917 17.2538 36.9506 17.1807Z" />
            <path d="M7.41812 36.4511C6.79724 36.4415 6.28884 35.8686 6.29498 35.1856C6.30111 34.5067 6.82148 33.9499 7.44666 33.9531C8.0927 33.9566 8.60354 34.5315 8.5879 35.2376C8.57287 35.9197 8.05108 36.4609 7.41812 36.4511Z" />
          </svg>
          <h2 className="text-2xl font-montserrat font-bold text-aikyuu-dark">Edit Position</h2>
        </div>

        <div className="w-full h-px bg-gray-200 mb-8"></div>

        {/* Form */}
        <div className="space-y-8">
          <div>
            <label className="block text-xl font-montserrat font-bold text-aikyuu-dark mb-6">
              Position name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type Your text"
              className="w-full p-6 rounded-[19px] bg-gray-50 border-none outline-none text-lg font-montserrat text-gray-500 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-xl font-montserrat font-bold text-aikyuu-dark mb-6">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Type Your text"
              rows={4}
              className="w-full p-6 rounded-[19px] bg-gray-50 border-none outline-none text-lg font-montserrat text-gray-500 placeholder-gray-500 resize-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 mt-8">
          <button
            onClick={onClose}
            className="flex-1 py-6 px-8 rounded-[125px] border border-aikyuu-dark text-aikyuu-dark font-montserrat text-2xl font-bold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-6 px-8 rounded-[125px] bg-aikyuu-primary text-aikyuu-dark font-montserrat text-2xl font-bold hover:bg-opacity-90 transition-colors"
          >
            save changes
          </button>
        </div>
      </div>
    </div>
  );
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, title, message, confirmText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[30px] p-12 max-w-5xl w-full">
        <h2 className="text-2xl font-montserrat font-bold text-aikyuu-dark text-center mb-8">
          {title}
        </h2>

        <div className="w-full h-px bg-gray-200 mb-8"></div>

        <p className="text-xl font-montserrat font-bold text-aikyuu-dark text-center mb-8 leading-relaxed">
          {message}
        </p>

        <div className="flex items-center gap-5">
          <button
            onClick={onClose}
            className="flex-1 py-6 px-8 rounded-[125px] border border-aikyuu-dark text-aikyuu-dark font-montserrat text-2xl font-bold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-6 px-8 rounded-[125px] bg-aikyuu-primary text-aikyuu-dark font-montserrat text-2xl font-bold hover:bg-opacity-90 transition-colors"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

const PositionCard: React.FC<{
  position: Position;
  onEdit: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}> = ({ position, onEdit, onDelete, onDuplicate }) => {
  const statusConfig = {
    created: {
      bg: 'bg-green-100',
      text: 'text-aikyuu-primary',
      label: 'created'
    },
    in_progress: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
      label: 'analyzing'
    },
    completed: {
      bg: 'bg-blue-100',
      text: 'text-aikyuu-primary',
      label: 'completed'
    }
  };

  const config = statusConfig[position.status];

  return (
    <div className="bg-white rounded-[15px] p-6 flex items-center justify-between gap-8">
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-3">
          <Link to={`/position/${position.id}`}>
            <h3 className="text-xl font-montserrat font-bold text-aikyuu-dark hover:text-aikyuu-primary transition-colors cursor-pointer">
              {position.name}
            </h3>
          </Link>
          <span className={`px-5 py-2 rounded-full text-sm font-montserrat font-bold ${config.bg} ${config.text}`}>
            {config.label}
          </span>
        </div>
        <p className="text-lg font-montserrat text-gray-400 leading-relaxed">
          {position.description}
        </p>
      </div>

      <div className="flex items-center gap-8">
        {/* View Results Link for Completed */}
        {position.status === 'completed' && (
          <Link
            to={`/position/${position.id}/completed`}
            className="text-aikyuu-primary font-montserrat text-sm font-bold hover:text-aikyuu-dark transition-colors"
            title="View Results"
          >
            View Results
          </Link>
        )}

        {/* Copy Icon */}
        <button
          onClick={onDuplicate}
          className="w-6 h-6 text-black hover:text-aikyuu-primary transition-colors"
          title="Duplicate"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fillRule="evenodd" clipRule="evenodd" d="M15 1.25H10.944C9.106 1.25 7.65 1.25 6.511 1.403C5.339 1.561 4.39 1.893 3.641 2.641C2.893 3.39 2.561 4.339 2.403 5.511C2.25 6.651 2.25 8.106 2.25 9.944V16C2.24982 16.8935 2.56866 17.7577 3.1491 18.4369C3.72954 19.1162 4.53343 19.5659 5.416 19.705C5.553 20.469 5.818 21.121 6.348 21.652C6.95 22.254 7.708 22.512 8.608 22.634C9.475 22.75 10.578 22.75 11.945 22.75H15.055C16.422 22.75 17.525 22.75 18.392 22.634C19.292 22.512 20.05 22.254 20.652 21.652C21.254 21.05 21.512 20.292 21.634 19.392C21.75 18.525 21.75 17.422 21.75 16.055V10.945C21.75 9.578 21.75 8.475 21.634 7.608C21.512 6.708 21.254 5.95 20.652 5.348C20.121 4.818 19.469 4.553 18.705 4.416C18.5659 3.53343 18.1162 2.72954 17.4369 2.1491C16.7577 1.56866 15.8935 1.24982 15 1.25ZM17.13 4.271C16.9779 3.827 16.6909 3.44166 16.3089 3.16893C15.927 2.89619 15.4693 2.74971 15 2.75H11C9.093 2.75 7.739 2.752 6.71 2.89C5.705 3.025 5.125 3.279 4.702 3.702C4.279 4.125 4.025 4.705 3.89 5.71C3.752 6.739 3.75 8.093 3.75 10V16C3.74971 16.4693 3.89619 16.927 4.16892 17.3089C4.44166 17.6908 4.827 17.9779 5.271 18.13C5.25 17.52 5.25 16.83 5.25 16.055V10.945C5.25 9.578 5.25 8.475 5.367 7.608C5.487 6.708 5.747 5.95 6.348 5.348C6.95 4.746 7.708 4.488 8.608 4.367C9.475 4.25 10.578 4.25 11.945 4.25H15.055C15.83 4.25 16.52 4.25 17.13 4.271ZM7.408 6.41C7.685 6.133 8.073 5.953 8.808 5.854C9.562 5.753 10.564 5.751 11.999 5.751H14.999C16.434 5.751 17.435 5.753 18.191 5.854C18.925 5.953 19.313 6.134 19.59 6.41C19.867 6.687 20.047 7.075 20.146 7.81C20.247 8.564 20.249 9.566 20.249 11.001V16.001C20.249 17.436 20.247 18.437 20.146 19.193C20.047 19.927 19.866 20.315 19.59 20.592C19.313 20.869 18.925 21.049 18.19 21.148C17.435 21.249 16.434 21.251 14.999 21.251H11.999C10.564 21.251 9.562 21.249 8.807 21.148C8.073 21.049 7.685 20.868 7.408 20.592C7.131 20.315 6.951 19.927 6.852 19.192C6.751 18.437 6.749 17.436 6.749 16.001V11.001C6.749 9.566 6.751 8.564 6.852 7.809C6.951 7.075 7.132 6.687 7.408 6.41Z" fill="currentColor" />
          </svg>
        </button>

        {/* Edit Icon */}
        <button
          onClick={onEdit}
          className="w-6 h-6 text-black hover:text-aikyuu-primary transition-colors"
          title="Edit"
        >
          <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M7.36419 22.8523L1.60429 23.3878L2.14755 17.6356L17.7832 2L22.9998 7.21663L7.36419 22.8523Z" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        {/* Delete Icon */}
        <button
          onClick={onDelete}
          className="w-9 h-9 text-black hover:text-red-500 transition-colors"
          title="Delete"
        >
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M9.61914 12.9688L11.2953 29.7307H24.7049L26.381 12.9688" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.2012 23.1302V15.7969" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.8008 23.1302V15.7969" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.10547 9.61801H13.8102M13.8102 9.61801L14.3706 7.37657C14.5338 6.72366 15.1205 6.26562 15.7935 6.26562H20.2079C20.881 6.26562 21.4676 6.72366 21.6308 7.37657L22.1912 9.61801M13.8102 9.61801H22.1912M22.1912 9.61801H28.8959" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function UseCases() {
  const { positions, updatePosition, deletePosition, duplicatePosition } = usePositionsStore();
  const { showAll, setShowAll } = useUIStore();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDuplicateModalOpen, setIsDuplicateModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);

  const displayedPositions = showAll ? positions : positions.slice(0, 8);

  const handleEdit = (position: Position) => {
    setSelectedPosition(position);
    setIsEditModalOpen(true);
  };

  const handleDelete = (position: Position) => {
    setSelectedPosition(position);
    setIsDeleteModalOpen(true);
  };

  const handleDuplicate = (position: Position) => {
    setSelectedPosition(position);
    setIsDuplicateModalOpen(true);
  };

  const handleSaveEdit = (name: string, description: string) => {
    if (selectedPosition) {
      updatePosition(selectedPosition.id, { name, description });
    }
  };

  const confirmDelete = () => {
    if (selectedPosition) {
      deletePosition(selectedPosition.id);
    }
    setIsDeleteModalOpen(false);
    setSelectedPosition(null);
  };

  const confirmDuplicate = () => {
    if (selectedPosition) {
      duplicatePosition(selectedPosition.id);
    }
    setIsDuplicateModalOpen(false);
    setSelectedPosition(null);
  };

  // Remove this function as we're using Link to navigate

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <h1 className="text-3xl font-montserrat font-medium text-aikyuu-dark">
            Use Cases
          </h1>
          <Link
            to="/create-position"
            className="bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold px-8 py-4 rounded-[10px] shadow-sm hover:bg-opacity-90 transition-colors"
          >
            + Add Use Cases
          </Link>
        </div>

        {/* Positions List */}
        <div className="space-y-6 mb-8">
          {displayedPositions.map(position => (
            <PositionCard
              key={position.id}
              position={position}
              onEdit={() => handleEdit(position)}
              onDelete={() => handleDelete(position)}
              onDuplicate={() => handleDuplicate(position)}
            />
          ))}
        </div>

        {/* See More Button */}
        {!showAll && positions.length > 8 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold px-6 py-4 rounded-[26px] shadow-sm hover:bg-opacity-90 transition-colors"
            >
              see more
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-aikyuu-dark py-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-12 h-20 fill-aikyuu-primary" viewBox="0 0 53 87" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.7183 86.5C34.2121 86.3976 34.0062 86.0288 33.7227 85.7419C26.4361 78.3638 21.2602 69.1269 18.7447 59.012C18.4475 57.5946 17.8379 56.2633 16.9614 55.1175C16.0848 53.9716 14.9639 53.0408 13.6822 52.3944C10.4153 50.571 6.96267 49.0958 3.77671 47.088C-0.610738 44.3563 -0.587117 42.4372 3.81721 39.6918C7.19217 37.5816 10.9046 36.1269 14.2796 34.0372C15.7291 33.326 16.9471 32.2098 17.7895 30.8206C18.1528 29.9007 18.4252 28.9468 18.6029 27.9727C21.2408 17.8517 26.4229 8.59367 33.6451 1.09937C34.4382 0.279853 34.8432 0.320829 35.6127 1.09937C41.0126 6.54917 46.4317 11.9705 51.8699 17.3634C52.582 18.0463 52.7238 18.4697 51.9509 19.2688C51.9509 19.2688 47.8301 25.5381 45.7005 28.6284C44.3974 30.9007 42.5555 32.8089 40.341 34.1806C36.7906 36.1269 33.014 37.6226 29.5412 39.7533C28.1 40.6343 26.2742 41.5358 26.2539 43.3592C26.2337 45.2646 28.1203 46.166 29.6019 47.0675C32.8689 49.0753 36.4025 50.5505 39.8112 52.3124C42.3643 53.8013 44.4653 55.9696 45.8861 58.5817C47.9111 61.6345 52.0555 67.675 52.0555 67.675C52.7035 68.3579 52.6023 68.6994 52.015 69.2935C46.4733 74.7843 40.9721 80.3126 35.4541 85.8239C35.228 86.0698 34.9445 86.2917 34.7183 86.5Z" />
            </svg>
            <h2 className="text-6xl font-poppins font-bold text-aikyuu-primary">Aikyuu</h2>
          </div>
          <p className="text-gray-200 font-poppins text-xl">
            Copyright © Resumate. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <EditPositionModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedPosition(null);
        }}
        position={selectedPosition}
        onSave={handleSaveEdit}
      />

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedPosition(null);
        }}
        onConfirm={confirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this position? This action cannot be undone."
        confirmText="Delete"
      />

      <ConfirmModal
        isOpen={isDuplicateModalOpen}
        onClose={() => {
          setIsDuplicateModalOpen(false);
          setSelectedPosition(null);
        }}
        onConfirm={confirmDuplicate}
        title="Confirm Duplicate"
        message={`Are you sure you want to Duplicate the position ${selectedPosition?.name}?`}
        confirmText="Duplicate"
      />
    </div>
  );
}
