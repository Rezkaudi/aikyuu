# Zustand State Management

This project uses Zustand for state management with a modular store architecture.

## Store Structure

### Core Data Stores

#### 1. **Positions Store** (`positionsStore.ts`)
- Manages job positions
- Actions: `getPosition`, `updatePosition`, `addPosition`, `deletePosition`, `duplicatePosition`
- Persisted to localStorage

#### 2. **Criteria Store** (`criteriaStore.ts`) 
- Manages position criteria
- Actions: `getCriteria`, `setCriteria`, `addCriteria`, `updateCriteria`, `deleteCriteria`
- Persisted to localStorage

#### 3. **Resumes Store** (`resumesStore.ts`)
- Manages uploaded resumes
- Actions: `getResumes`, `setResumes`, `addResume`, `addMultipleResumes`, `deleteResume`, `updateResume`
- Persisted to localStorage

#### 4. **Analysis Store** (`analysisStore.ts`)
- Manages CV analysis sessions and results
- Actions: `getAnalysisSession`, `setAnalysisSession`, `deleteAnalysisSession`, `completeAnalysis`
- Persisted to localStorage

### UI State Store

#### 5. **UI Store** (`uiStore.ts`)
- Manages application UI state (not persisted)
- Features:
  - Language settings (`currentLanguage`, `setLanguage`)
  - Loading states (`isAnalyzing`, `setIsAnalyzing`)
  - Modal states (`modals`, `openModal`, `closeModal`, `closeAllModals`)
  - Dropdown states (`showProfileDropdown`, `showLanguageDropdown`)
  - View toggle states (`showCriteria`, `showAnalysis`)
  - Pagination (`showAll`, `setShowAll`)

## Usage Examples

### Basic Store Usage
```tsx
import { usePositionsStore, useCriteriaStore } from '../store';

function MyComponent() {
  const { positions, updatePosition } = usePositionsStore();
  const { getCriteria, addCriteria } = useCriteriaStore();
  
  // Use the stores...
}
```

### Performance Optimized Selectors
```tsx
import { usePositionById, useCriteriaByPosition } from '../store';

function PositionDetail({ positionId }: { positionId: string }) {
  const position = usePositionById(positionId); // Only re-renders when this specific position changes
  const criteria = useCriteriaByPosition(positionId); // Only re-renders when criteria for this position changes
  
  // Component logic...
}
```

### Combined Store Access
```tsx
import { useAppStores } from '../store';

function ComplexComponent() {
  const stores = useAppStores(); // Access all stores at once
  
  // stores.positions, stores.criteria, stores.resumes, stores.analysis, stores.ui
}
```

## Features

### 🔄 **Persistence**
- All data stores are automatically persisted to localStorage
- UI state is ephemeral (not persisted)

### 🛠️ **DevTools**
- Full Redux DevTools integration for debugging
- Each action is labeled for easy tracking

### ⚡ **Performance**
- Selective subscriptions prevent unnecessary re-renders
- Optimized selectors for common use cases

### 🏗️ **Modular Architecture**
- Each store handles a specific domain
- Clear separation of concerns
- Easy to test and maintain

## Data Flow

```
User Action → Zustand Store → Component Re-render → UI Update
     ↓
Local Storage (for persistence)
```

## Migration from Previous Store

The new Zustand stores replace the old `useAppStore` hook with:
- Better separation of concerns
- Improved performance through selective subscriptions
- Enhanced debugging capabilities
- Cleaner API surface
