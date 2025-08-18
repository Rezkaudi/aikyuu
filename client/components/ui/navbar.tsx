import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Container,
  Paper
} from '@mui/material';
import {
  Language as LanguageIcon,
  Logout as LogoutIcon,
  Feedback as FeedbackIcon,
  History as HistoryIcon,
  Lock as LockIcon
} from '@mui/icons-material';
import { AikyuuLogo } from './aikyuu-logo';
import { useUIStore } from '@/store/uiStore';

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
    <Box sx={{ width: '100%', backgroundColor: 'background.default', px: { xs: 1.5, md: 6 }, py: 6 }}>
      <Paper sx={{
        maxWidth: '1280px',
        mx: 'auto',
        borderRadius: '50px',
        px: { xs: 3, md: 6 },
        py: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 1
      }}>
        {/* Logo */}
        <Box component={Link} to="/dashboard" sx={{ flexShrink: 0, textDecoration: 'none' }}>
          <AikyuuLogo />
        </Box>

        {/* Navigation Links & Profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 3, md: 6 } }}>
          {/* Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'flex-end', gap: 4 }}>
            <Button
              component={Link}
              to="/use-cases"
              sx={{
                color: 'text.primary',
                fontFamily: 'Montserrat',
                fontSize: { md: '1.125rem', lg: '1.5rem' },
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': { color: 'primary.main' }
              }}
            >
              Use Cases
            </Button>
            <Button
              component={Link}
              to="/pricing"
              sx={{
                color: 'text.primary',
                fontFamily: 'Montserrat',
                fontSize: { md: '1.125rem', lg: '1.5rem' },
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': { color: 'primary.main' }
              }}
            >
              Pricing
            </Button>
            <Typography sx={{
              color: 'text.primary',
              fontFamily: 'Montserrat',
              fontSize: { md: '1.125rem', lg: '1.5rem' },
              fontWeight: 700
            }}>
              Your Credits :{userCredits}
            </Typography>
          </Box>

          {/* Profile Dropdown */}
          <Box sx={{ position: 'relative' }} ref={dropdownRef}>
            <Button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              sx={{
                p: 0,
                minWidth: 0,
                width: { xs: '48px', md: '64px' },
                height: { xs: '48px', md: '64px' },
                borderRadius: '50%',
                overflow: 'hidden',
                '&:hover': {
                  outline: '2px solid',
                  outlineColor: 'primary.main'
                }
              }}
            >
              <Avatar
                src={userAvatar}
                alt={userName}
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: userAvatar ? 'transparent' : 'primary.dark'
                }}
              >
                {!userAvatar && (
                  <Box sx={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'background.paper',
                    borderRadius: '50%'
                  }} />
                )}
              </Avatar>
            </Button>

            {/* Profile Dropdown */}
            {showProfileDropdown && (
              <Paper sx={{
                position: 'absolute',
                top: '100%',
                right: 0,
                mt: 1,
                width: '320px',
                borderRadius: '38px',
                boxShadow: 3,
                zIndex: 50,
                p: 3
              }}>
                {/* User Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Avatar
                    src={userAvatar}
                    alt={userName}
                    sx={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'primary.dark'
                    }}
                  >
                    {!userAvatar && (
                      <Box sx={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'background.paper',
                        borderRadius: '50%'
                      }} />
                    )}
                  </Avatar>
                  <Typography sx={{
                    color: 'text.primary',
                    fontFamily: 'Quicksand',
                    fontSize: '1.125rem',
                    fontWeight: 500
                  }}>
                    {userName}
                  </Typography>
                </Box>

                {/* Menu Items */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Button
                    component={Link}
                    to="/change-password"
                    onClick={() => setShowProfileDropdown(false)}
                    startIcon={<LockIcon />}
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'text.primary',
                      fontFamily: 'Quicksand',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    Change password
                  </Button>

                  <Divider />

                  <Button
                    component={Link}
                    to="/feedback"
                    onClick={() => setShowProfileDropdown(false)}
                    startIcon={<FeedbackIcon />}
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'text.primary',
                      fontFamily: 'Quicksand',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    Feedback
                  </Button>

                  <Button
                    component={Link}
                    to="/history"
                    onClick={() => setShowProfileDropdown(false)}
                    startIcon={<HistoryIcon />}
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'text.primary',
                      fontFamily: 'Quicksand',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    History
                  </Button>

                  <Divider />

                  {/* Language Selector */}
                  <Box sx={{ position: 'relative' }} ref={languageDropdownRef}>
                    <Button
                      onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                      startIcon={<LanguageIcon />}
                      sx={{
                        justifyContent: 'flex-start',
                        color: 'text.primary',
                        fontFamily: 'Quicksand',
                        fontSize: '1.125rem',
                        fontWeight: 500,
                        textTransform: 'none',
                        width: '100%',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      Language
                    </Button>

                    {/* Language Dropdown */}
                    {showLanguageDropdown && (
                      <Paper sx={{
                        position: 'absolute',
                        bottom: '100%',
                        right: 0,
                        mb: 1,
                        width: '192px',
                        borderRadius: '20px',
                        boxShadow: 3,
                        zIndex: 50,
                        p: 2
                      }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <Button
                            onClick={() => {
                              setLanguage('en');
                              setShowLanguageDropdown(false);
                            }}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                              width: '100%',
                              p: 1.5,
                              borderRadius: '15px',
                              justifyContent: 'flex-start',
                              textTransform: 'none',
                              ...(currentLanguage === 'en' ? {
                                backgroundColor: 'primary.main',
                                color: 'text.primary',
                              } : {
                                color: 'text.primary',
                                '&:hover': { backgroundColor: 'grey.100' },
                              }),
                            }}
                          >
                            <Typography sx={{ fontSize: '1.5rem' }}>🇺🇸</Typography>
                            <Box sx={{ textAlign: 'left', flex: 1 }}>
                              <Typography sx={{ fontFamily: 'Quicksand', fontSize: '1.125rem', fontWeight: 500 }}>
                                English
                              </Typography>
                              <Typography sx={{ fontFamily: 'Quicksand', fontSize: '0.875rem', color: 'text.secondary' }}>
                                EN
                              </Typography>
                            </Box>
                          </Button>

                          <Button
                            onClick={() => {
                              setLanguage('ja');
                              setShowLanguageDropdown(false);
                            }}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                              width: '100%',
                              p: 1.5,
                              borderRadius: '15px',
                              justifyContent: 'flex-start',
                              textTransform: 'none',
                              ...(currentLanguage === 'ja' ? {
                                backgroundColor: 'primary.main',
                                color: 'text.primary',
                              } : {
                                color: 'text.primary',
                                '&:hover': { backgroundColor: 'grey.100' },
                              }),
                            }}
                          >
                            <Typography sx={{ fontSize: '1.5rem' }}>🇯🇵</Typography>
                            <Box sx={{ textAlign: 'left', flex: 1 }}>
                              <Typography sx={{ fontFamily: 'Quicksand', fontSize: '1.125rem', fontWeight: 500 }}>
                                日本語
                              </Typography>
                              <Typography sx={{ fontFamily: 'Quicksand', fontSize: '0.875rem', color: 'text.secondary' }}>
                                JA
                              </Typography>
                            </Box>
                          </Button>
                        </Box>
                      </Paper>
                    )}
                  </Box>

                  <Button
                    component={Link}
                    to="/signin"
                    onClick={() => setShowProfileDropdown(false)}
                    startIcon={<LogoutIcon />}
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'text.primary',
                      fontFamily: 'Quicksand',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    Sign out
                  </Button>
                </Box>
              </Paper>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
