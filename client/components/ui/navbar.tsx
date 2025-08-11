import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AikyuuLogo } from './aikyuu-logo';
import { useUIStore } from '../../store';

interface NavbarProps {
  userCredits?: number;
  userName?: string;
  userAvatar?: string;
}

export function Navbar({ userCredits = 50, userName = "Alice ahmad", userAvatar }: NavbarProps) {
  const {
    currentLanguage,
    setLanguage,
    showProfileDropdown,
    showLanguageDropdown,
    setShowProfileDropdown,
    setShowLanguageDropdown,
  } = useUIStore();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowProfileDropdown(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-gray-50 px-3 md:px-12 py-12">
      <nav className="max-w-7xl mx-auto bg-white rounded-full px-6 md:px-12 py-6 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <Link to="/dashboard" className="flex-shrink-0">
          <AikyuuLogo />
        </Link>

        {/* Navigation Links & Profile */}
        <div className="flex items-center gap-6 md:gap-12">
          {/* Navigation Links */}
          <div className="hidden md:flex items-end gap-8">
            <Link 
              to="/use-cases" 
              className="text-black font-montserrat text-lg md:text-2xl font-bold hover:text-aikyuu-primary transition-colors"
            >
              Use Cases
            </Link>
            <Link 
              to="/pricing" 
              className="text-black font-montserrat text-lg md:text-2xl font-bold hover:text-aikyuu-primary transition-colors"
            >
              Pricing
            </Link>
            <span className="text-black font-montserrat text-lg md:text-2xl font-bold">
              Your Credits :{userCredits}
            </span>
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden hover:ring-2 hover:ring-aikyuu-primary transition-all"
            >
              {userAvatar ? (
                <img 
                  src={userAvatar} 
                  alt={userName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-aikyuu-dark rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              )}
            </button>

            {/* Profile Dropdown */}
            {showProfileDropdown && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-[38px] shadow-lg z-50 p-6">
                {/* User Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-aikyuu-dark rounded-full flex items-center justify-center overflow-hidden">
                    {userAvatar ? (
                      <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-10 h-10 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-black font-quicksand text-lg font-medium">{userName}</span>
                </div>

                {/* Menu Items */}
                <div className="space-y-6">
                  <Link 
                    to="/change-password" 
                    className="flex items-center gap-4 text-black hover:text-aikyuu-primary transition-colors"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2501_1999)">
                        <path d="M10 4.05469C8.38457 4.05469 7.07031 5.36895 7.07031 6.98438V8.74219H5.89844V14.6016H14.1016V8.74219H12.9297V6.98438C12.9297 5.36895 11.6154 4.05469 10 4.05469ZM8.24219 6.98438C8.24219 6.01512 9.03074 5.22656 10 5.22656C10.9693 5.22656 11.7578 6.01512 11.7578 6.98438V8.74219H8.24219V6.98438ZM12.9297 13.4297H7.07031V9.91406H12.9297V13.4297Z" fill="currentColor"/>
                        <path d="M8.24219 11.0859H11.7578V12.2578H8.24219V11.0859Z" fill="currentColor"/>
                        <path d="M10 1.67188C13.1796 1.67188 16.1265 3.42309 17.6908 6.24211L18.7891 8.22137V2.29688H17.6172V4.07563C15.7366 1.83414 12.9578 0.5 10 0.5C4.49379 0.5 0 4.9941 0 10.5H1.17188C1.17188 5.63215 5.13215 1.67188 10 1.67188Z" fill="currentColor"/>
                        <path d="M18.8281 10.5C18.8281 15.3679 14.8679 19.3281 10 19.3281C6.82043 19.3281 3.87348 17.5769 2.30922 14.7579L1.21094 12.7786V18.7031H2.38281V16.9244C4.26336 19.1659 7.04219 20.5 10 20.5C15.5062 20.5 20 16.0059 20 10.5H18.8281Z" fill="currentColor"/>
                      </g>
                    </svg>
                    <span className="font-quicksand text-lg font-medium">Change password</span>
                  </Link>

                  <div className="w-full h-px bg-gray-200"></div>

                  <Link 
                    to="/feedback" 
                    className="flex items-center gap-4 text-black hover:text-aikyuu-primary transition-colors"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14.423C12.1807 14.423 12.3283 14.3657 12.443 14.251C12.5583 14.1363 12.616 13.9887 12.616 13.808C12.616 13.6267 12.5583 13.4787 12.443 13.364C12.3283 13.2493 12.1807 13.192 12 13.192C11.8193 13.192 11.6717 13.2493 11.557 13.364C11.4423 13.4787 11.3847 13.6267 11.384 13.808C11.3833 13.9893 11.441 14.137 11.557 14.251C11.673 14.365 11.8207 14.4223 12 14.423ZM11.5 11.462H12.5V5.385H11.5V11.462ZM3 20.077V4.616C3 4.15533 3.15433 3.771 3.463 3.463C3.77167 3.155 4.15567 3.00067 4.615 3H19.385C19.845 3 20.229 3.15433 20.537 3.463C20.845 3.77167 20.9993 4.156 21 4.616V15.385C21 15.845 20.8457 16.2293 20.537 16.538C20.2283 16.8467 19.8443 17.0007 19.385 17H6.077L3 20.077ZM5.65 16H19.385C19.5383 16 19.6793 15.936 19.808 15.808C19.9367 15.68 20.0007 15.539 20 15.385V4.615C20 4.46167 19.936 4.32067 19.808 4.192C19.68 4.06333 19.539 3.99933 19.385 4H4.615C4.46167 4 4.32067 4.064 4.192 4.192C4.06333 4.32 3.99933 4.461 4 4.615V17.645L5.65 16Z" fill="currentColor"/>
                    </svg>
                    <span className="font-quicksand text-lg font-medium">Feedback</span>
                  </Link>

                  <Link 
                    to="/history" 
                    className="flex items-center gap-4 text-black hover:text-aikyuu-primary transition-colors"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.07934 5.06902C8.87434 1.27902 15.0443 1.31902 18.8623 5.13802C22.6823 8.95802 22.7223 15.131 18.9263 18.926C15.1303 22.721 8.95834 22.682 5.13834 18.862C4.06371 17.792 3.25177 16.4875 2.76629 15.0508C2.28081 13.6142 2.13501 12.0845 2.34034 10.582C2.36726 10.3848 2.47141 10.2064 2.62988 10.086C2.78835 9.96562 2.98815 9.9131 3.18534 9.94002C3.38253 9.96694 3.56095 10.0711 3.68134 10.2296C3.80174 10.388 3.85426 10.5878 3.82734 10.785C3.65302 12.0583 3.77642 13.3547 4.18782 14.5723C4.59923 15.7899 5.28744 16.8954 6.19834 17.802C9.44334 21.046 14.6663 21.065 17.8663 17.866C21.0653 14.666 21.0463 9.44302 17.8023 6.19802C14.5593 2.95602 9.33934 2.93502 6.13934 6.13002L6.88734 6.13302C6.98583 6.13348 7.08327 6.15334 7.17409 6.19145C7.2649 6.22957 7.34733 6.2852 7.41664 6.35517C7.48596 6.42514 7.54082 6.50807 7.57809 6.59924C7.61536 6.69041 7.6343 6.78803 7.63384 6.88652C7.63338 6.98501 7.61353 7.08245 7.57541 7.17327C7.53729 7.26409 7.48166 7.34651 7.41169 7.41583C7.34173 7.48515 7.25879 7.54 7.16762 7.57727C7.07645 7.61454 6.97883 7.63348 6.88034 7.63302L4.33434 7.62102C4.13664 7.61997 3.94735 7.5409 3.80765 7.40101C3.66795 7.26112 3.58913 7.07172 3.58834 6.87402L3.57534 4.33002C3.57481 4.23153 3.59369 4.1339 3.6309 4.0427C3.6681 3.95151 3.72291 3.86854 3.79218 3.79852C3.86145 3.7285 3.94384 3.67282 4.03463 3.63464C4.12542 3.59647 4.22285 3.57655 4.32134 3.57602C4.41983 3.5755 4.51746 3.59438 4.60866 3.63158C4.69985 3.66879 4.78283 3.72359 4.85284 3.79286C4.92286 3.86214 4.97854 3.94452 5.01672 4.03531C5.05489 4.12611 5.07481 4.22353 5.07534 4.32202L5.07934 5.06902ZM11.9993 7.24902C12.1983 7.24902 12.389 7.32804 12.5297 7.46869C12.6703 7.60934 12.7493 7.80011 12.7493 7.99902V11.689L15.0303 13.969C15.102 14.0382 15.1592 14.1209 15.1985 14.2124C15.2379 14.3039 15.2586 14.4023 15.2595 14.5019C15.2604 14.6014 15.2415 14.7002 15.2038 14.7924C15.1662 14.8846 15.1105 14.9684 15.0401 15.0388C14.9698 15.1093 14.886 15.165 14.7939 15.2027C14.7017 15.2405 14.603 15.2595 14.5034 15.2587C14.4038 15.2579 14.3054 15.2372 14.2139 15.198C14.1223 15.1587 14.0396 15.1016 13.9703 15.03L11.2503 12.31V8.00002C11.2503 7.80111 11.3294 7.61034 11.47 7.46969C11.6107 7.32904 11.8014 7.25002 12.0003 7.25002" fill="currentColor"/>
                    </svg>
                    <span className="font-quicksand text-lg font-medium">History</span>
                  </Link>

                  <div className="w-full h-px bg-gray-200"></div>

                  {/* Language Selector */}
                  <div className="relative" ref={languageDropdownRef}>
                    <button
                      onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                      className="flex items-center gap-4 text-black hover:text-aikyuu-primary transition-colors w-full text-left"
                    >
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.2181 9.60435C19.7642 4.71332 15.6373 0.871094 10.6299 0.871094C5.62242 0.871094 1.49556 4.71332 1.04165 9.60435H1V11.3976H1.04165C1.49556 16.2886 5.62242 20.1308 10.6299 20.1308C15.6373 20.1308 19.7642 16.2886 20.2181 11.3976H20.2597V9.60435H20.2181ZM18.4153 9.60435H14.7856C14.6953 7.18901 14.2403 4.83775 13.4366 3.18444C16.1078 4.21242 18.0783 6.66354 18.4153 9.60435ZM10.6299 18.3371C9.87103 18.3371 8.43827 15.8961 8.26739 11.3976H12.9923C12.8215 15.8961 11.3882 18.3371 10.6299 18.3371ZM8.26739 9.60435C8.43827 5.10529 9.87103 2.66431 10.6299 2.66431C11.3882 2.66431 12.8215 5.10529 12.9923 9.60435H8.26739ZM7.82256 3.18444C7.0194 4.83775 6.56389 7.18901 6.47364 9.60435H2.84448C3.18091 6.66354 5.15142 4.21242 7.82256 3.18444ZM2.84448 11.3976H6.47364C6.56389 13.8124 7.0194 16.1642 7.82256 17.8175C5.15142 16.789 3.18091 14.3378 2.84448 11.3976ZM13.4366 17.8175C14.2403 16.1642 14.6953 13.8124 14.7856 11.3976H18.4153C18.0783 14.3378 16.1078 16.789 13.4366 17.8175Z" fill="currentColor" stroke="white" strokeWidth="0.5"/>
                      </svg>
                      <span className="font-quicksand text-lg font-medium">Language</span>
                      <svg className={`w-4 h-4 transition-transform ${showLanguageDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Language Dropdown */}
                    {showLanguageDropdown && (
                      <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-[20px] shadow-lg z-50 p-4">
                        <div className="space-y-2">
                          <button
                            onClick={() => {
                              setLanguage('en');
                              setShowLanguageDropdown(false);
                            }}
                            className={`flex items-center gap-3 w-full p-3 rounded-[15px] transition-colors ${
                              currentLanguage === 'en'
                                ? 'bg-aikyuu-primary text-aikyuu-dark'
                                : 'text-black hover:bg-gray-100'
                            }`}
                          >
                            <span className="text-2xl">🇺🇸</span>
                            <div className="text-left">
                              <div className="font-quicksand text-lg font-medium">English</div>
                              <div className="font-quicksand text-sm text-gray-500">EN</div>
                            </div>
                            {currentLanguage === 'en' && (
                              <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>

                          <button
                            onClick={() => {
                              setLanguage('ja');
                              setShowLanguageDropdown(false);
                            }}
                            className={`flex items-center gap-3 w-full p-3 rounded-[15px] transition-colors ${
                              currentLanguage === 'ja'
                                ? 'bg-aikyuu-primary text-aikyuu-dark'
                                : 'text-black hover:bg-gray-100'
                            }`}
                          >
                            <span className="text-2xl">🇯🇵</span>
                            <div className="text-left">
                              <div className="font-quicksand text-lg font-medium">日本語</div>
                              <div className="font-quicksand text-sm text-gray-500">JA</div>
                            </div>
                            {currentLanguage === 'ja' && (
                              <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link 
                    to="/signin" 
                    className="flex items-center gap-4 text-black hover:text-aikyuu-primary transition-colors"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.3053 11.5073C19.3053 13.6562 19.2979 15.805 19.3097 17.9538C19.3134 18.5956 19.1229 19.1559 18.6918 19.616C18.2525 20.0849 17.704 20.328 17.0419 20.3258C14.3455 20.3166 11.6488 20.3192 8.95228 20.3221C8.06446 20.3231 7.42103 19.9118 6.97816 19.1673C6.76039 18.8014 6.67896 18.3958 6.68031 17.9668C6.68458 16.3958 6.68031 14.8248 6.67188 13.2539C6.67115 13.1121 6.71192 13.0839 6.84291 13.087C7.20387 13.0956 7.56532 13.096 7.92616 13.0867C8.06385 13.0832 8.10645 13.1154 8.10584 13.2622C8.10023 14.8392 8.1034 16.4162 8.10316 17.9932C8.10304 18.3672 8.32276 18.6998 8.7035 18.8558C8.75086 18.8752 8.81019 18.8686 8.86402 18.8687C10.8504 18.8704 12.8367 18.8716 14.8229 18.8725C15.5632 18.8729 16.3041 18.8564 17.0437 18.8783C17.515 18.8922 17.8914 18.4122 17.8912 18.0165C17.891 17.6674 17.8919 17.3183 17.8919 16.9692C17.8919 12.9965 17.8919 9.02393 17.892 5.05131C17.892 4.62413 17.6882 4.33064 17.3063 4.15157C17.2478 4.12415 17.1882 4.13243 17.1293 4.1324C14.4026 4.13071 11.6759 4.13782 8.94947 4.12197C8.45985 4.11913 8.09864 4.61363 8.10047 4.99946C8.10658 6.36577 8.0995 7.73215 8.10743 9.09844C8.10841 9.26932 8.05836 9.30679 7.89833 9.30049C7.57374 9.2877 7.2483 9.2979 6.92335 9.29524C6.67726 9.29322 6.67909 9.34991 6.67933 9.05798C6.68031 7.72177 6.68275 6.38554 6.67726 5.04936C6.67542 4.61633 6.75233 4.20337 6.97376 3.83206C7.41566 3.09076 8.05689 2.67653 8.94081 2.67727C11.6433 2.67952 14.346 2.68521 17.0485 2.6758C17.7166 2.67347 18.2669 2.92272 18.7041 3.39531C19.1303 3.85601 19.3146 4.41996 19.3107 5.06091C19.2975 7.20965 19.3057 9.35852 19.3053 11.5073Z" fill="currentColor"/>
                      <path d="M2.80504 10.3647C2.89754 10.415 2.99325 10.4069 3.08751 10.4069C6.28914 10.4075 9.49076 10.4093 12.6924 10.4072C13.0384 10.4069 13.3232 10.5097 13.4645 10.8435C13.6452 11.2704 13.4606 11.6902 13.0528 11.8585C12.9065 11.9189 12.752 11.9268 12.5943 11.9268C9.38058 11.9263 6.16692 11.928 2.95326 11.9307C2.86672 11.9307 2.74071 11.8927 2.70748 11.9842C2.67634 12.0699 2.79172 12.1294 2.8539 12.1924C3.38579 12.7309 3.91749 13.2696 4.4493 13.8082C4.86132 14.2255 5.26716 14.6492 5.68781 15.0575C5.94122 15.3036 5.99781 15.6037 5.91687 15.9131C5.83618 16.2217 5.5897 16.4084 5.27675 16.4705C4.98568 16.5283 4.75158 16.3891 4.55393 16.1913C4.15512 15.7921 3.76397 15.3852 3.36582 14.9853C2.72929 14.346 2.08736 13.7121 1.45209 13.0716C1.03006 12.646 0.615866 12.2128 0.197725 11.7834C-0.0743347 11.504 -0.0612116 10.9748 0.20979 10.7075C0.493638 10.4274 0.760947 10.1317 1.04698 9.85308C1.47977 9.43157 1.88805 8.98492 2.3077 8.54986C2.61984 8.22631 2.93352 7.90423 3.24648 7.58141C3.6018 7.21496 3.95059 6.84185 4.31532 6.48498C4.47839 6.32543 4.62105 6.13763 4.8523 6.05352C5.26082 5.90514 5.71334 6.11529 5.8644 6.51617C6.00141 6.87981 5.88952 7.1693 5.6285 7.43285C5.0025 8.065 4.37404 8.69518 3.76491 9.34338C3.45675 9.67132 3.12588 9.97717 2.83092 10.3173C2.8203 10.3295 2.81488 10.3463 2.80504 10.3647Z" fill="currentColor"/>
                    </svg>
                    <span className="font-quicksand text-lg font-medium">Sign out</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
