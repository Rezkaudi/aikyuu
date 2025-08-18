import { useState } from 'react';
import { Navbar } from '../components/ui/navbar';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Criteria, Resume } from '../types';
import { usePositionsStore } from '@/store/positionsStore';
import { useCriteriaStore } from '@/store/criteriaStore';
import { useResumesStore } from '@/store/resumesStore';
import { useAnalysisStore } from '@/store/analysisStore';
import { useUIStore } from '@/store/uiStore';


interface UploadResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (files: FileList) => void;
}

interface AddCriteriaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (description: string) => void;
}

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const UploadResumeModal: React.FC<UploadResumeModalProps> = ({ isOpen, onClose, onUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      onUpload(e.dataTransfer.files);
      onClose();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[30px] p-12 max-w-5xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <svg className="w-10 h-10 fill-aikyuu-dark" viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.550781 34.3679C0.750926 33.484 0.928469 32.592 1.34584 31.7875C2.66913 29.2368 4.66915 27.8901 7.36124 27.7835C7.79098 27.7664 8.19424 27.6465 8.56272 27.4246C10.3323 26.3589 11.6748 24.8448 12.5315 22.8416C12.6583 22.545 12.7448 22.2163 12.7897 21.8925C12.8691 21.3203 12.7725 20.8031 12.3377 20.3863C11.5608 19.6416 10.9283 18.7752 10.6695 17.6553C10.2374 15.7855 10.6292 14.128 11.8744 12.7639C15.5966 8.68584 19.3375 4.62786 23.0748 0.566192C23.6752 -0.0862945 24.3106 -0.0760437 24.9104 0.577335C29.6909 5.78419 34.4703 10.9919 39.249 16.2007C39.9246 16.9371 39.9262 17.5882 39.2529 18.3223C35.5745 22.3327 31.8977 26.3449 28.2135 30.3492C26.2358 32.4988 23.4585 32.4914 21.4745 30.3485C21.4654 30.3387 21.4566 30.3287 21.4475 30.3189C20.5064 29.301 19.9645 29.1736 18.764 29.7892C16.9142 30.7379 15.5313 32.2265 14.6026 34.2103C14.4222 34.5955 14.3299 35.0086 14.3272 35.4501C14.3066 38.8548 11.9634 41.944 8.90574 42.627C8.67287 42.679 8.42118 42.6486 8.2062 42.7918H6.6751C6.61793 42.7658 6.5627 42.7267 6.50318 42.716C3.65216 42.2054 1.78714 40.4301 0.856573 37.4717C0.718915 37.0343 0.650905 36.5709 0.550781 36.1195V34.3679ZM7.4586 40.2896C7.67286 40.3181 7.92178 40.2466 8.17409 40.215C10.0175 39.9844 11.7506 38.0661 11.9707 36.0556C12.0486 35.3447 11.9905 34.6116 12.2393 33.9249C13.3927 30.7409 15.4732 28.5447 18.36 27.286C20.1267 26.5157 21.7351 26.8616 23.0199 28.4942C23.0779 28.5679 23.1446 28.6336 23.2094 28.7003C24.1879 29.7072 25.5413 29.7004 26.4972 28.6689C27.7384 27.3297 28.9647 25.9742 30.2111 24.6409C30.4396 24.3965 30.431 24.2664 30.2056 24.0224C27.6098 21.2118 25.0256 18.3884 22.4382 15.5686C20.8785 13.869 19.3197 12.1684 17.7567 10.4725C17.6382 10.3439 17.5474 10.1155 17.3093 10.3792C16.0131 11.8156 14.6868 13.2199 13.3996 14.6656C12.8975 15.2297 12.7282 15.9416 12.844 16.7414C12.9531 17.4958 13.3663 18.0202 13.8527 18.5013C15.1481 19.7829 15.3988 21.3708 14.8802 23.0985C14.0507 25.8619 12.3279 27.8587 10.0941 29.3625C9.29662 29.8994 8.43243 30.2654 7.47333 30.2784C4.25679 30.322 2.51398 33.4874 2.90282 36.0012C3.27621 38.416 5.15729 40.2802 7.4586 40.2896ZM36.9506 17.2628C36.8408 17.133 36.7502 17.0189 36.6529 16.9123C35.2404 15.3673 33.8295 13.8206 32.4134 12.2795C29.6893 9.31493 26.962 6.35401 24.2375 3.38985C24.0959 3.23575 23.9968 3.08812 23.7822 3.32467C22.2946 4.96391 20.7976 6.59312 19.2955 8.21665C19.125 8.40083 19.1777 8.48985 19.3212 8.64239C19.9047 9.2629 20.4746 9.89845 21.0517 10.5261C24.6672 14.459 28.2837 18.3907 31.8971 22.3259C32.0242 22.4644 32.0966 22.5813 32.282 22.3775C33.7802 20.7302 35.2894 19.0949 36.7947 17.4553C36.8464 17.399 36.8917 17.3359 36.9506 17.2628Z" />
            <path d="M7.41812 36.5331C6.79724 36.5235 6.28884 35.9506 6.29498 35.2676C6.30111 34.5887 6.82148 34.0319 7.44666 34.0352C8.0927 34.0386 8.60354 34.6136 8.5879 35.3196C8.57287 36.0017 8.05108 36.5429 7.41812 36.5331Z" />
          </svg>
          <h2 className="text-2xl font-montserrat font-bold text-aikyuu-dark">Upload Resumes</h2>
        </div>

        <div className="w-full h-px bg-gray-200 mb-8"></div>

        {/* Upload Area */}
        <div
          className={`w-full h-60 border-2 border-dashed border-gray-300 rounded-[10px] bg-white flex flex-col items-center justify-center gap-3 mb-8 transition-colors ${isDragOver ? 'border-aikyuu-primary bg-green-50' : ''
            }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="w-15 h-15 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-black" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.33398 34.1336V36.2083C8.33398 39.6601 11.1322 42.4583 14.584 42.4583H35.4173C38.8691 42.4583 41.6673 39.6601 41.6673 36.2083V34.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25 33.0846V10.168" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.2923 17.4596L25.0007 10.168L17.709 17.4596" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-2xl font-montserrat font-bold text-black underline cursor-pointer">
              Click to upload
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>
            <span className="text-2xl font-montserrat text-black">or drag and drop</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button
            onClick={onClose}
            className="flex-1 py-6 px-8 rounded-[125px] border border-aikyuu-dark text-aikyuu-dark font-montserrat text-2xl font-bold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-6 px-8 rounded-[125px] bg-aikyuu-primary text-aikyuu-dark font-montserrat text-2xl font-bold hover:bg-opacity-90 transition-colors"
          >
            Upload Resumes
          </button>
        </div>
      </div>
    </div>
  );
};

const AddCriteriaModal: React.FC<AddCriteriaModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (description.trim()) {
      onAdd(description);
      setDescription('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[30px] p-12 max-w-5xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <svg className="w-10 h-10 fill-aikyuu-dark" viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.550781 34.2859C0.750926 33.402 0.928469 32.51 1.34584 31.7055C2.66913 29.1548 4.66915 27.8081 7.36124 27.7014C7.79098 27.6844 8.19424 27.5645 8.56272 27.3425C10.3323 26.2769 11.6748 24.7628 12.5315 22.7595C12.6583 22.4629 12.7448 22.1342 12.7897 21.8104C12.8691 21.2383 12.7725 20.7211 12.3377 20.3042C11.5608 19.5596 10.9283 18.6932 10.6695 17.5733C10.2374 15.7035 10.6292 14.046 11.8744 12.6819C15.5966 8.60381 19.3375 4.54583 23.0748 0.484161C23.6752 -0.168326 24.3106 -0.158075 24.9104 0.495304C29.6909 5.70216 34.4703 10.9099 39.249 16.1187C39.9246 16.8551 39.9262 17.5062 39.2529 18.2403C35.5745 22.2507 31.8977 26.2629 28.2135 30.2671C26.2358 32.4168 23.4585 32.4093 21.4745 30.2665C21.4654 30.2567 21.4566 30.2466 21.4475 30.2368C20.5064 29.219 19.9645 29.0915 18.764 29.7071C16.9142 30.6559 15.5313 32.1445 14.6026 34.1282C14.4222 34.5134 14.3299 34.9266 14.3272 35.368C14.3066 38.7728 11.9634 41.8619 8.90574 42.5449C8.67287 42.597 8.42118 42.5666 8.2062 42.7097H6.6751C6.61793 42.6838 6.5627 42.6447 6.50318 42.634C3.65216 42.1233 1.78714 40.348 0.856573 37.3897C0.718915 36.9522 0.650905 36.4888 0.550781 36.0375V34.2859ZM7.4586 40.2075C7.67286 40.2361 7.92178 40.1645 8.17409 40.133C10.0175 39.9023 11.7506 37.9841 11.9707 35.9736C12.0486 35.2626 11.9905 34.5296 12.2393 33.8429C13.3927 30.6589 15.4732 28.4627 18.36 27.2039C20.1267 26.4337 21.7351 26.7795 23.0199 28.4122C23.0779 28.4858 23.1446 28.5516 23.2094 28.6183C24.1879 29.6251 25.5413 29.6183 26.4972 28.5869C27.7384 27.2477 28.9647 25.8922 30.2111 24.5589C30.4396 24.3144 30.431 24.1844 30.2056 23.9404C27.6098 21.1298 25.0256 18.3063 22.4382 15.4866C20.8785 13.7869 19.3197 12.0864 17.7567 10.3905C17.6382 10.2619 17.5474 10.0335 17.3093 10.2972C16.0131 11.7335 14.6868 13.1379 13.3996 14.5836C12.8975 15.1476 12.7282 15.8596 12.844 16.6594C12.9531 17.4137 13.3663 17.9382 13.8527 18.4193C15.1481 19.7009 15.3988 21.2888 14.8802 23.0165C14.0507 25.7798 12.3279 27.7766 10.0941 29.2805C9.29662 29.8173 8.43243 30.1833 7.47333 30.1964C4.25679 30.24 2.51398 33.4053 2.90282 35.9191C3.27621 38.334 5.15729 40.1982 7.4586 40.2075ZM36.9506 17.1807C36.8408 17.0509 36.7502 16.9368 36.6529 16.8303C35.2404 15.2852 33.8295 13.7386 32.4134 12.1975C29.6893 9.2329 26.962 6.27198 24.2375 3.30782C24.0959 3.15372 23.9968 3.00609 23.7822 3.24263C22.2946 4.88187 20.7976 6.51109 19.2955 8.13462C19.125 8.3188 19.1777 8.40782 19.3212 8.56036C19.9047 9.18087 20.4746 9.81642 21.0517 10.4441C24.6672 14.3769 28.2837 18.3087 31.8971 22.2439C32.0242 22.3824 32.0966 22.4992 32.282 22.2955C33.7802 20.6482 35.2894 19.0129 36.7947 17.3733C36.8464 17.317 36.8917 17.2538 36.9506 17.1807Z" />
            <path d="M7.41812 36.4511C6.79724 36.4415 6.28884 35.8686 6.29498 35.1856C6.30111 34.5067 6.82148 33.9499 7.44666 33.9531C8.0927 33.9566 8.60354 34.5315 8.5879 35.2376C8.57287 35.9197 8.05108 36.4609 7.41812 36.4511Z" />
          </svg>
          <h2 className="text-2xl font-montserrat font-bold text-aikyuu-dark">Add New Criteria</h2>
        </div>

        <div className="w-full h-px bg-gray-200 mb-8"></div>

        {/* Form */}
        <div className="mb-8">
          <label className="block text-xl font-montserrat font-bold text-aikyuu-dark mb-6">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Type Your text"
            className="w-full p-6 rounded-[19px] bg-gray-50 border-none outline-none text-lg font-montserrat text-gray-500 placeholder-gray-500"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button
            onClick={onClose}
            className="flex-1 py-6 px-8 rounded-[125px] border border-aikyuu-dark text-aikyuu-dark font-montserrat text-2xl font-bold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="flex-1 py-6 px-8 rounded-[125px] bg-aikyuu-primary text-aikyuu-dark font-montserrat text-2xl font-bold hover:bg-opacity-90 transition-colors"
          >
            Add Criteria
          </button>
        </div>
      </div>
    </div>
  );
};

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
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
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const CriteriaItem: React.FC<{
  criteria: Criteria;
  onDelete: () => void;
}> = ({ criteria, onDelete }) => {
  return (
    <div className="bg-gray-100 rounded-[15px] p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Drag handle */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            </div>
          </div>

          <span className="text-lg font-montserrat text-gray-600">{criteria.name}:</span>

          <div className="flex flex-col">
            <span className="text-base font-montserrat text-aikyuu-dark">Created: {criteria.createdDate}</span>
            <span className="text-base font-montserrat font-bold text-aikyuu-dark">{criteria.description}</span>
          </div>
        </div>

        <button
          onClick={onDelete}
          className="w-11 h-11 text-black hover:text-red-500 transition-colors"
          title="Delete"
        >
          <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M10.041 13.4688L11.7172 30.2307H25.1267L26.8029 13.4688" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.623 23.6302V16.2969" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.2227 23.6302V16.2969" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.52734 10.118H14.2321M14.2321 10.118L14.7925 7.87657C14.9557 7.22366 15.5423 6.76562 16.2153 6.76562H20.6298C21.3028 6.76562 21.8895 7.22366 22.0527 7.87657L22.6131 10.118M14.2321 10.118H22.6131M22.6131 10.118H29.3178" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ResumeCard: React.FC<{
  resume: Resume;
  onDelete: () => void;
}> = ({ resume, onDelete }) => {
  return (
    <div className="w-80 h-26 border border-gray-300 rounded-[10px] bg-white p-3 flex items-center gap-4">
      {/* PDF Icon */}
      <div className="w-14 h-15 flex-shrink-0">
        <svg viewBox="0 0 56 61" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M15.7411 41.3281H13.9006C13.85 41.3281 13.8065 41.3479 13.7699 41.3867C13.7333 41.4264 13.7148 41.4729 13.7148 41.5263V46.281C13.7148 46.3344 13.7333 46.381 13.7699 46.4206C13.8065 46.4602 13.85 46.4792 13.9006 46.4792H14.4567C14.507 46.4792 14.5504 46.4603 14.5874 46.4206C14.624 46.381 14.6421 46.3344 14.6421 46.281V44.6395H15.7411C16.2952 44.6395 16.7259 44.4974 17.0327 44.213C17.3391 43.9286 17.4927 43.5159 17.4927 42.9765C17.4927 42.4371 17.3391 42.0269 17.0327 41.7478C16.7259 41.4677 16.2952 41.3281 15.7411 41.3281ZM16.3318 43.5538C16.1762 43.6641 15.9679 43.7201 15.7069 43.7201H14.6421V42.2475H15.7069C15.9679 42.2475 16.1762 42.301 16.3318 42.4061C16.4874 42.5121 16.5654 42.7016 16.5654 42.9765C16.5654 43.2514 16.4874 43.4435 16.3318 43.5538Z" fill="black" />
          <path d="M21.632 41.8796C21.4647 41.7029 21.2564 41.5668 21.0071 41.4712C20.7574 41.3755 20.4631 41.3281 20.1245 41.3281H18.428C18.3773 41.3281 18.3339 41.3479 18.2973 41.3867C18.2607 41.4264 18.2422 41.4729 18.2422 41.5263V46.281C18.2422 46.3344 18.2607 46.381 18.2973 46.4206C18.3339 46.4602 18.3773 46.4792 18.428 46.4792H20.1587C20.4884 46.4792 20.7755 46.4318 21.0208 46.3362C21.2657 46.2405 21.4708 46.1044 21.6356 45.9277C21.8001 45.7511 21.9272 45.5374 22.0168 45.2875C22.1061 45.0368 22.1596 44.7576 22.1781 44.4482C22.1962 44.0855 22.1962 43.7219 22.1781 43.3591C22.1596 43.0497 22.1061 42.7706 22.0168 42.5198C21.9272 42.2699 21.7993 42.0562 21.632 41.8796ZM21.2508 44.4482C21.2416 44.6051 21.213 44.7524 21.1648 44.8894C21.1169 45.0273 21.0469 45.1453 20.9553 45.2427C20.864 45.3409 20.7494 45.4185 20.6119 45.4745C20.4747 45.5314 20.3119 45.5598 20.1245 45.5598H19.1695V42.2475H20.0899C20.2869 42.2475 20.4562 42.276 20.5982 42.3328C20.7401 42.3888 20.8579 42.4673 20.952 42.5681C21.0457 42.6689 21.1169 42.7861 21.1648 42.9214C21.213 43.0566 21.2416 43.2023 21.2508 43.3591C21.2689 43.7219 21.2689 44.0855 21.2508 44.4482Z" fill="black" />
          <path d="M23.8161 41.3281H23.26C23.2093 41.3281 23.1659 41.3479 23.1293 41.3867C23.0927 41.4264 23.0742 41.4729 23.0742 41.5263V46.281C23.0742 46.3344 23.0927 46.381 23.1293 46.4206C23.1659 46.4602 23.2093 46.4792 23.26 46.4792H23.8161C23.8664 46.4792 23.9098 46.4603 23.9468 46.4206C23.9834 46.381 24.0015 46.3344 24.0015 46.281V41.5263C24.0015 41.4729 23.9834 41.4264 23.9468 41.3867C23.9098 41.3479 23.8664 41.3281 23.8161 41.3281Z" fill="black" />
          <path d="M49.457 16.6441C49.4496 16.6202 49.4437 16.5974 49.4339 16.5746C49.4037 16.5037 49.3657 16.4363 49.3124 16.379L36.3222 2.46122C36.2693 2.40479 36.2072 2.36429 36.1416 2.33219C36.1193 2.3212 36.0968 2.31452 36.0735 2.30634C36.0281 2.29061 35.9824 2.28092 35.9347 2.27682C35.9168 2.2751 35.9007 2.26562 35.8826 2.26562H12.9308C11.11 2.26562 9.62862 3.85283 9.62862 5.80366V36.9264H8.77252C7.52355 36.9264 6.50781 38.0147 6.50781 39.3529V48.7468C6.50781 50.085 7.52355 51.1733 8.77252 51.1733H9.62862V55.2068C9.62862 57.1533 11.11 58.7362 12.9308 58.7362H46.1933C48.014 58.7362 49.4954 57.1533 49.4954 55.2068V16.8512C49.4954 16.8322 49.4868 16.8152 49.4852 16.7964C49.4813 16.7441 49.4721 16.6939 49.457 16.6441ZM36.5031 4.52794L47.3827 16.1851H38.5676C37.4292 16.1851 36.5031 15.1924 36.5031 13.9732V4.52794ZM7.74311 48.7468V39.3529C7.74311 38.7445 8.20474 38.2499 8.77252 38.2499H28.6912C29.3981 38.2499 29.9732 38.866 29.9732 39.6235V48.4763C29.9732 49.2337 29.3981 49.8498 28.6912 49.8498H8.77252C8.20474 49.8498 7.74311 49.3552 7.74311 48.7468ZM46.1932 57.4127H12.9308C11.7912 57.4127 10.8639 56.4235 10.8639 55.2068V51.1733H28.6912C30.0793 51.1733 31.2085 49.9635 31.2085 48.4763V39.6235C31.2085 38.1362 30.0793 36.9264 28.6912 36.9264H10.8639V5.80366C10.8639 4.58267 11.7912 3.58915 12.9308 3.58915H35.2678V13.9732C35.2678 15.9223 36.748 17.5086 38.5676 17.5086H48.2601V55.2068C48.2601 56.4235 47.3328 57.4127 46.1932 57.4127Z" fill="black" />
          <path d="M40.102 25.5352H19.02C18.679 25.5352 18.4023 25.8316 18.4023 26.1969C18.4023 26.5623 18.679 26.8587 19.02 26.8587H40.102C40.443 26.8587 40.7197 26.5623 40.7197 26.1969C40.7197 25.8316 40.443 25.5352 40.102 25.5352Z" fill="black" />
          <path d="M19.02 21.7142H29.561C29.902 21.7142 30.1787 21.4177 30.1787 21.0524C30.1787 20.687 29.902 20.3906 29.561 20.3906H19.02C18.679 20.3906 18.4023 20.687 18.4023 21.0524C18.4023 21.4177 18.679 21.7142 19.02 21.7142Z" fill="black" />
          <path d="M40.102 30.6797H19.02C18.679 30.6797 18.4023 30.9761 18.4023 31.3415C18.4023 31.7068 18.679 32.0032 19.02 32.0032H40.102C40.443 32.0032 40.7197 31.7068 40.7197 31.3415C40.7197 30.9761 40.443 30.6797 40.102 30.6797Z" fill="black" />
        </svg>
      </div>

      {/* File info */}
      <div className="flex-1">
        <div className="text-lg font-montserrat font-medium text-black">{resume.filename}</div>
        <div className="text-base font-montserrat text-gray-500">{resume.size} . {resume.uploadDate}</div>
      </div>

      {/* Delete button */}
      <button
        onClick={onDelete}
        className="w-8 h-8 text-black hover:text-red-500 transition-colors flex-shrink-0"
        title="Delete"
      >
        <svg viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M8.38086 11.9297L9.90467 27.1678H22.0951L23.619 11.9297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 21.1667V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 21.1667V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.0957 8.87965H12.1909M12.1909 8.87965L12.7004 6.84198C12.8487 6.24843 13.3821 5.83203 13.9939 5.83203H18.007C18.6189 5.83203 19.1522 6.24843 19.3006 6.84198L19.81 8.87965M12.1909 8.87965H19.81M19.81 8.87965H25.9052" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default function PositionView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { getPosition, updatePosition } = usePositionsStore();
  const { getCriteria, addCriteria, deleteCriteria } = useCriteriaStore();
  const { getResumes, addMultipleResumes, deleteResume } = useResumesStore();
  const { getAnalysisSession } = useAnalysisStore();
  const { isAnalyzing, setIsAnalyzing } = useUIStore();

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAddCriteriaModalOpen, setIsAddCriteriaModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingCriteria, setDeletingCriteria] = useState<Criteria | null>(null);

  const position = getPosition(id!);
  const criteria = getCriteria(id!);
  const resumes = getResumes(id!);
  const analysisSession = getAnalysisSession(id!);

  if (!position) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-montserrat font-bold text-aikyuu-dark mb-4">Position Not Found</h1>
            <p className="text-lg font-montserrat text-gray-600 mb-8">The position you're looking for doesn't exist.</p>
            <Link
              to="/use-cases"
              className="bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold px-8 py-4 rounded-[10px] shadow-sm hover:bg-opacity-90 transition-colors"
            >
              Back to Use Cases
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleUploadResumes = (files: FileList) => {
    const newResumes: Omit<Resume, 'id'>[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const newResume: Omit<Resume, 'id'> = {
        filename: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        uploadDate: 'Just now',
        positionId: id!
      };
      newResumes.push(newResume);
    }
    addMultipleResumes(id!, newResumes);
  };

  const handleAddCriteria = (description: string) => {
    const newCriteria: Omit<Criteria, 'id'> = {
      name: `Criteria-${criteria.length + 1}`,
      description,
      positionId: id!,
      createdDate: "2000"
    };
    addCriteria(id!, newCriteria);
  };

  const handleDeleteCriteria = (criteria: Criteria) => {
    setDeletingCriteria(criteria);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteCriteria = () => {
    if (deletingCriteria) {
      deleteCriteria(id!, deletingCriteria.id);
    }
    setIsDeleteModalOpen(false);
    setDeletingCriteria(null);
  };

  const handleDeleteResume = (resumeId: number) => {
    deleteResume(id!, resumeId);
  };

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

  const handleStartAnalysis = () => {
    if (criteria.length === 0) {
      alert('Please add at least one criteria before starting analysis.');
      return;
    }
    if (resumes.length === 0) {
      alert('Please upload at least one resume before starting analysis.');
      return;
    }

    setIsAnalyzing(true);
    updatePosition(id!, { status: 'in_progress' });

    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      updatePosition(id!, { status: 'completed' });
      // In a real app, this would be triggered by the backend
      navigate(`/position/${id}/completed`);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-11">
          <h1 className="text-3xl font-montserrat font-medium text-aikyuu-dark">
            {position.name}:
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold px-8 py-4 rounded-[10px] shadow-sm hover:bg-opacity-90 transition-colors"
            >
              +Upload Resume
            </button>
            <button
              onClick={() => setIsAddCriteriaModalOpen(true)}
              className="bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold px-8 py-4 rounded-[10px] shadow-sm hover:bg-opacity-90 transition-colors"
            >
              +Add Criteria
            </button>
          </div>
        </div>

        {/* Position Details Card */}
        <div className="bg-white rounded-[15px] p-6 mb-11">
          <div className="space-y-8">
            {/* Position Info */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-montserrat font-bold text-aikyuu-dark">
                  {position.name}
                </h3>
                <span className={`px-5 py-2 rounded-full text-sm font-montserrat font-bold ${config.bg} ${config.text}`}>
                  {config.label}
                </span>
              </div>
              <p className="text-lg font-montserrat text-gray-400 leading-relaxed">
                {position.description}
              </p>
            </div>

            {/* Criteria Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-montserrat font-bold text-aikyuu-dark">
                  Criteria:({criteria.length})
                </h3>
                <button
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="w-11 h-11 text-black hover:text-red-500 transition-colors"
                  title="Delete All"
                >
                  <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M10.1191 13.4688L11.7953 30.2307H25.2049L26.881 13.4688" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.7012 23.6302V16.2969" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.3008 23.6302V16.2969" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.60547 10.118H14.3102M14.3102 10.118L14.8706 7.87657C15.0338 7.22366 15.6205 6.76562 16.2935 6.76562H20.7079C21.381 6.76562 21.9676 7.22366 22.1308 7.87657L22.6912 10.118M14.3102 10.118H22.6912M22.6912 10.118H29.3959" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {criteria.map(criterion => (
                  <CriteriaItem
                    key={criterion.id}
                    criteria={criterion}
                    onDelete={() => handleDeleteCriteria(criterion)}
                  />
                ))}
              </div>
            </div>

            {/* Resumes Section */}
            <div>
              <h3 className="text-xl font-montserrat font-bold text-aikyuu-dark mb-6">
                Resumes:({resumes.length})
              </h3>

              <div className="flex gap-4 flex-wrap">
                {resumes.map(resume => (
                  <ResumeCard
                    key={resume.id}
                    resume={resume}
                    onDelete={() => handleDeleteResume(resume.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Start Analysis Button */}
          <div className="flex justify-center mt-11 gap-4">
            {position.status === 'created' && (
              <button
                onClick={handleStartAnalysis}
                disabled={isAnalyzing || criteria.length === 0 || resumes.length === 0}
                className="bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold px-6 py-4 rounded-[26px] shadow-sm hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? 'Analyzing...' : 'Start Analysis'}
              </button>
            )}
            {position.status === 'in_progress' && (
              <div className="bg-yellow-100 text-yellow-600 font-montserrat text-lg font-bold px-6 py-4 rounded-[26px] shadow-sm">
                Analysis in Progress...
              </div>
            )}
            {position.status === 'completed' && (
              <Link
                to={`/position/${position.id}/completed`}
                className="bg-blue-100 text-aikyuu-primary font-montserrat text-lg font-bold px-6 py-4 rounded-[26px] shadow-sm hover:bg-blue-200 transition-colors"
              >
                View Results
              </Link>
            )}
          </div>
        </div>
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
      <UploadResumeModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleUploadResumes}
      />

      <AddCriteriaModal
        isOpen={isAddCriteriaModalOpen}
        onClose={() => setIsAddCriteriaModalOpen(false)}
        onAdd={handleAddCriteria}
      />

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDeleteCriteria}
        title="Confirm Deletion"
        message="Are you sure you want to delete this criteria? This action cannot be undone."
      />
    </div>
  );
}
