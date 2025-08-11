import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UIState {
  // Language settings
  currentLanguage: string;
  setLanguage: (language: string) => void;
  
  // Loading states
  isAnalyzing: boolean;
  setIsAnalyzing: (analyzing: boolean) => void;
  
  // Modal states
  modals: {
    uploadResume: boolean;
    addCriteria: boolean;
    deleteConfirm: boolean;
    editPosition: boolean;
    duplicate: boolean;
  };
  openModal: (modalName: keyof UIState['modals']) => void;
  closeModal: (modalName: keyof UIState['modals']) => void;
  closeAllModals: () => void;
  
  // Dropdown states
  showProfileDropdown: boolean;
  showLanguageDropdown: boolean;
  setShowProfileDropdown: (show: boolean) => void;
  setShowLanguageDropdown: (show: boolean) => void;
  
  // View states
  showCriteria: boolean;
  showAnalysis: boolean;
  setShowCriteria: (show: boolean) => void;
  setShowAnalysis: (show: boolean) => void;
  
  // Pagination
  showAll: boolean;
  setShowAll: (show: boolean) => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      // Language settings
      currentLanguage: 'en',
      setLanguage: (language: string) => {
        set({ currentLanguage: language }, false, 'setLanguage');
      },
      
      // Loading states
      isAnalyzing: false,
      setIsAnalyzing: (analyzing: boolean) => {
        set({ isAnalyzing: analyzing }, false, 'setIsAnalyzing');
      },
      
      // Modal states
      modals: {
        uploadResume: false,
        addCriteria: false,
        deleteConfirm: false,
        editPosition: false,
        duplicate: false,
      },
      openModal: (modalName) => {
        set(
          (state) => ({
            modals: { ...state.modals, [modalName]: true }
          }),
          false,
          'openModal'
        );
      },
      closeModal: (modalName) => {
        set(
          (state) => ({
            modals: { ...state.modals, [modalName]: false }
          }),
          false,
          'closeModal'
        );
      },
      closeAllModals: () => {
        set(
          {
            modals: {
              uploadResume: false,
              addCriteria: false,
              deleteConfirm: false,
              editPosition: false,
              duplicate: false,
            }
          },
          false,
          'closeAllModals'
        );
      },
      
      // Dropdown states
      showProfileDropdown: false,
      showLanguageDropdown: false,
      setShowProfileDropdown: (show: boolean) => {
        set({ showProfileDropdown: show }, false, 'setShowProfileDropdown');
      },
      setShowLanguageDropdown: (show: boolean) => {
        set({ showLanguageDropdown: show }, false, 'setShowLanguageDropdown');
      },
      
      // View states
      showCriteria: true,
      showAnalysis: true,
      setShowCriteria: (show: boolean) => {
        set({ showCriteria: show }, false, 'setShowCriteria');
      },
      setShowAnalysis: (show: boolean) => {
        set({ showAnalysis: show }, false, 'setShowAnalysis');
      },
      
      // Pagination
      showAll: false,
      setShowAll: (show: boolean) => {
        set({ showAll: show }, false, 'setShowAll');
      }
    }),
    {
      name: 'ui-store'
    }
  )
);
